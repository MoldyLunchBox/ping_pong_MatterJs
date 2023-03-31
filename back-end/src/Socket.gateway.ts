import { WebSocketGateway, WebSocketServer, OnGatewayInit, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Body, Engine, World, Bodies } from 'matter-js';
import WebSocket from 'ws';



class matterNode {
    private engine: Engine;
    private world: World;
    private ball: any;
    private leftPaddle: any;
    private rightPaddle: any;
    private paddles: {}
    private availablePaddles = ['left', 'right']; // List of available paddles
    private server: any
    constructor(server: any) {
        this.server = server;
        this.engine = Engine.create();
        this.world = this.engine.world;
        this.engine.gravity = {
            x: 0,
            y: 0,
            scale: 0
        };
        this.ball = Bodies.circle(100, 100, 20, { restitution: 1.01, friction: 0, frictionAir: 0 });
        this.leftPaddle = Bodies.rectangle(50, 300, 40, 200, { isStatic: true });
        this.rightPaddle = Bodies.rectangle(1000 - 50, 300, 40, 200, { isStatic: true })
        this.paddles = { left: this.leftPaddle, right: this.rightPaddle }
        var ground = Bodies.rectangle(500, 0, 1000, 20, {
            isStatic: true,
            render: {
                fillStyle: 'blue'
            }
        });
        var wallLeft = Bodies.rectangle(0, 300, 20, 1000, {
            isStatic: true,
            render: {
                fillStyle: 'green'
            }
        });
        Body.setVelocity(this.ball, { x: 5, y: 5 });

        var roof = Bodies.rectangle(500, 600, 1000, 20, {
            isStatic: true,
            render: {
                fillStyle: 'red'
            }
        });
        var wall = Bodies.rectangle(1000, 300, 20, 1000, {
            isStatic: true,
            render: {
                fillStyle: 'green'
            }
        });

        World.add(this.world, [this.ball, ground, wall, roof, wallLeft, this.leftPaddle, this.rightPaddle]);
        // Start the engine and update the ball's position
        Engine.run(this.engine);

    }

    sendBallPosition() {
        setInterval(() => {
            this.server.emit('ballPosition', { x: this.ball.position.x, y: this.ball.position.y });


        }, 1000 / 60);
    }
    handleConnection(client: Socket) {
        console.log("someone got in")
        const availablePaddle = this.availablePaddles.shift(); // Get the next available paddle
        if (availablePaddle) {
            client.emit('paddleAssigned', availablePaddle); // Send the paddle assignment to the client
            client.data.paddle = availablePaddle; // Set the paddle assignment to the client
            client.on(availablePaddle, (data: WebSocket.Data) => {
                // console.log(`Received message from client`);
                console.log(availablePaddle, data.x)

                Body.setPosition(this.paddles[availablePaddle], { x: data.x, y: data.y });
                this.server.emit(availablePaddle, { x: data.x, y: data.y }); // Send the paddle assignment to the client

            });
        } else {
            console.log("joining user  forced to disconnect")
            client.disconnect(); // No available paddles, disconnect the user
        }
    }
    setPaddlePosition(data: { x: string, y: string }) {
        const { x, y } = data;
        Body.setPosition(this.leftPaddle, { x: 60, y: y });
    }
    handleDisconnect(client: Socket) {
        console.log("user left and his paddle is:", client.data.paddle)
        this.availablePaddles.push(client.data.paddle)
        console.log(this.availablePaddles)
      }

}


@WebSocketGateway(3008, { cors: "*" })
export class GameGateway implements OnGatewayInit {
    @WebSocketServer() server;
    private MatterNode: matterNode
    constructor() { }
    afterInit() {
        console.log("server")
        console.log(this.server)
        this.MatterNode = new matterNode(this.server)
        this.MatterNode.sendBallPosition()
    }

    handleConnection(client: Socket) {
        this.MatterNode.handleConnection(client);
    }
    @SubscribeMessage('paddle')
    setPaddlePosition(@MessageBody() data: { x: string, y: string }): void {
        this.MatterNode.setPaddlePosition(data)
    }
    handleDisconnect(client: Socket) {
        this.MatterNode.handleDisconnect(client);
    }

}