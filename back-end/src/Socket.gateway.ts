import { WebSocketGateway, WebSocketServer, OnGatewayInit, ConnectedSocket, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Body, Engine, World, Bodies } from 'matter-js';
import WebSocket from 'ws';

interface measurements{
    divHeight: number,
    divWidth: number,
    wallBottom:{ x: number, y: number, width: number, height: number },
    wallTop:{ x: number, y: number, width: number, height: number },
    wallLeft:{ x: number, y: number, width: number, height: number },
    wallRight:{ x: number, y: number, width: number, height: number },
}

class matterNode {
    private engine: Engine;
    private world: World;
    private ball: any;
    private leftPaddle: any;
    private rightPaddle: any;
    private paddles: {}  // contains the actual matter-js objects for the paddles
    private availablePaddles = ['left', 'right']; // List of available paddles
    private server: any
    private roomId: string
    private obj: measurements  // window measurements, and positions of some objects
    constructor(server: any, roomId: string, obj: measurements ) {
        this.roomId = roomId
        this.server = server;
        this.obj = obj
        this.engine = Engine.create();
        this.world = this.engine.world;
        this.engine.gravity = {
            x: 0,
            y: 0,
            scale: 0
        };
        this.ball = Bodies.circle(100, 100, 20, { restitution: 1.01, friction: 0, frictionAir: 0 });
        this.leftPaddle = Bodies.rectangle(50, this.obj.divHeight / 2, 40, 200, { isStatic: true });
        this.rightPaddle = Bodies.rectangle(this.obj.divWidth - 50, this.obj.divHeight / 2, 40, 200, { isStatic: true })
        this.paddles = { left: this.leftPaddle, right: this.rightPaddle }
        var roof = Bodies.rectangle(obj.wallTop.x, obj.wallTop.y, obj.wallTop.width, obj.wallTop.height, {
            isStatic: true,
            render: {
                fillStyle: 'blue'
            }
        });
        var wallLeft = Bodies.rectangle(obj.wallLeft.x, obj.wallLeft.y, obj.wallLeft.width, obj.wallLeft.height, {
            isStatic: true,
            render: {
                fillStyle: 'green'
            }
        });
        Body.setVelocity(this.ball, { x: 5, y: 5 });

        var ground = Bodies.rectangle(obj.wallBottom.x, obj.wallBottom.y, obj.wallBottom.width, obj.wallBottom.height, {
            isStatic: true,
            render: {
                fillStyle: 'red'
            }
        });
        var wall = Bodies.rectangle(obj.wallRight.x, obj.wallRight.y, obj.wallRight.width, obj.wallRight.height, {
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
            this.server.to(this.roomId).emit('ballPosition', { x: this.ball.position.x, y: this.ball.position.y });


        }, 1000 / 60);
    }
    handleConnection(client: Socket) {
        console.log("someone got in")
        const availablePaddle = this.availablePaddles.shift(); // Get the next available paddle
        if (availablePaddle) {
            client.emit('paddleAssigned', availablePaddle); // Send the paddle assignment to the client
            client.data.paddle = availablePaddle; // Set the paddle assignment to the client

            client.on(availablePaddle, (data: WebSocket.Data) => {

                Body.setPosition(this.paddles[availablePaddle], { x: data.x, y: data.y });
                this.server.to(this.roomId).emit(availablePaddle, { x: data.x, y: data.y }); // Send the paddle assignment to the client

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
    private worlds = {};
    private world: matterNode
    constructor() { }
    afterInit() {
        this.worlds = {};
        //     console.log("server")
        //     console.log(this.server)
        //     this.MatterNode = new matterNode(this.server)
        //     this.MatterNode.sendBallPosition()

    }
    @SubscribeMessage('joinRoom')

    handleJoinRoom(@MessageBody() data: { roomId: string,  obj: measurements }, @ConnectedSocket() client: Socket) {
        const { roomId } = data;
        console.log("user joined room", roomId, "and page height is", data)
        if (!this.worlds[roomId]) {
            this.world = new matterNode(this.server, roomId, data.obj);
            this.worlds[roomId] = this.world
        }
        else
            this.world = this.worlds[roomId];

        client.join(roomId); // add the client to the specified room
        this.world.handleConnection(client)
        this.world.sendBallPosition()

    }

    handleConnection(client: Socket) {
        console.log("user connected handle connection")
    }
    @SubscribeMessage('paddle')
    setPaddlePosition(@MessageBody() data: { x: string, y: string }): void {
        this.world.setPaddlePosition(data)
    }
    handleDisconnect(client: Socket) {
        this.world.handleDisconnect(client);
    }

}