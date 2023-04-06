import { WebSocketGateway, WebSocketServer, OnGatewayInit, ConnectedSocket, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Body, Engine, World, Bodies, Composite } from 'matter-js';
import WebSocket from 'ws';

interface measurements{
    divHeight: number,
    divWidth: number,
    wallBottom:{ x: number, y: number, width: number, height: number },
    wallTop:{ x: number, y: number, width: number, height: number },
    wallLeft:{ x: number, y: number, width: number, height: number },
    wallRight:{ x: number, y: number, width: number, height: number },
    leftPaddle:{ x: number, y: number, width: number, height: number },
    rightPaddle:{ x: number, y: number, width: number, height: number },

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
    translateCords(){
       this.obj = { 
        divHeight: this.obj.divHeight,
        divWidth: this.obj.divWidth,
        wallBottom:{ x: 1000 * this.obj.wallBottom.x / this.obj.divWidth, y: 1000 * this.obj.wallBottom.y / this.obj.divHeight, width: 1000 * this.obj.wallBottom.width / this.obj.divWidth, height: 1000 * this.obj.wallBottom.height / this.obj.divHeight },
        wallTop:{ x: 1000 * this.obj.wallTop.x / this.obj.divWidth, y: 1000 * this.obj.wallTop.y / this.obj.divHeight, width: 1000 * this.obj.wallTop.width / this.obj.divWidth, height: 1000 * this.obj.wallTop.height / this.obj.divHeight },
        wallLeft:{ x: 1000 * this.obj.wallLeft.x / this.obj.divWidth, y: 1000 * this.obj.wallLeft.y / this.obj.divHeight, width: 1000 * this.obj.wallLeft.width / this.obj.divWidth, height: 1000 * this.obj.wallLeft.height / this.obj.divHeight },
        wallRight:{ x: 1000 * this.obj.wallRight.x / this.obj.divWidth, y: 1000 * this.obj.wallRight.y / this.obj.divHeight, width: 1000 * this.obj.wallRight.width / this.obj.divWidth, height: 1000 * this.obj.wallRight.height / this.obj.divHeight },
        leftPaddle:{ x: 1000 * this.obj.leftPaddle.x / this.obj.divWidth, y: 1000 * this.obj.leftPaddle.y / this.obj.divHeight, width: 1000 * this.obj.leftPaddle.width / this.obj.divWidth, height: 1000 * this.obj.leftPaddle.height / this.obj.divHeight },
        rightPaddle:{ x: 1000 * this.obj.rightPaddle.x / this.obj.divWidth, y: 1000 * this.obj.rightPaddle.y / this.obj.divHeight, width: 1000 * this.obj.rightPaddle.width / this.obj.divWidth, height: 1000 * this.obj.rightPaddle.height / this.obj.divHeight },
       }
    }
    constructor(server: any, roomId: string, obj: measurements ) {
        this.roomId = roomId
        this.server = server;
        // cords and measurements of objects
        this.obj = obj
        console.log(obj)
        this.translateCords() // translate the cords from frontend screen to backend screen
        obj = this.obj
        console.log(this.obj)
        this.engine = Engine.create();
        this.world = this.engine.world;
        this.engine.gravity = {
            x: 0,
            y: 0,
            scale: 0
        };
        this.ball = Bodies.circle(500, 500, 20, { restitution: 1.01, friction: 0, frictionAir: 0 });
        this.leftPaddle = Bodies.rectangle(this.obj.leftPaddle.x, this.obj.leftPaddle.y, this.obj.leftPaddle.width, this.obj.leftPaddle.height, { isStatic: true });
        this.rightPaddle = Bodies.rectangle(this.obj.rightPaddle.x, this.obj.rightPaddle.y, this.obj.rightPaddle.width, this.obj.rightPaddle.height, { isStatic: true })
        this.paddles = { left: this.leftPaddle, right: this.rightPaddle }
        var roof = Bodies.rectangle(obj.wallTop.x, obj.wallTop.y, obj.wallTop.width, obj.wallTop.height, {
            isStatic: true,
            render: {
                fillStyle: 'blue'
            }
        });
        var wallLeft = Bodies.rectangle(obj.wallLeft.x, obj.wallLeft.y, obj.wallLeft.width, obj.wallLeft.height, {
            label:"leftwall",
            isStatic: true,
            render: {
                fillStyle: 'green'
            }
        });
        Body.setVelocity(this.ball, { x: 5, y: 0 });

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
                
                console.log("screen wid:", this.obj.divWidth, "          screen height: " + this.obj.divHeight )
                console.log("paddle y before:", data.y)
                console.log("paddle y:",1000 * data.y / this.obj.divHeight)
                console.log("bounds:", this.world.bodies[4].bounds)
                console.log("ball y:",this.ball.position.y, "\n\n")
                console.log("ball x:",this.ball.position.x, "\n\n")

                Body.setPosition(this.paddles[availablePaddle], { x: 1000 * data.x / this.obj.divWidth, y: 1000 * data.y / this.obj.divHeight });
                // Send the paddle assignment to the client
                this.server.to(this.roomId).emit(availablePaddle, { x: 1000 * data.x / this.obj.divWidth, y: 1000 * data.y / this.obj.divHeight }); 
            });
            client.on("mouseUp", (data: WebSocket.Data) => {
                Body.setPosition(this.paddles[availablePaddle], { x: 1000 * data.x / this.obj.divWidth, y: 1000 * data.y / this.obj.divHeight });
                // Send the paddle assignment to the client
                Body.setVelocity(this.ball, { x: 5, y:0});

                this.server.to(this.roomId).emit(availablePaddle, { x: 1000 * data.x / this.obj.divWidth, y: 1000 * data.y / this.obj.divHeight }); 
            });
            client.on("windowResize", (data: {newScreen: { w: number, h: number }}) => {
                const {newScreen} = data
                var  scaleX = newScreen.w / 1000
                var  scaleY = newScreen.h / 1000;
                Composite.allBodies(this.engine.world).forEach(function(body) {
                    // Update dimensions
                    console.log(body.label)
                    var  scaleX = newScreen.w / 1000
                    var  scaleY = newScreen.h / 1000;
                    if (body.label !== "ball")
                    Body.scale(body, scaleX, scaleY);
                    // Update position
                    var newPosition = {
                      x: body.position.x * scaleX,
                      y: body.position.y * scaleY
                    };
                    console.log()
                    Body.setPosition(body, newPosition);
                  });
              });
        } else {
            console.log("joining user  forced to disconnect")
            client.disconnect(); // No available paddles, disconnect the user
        }
    }

    handleDisconnect(client: Socket) {
        console.log("user left and his paddle is:", client.data.paddle)
        if (client.data !== undefined)
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
        console.log("user connected handle connection.")
    }

    handleDisconnect(client: Socket) {
        console.log(this.world)
        this.world?.handleDisconnect(client);
    }

}