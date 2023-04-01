import Matter, { Events, Engine, World, Bodies } from "matter-js";
import io, { Socket } from "socket.io-client"

interface MatterModules {
    Engine: typeof Matter.Engine;
    Render: typeof Matter.Render;
    Runner: typeof Matter.Runner;
    Bodies: typeof Matter.Bodies;
    Body: typeof Matter.Body;
    Composite: typeof Matter.Composite;
    Mouse: typeof Matter.Mouse;
    MouseConstraint: typeof Matter.MouseConstraint;
}

interface MatterObjects {
    engine: any
    render: any
    runner: any
    mouse: any
    mouseConstraint: any
}

interface MatterBodies {
    ball: Matter.Body
    leftPaddle: Matter.Body
    rightPaddle: Matter.Body
    myPaddle: Matter.Body
    othersPaddle: Matter.Body
    ground: Matter.Body
    roof: Matter.Body
    wall: Matter.Body
    wallLeft: Matter.Body
}

export class matterJsModules {
    socket: Socket
    modules: MatterModules;
    objects: MatterObjects = { engine: null, render: null, runner: null, mouse: null, mouseConstraint: null };
    bodies: MatterBodies
    paddleSide: string = ""
    constructor() {
        this.socket = io('http://localhost:3008');
        this.socket.emit('joinRoom', { roomId: 'room1' });

        this.modules = {
            Engine: Matter.Engine,
            Render: Matter.Render,
            Runner: Matter.Runner,
            Bodies: Matter.Bodies,
            Body: Matter.Body,
            Composite: Matter.Composite,
            Mouse: Matter.Mouse,
            MouseConstraint: Matter.MouseConstraint,
        }
        this.bodies = {
            ball: this.modules.Bodies.circle(400, 200, 20),

            leftPaddle: this.modules.Bodies.rectangle(50, 300, 40, 200, {
                isStatic: true, render: {
                    fillStyle: 'green'
                }
            }),
            rightPaddle: this.modules.Bodies.rectangle(1000 - 50, 300, 40, 200, {
                isStatic: true, render: {
                    fillStyle: 'red'
                }
            }),
            myPaddle: this.modules.Bodies.rectangle(0, 0, 0, 0, { isStatic: true }),
            othersPaddle: this.modules.Bodies.rectangle(0, 0, 0, 0, { isStatic: true }),
            ground: this.modules.Bodies.rectangle(500, 0, 1000, 20, {
                isStatic: true,
                render: {
                    fillStyle: 'blue'
                }
            }),
            roof: this.modules.Bodies.rectangle(500, 600, 1000, 20, {
                isStatic: true,
                render: {
                    fillStyle: 'red'
                }
            }),
            wall: this.modules.Bodies.rectangle(1000, 300, 20, 1000, {
                isStatic: true,
                render: {
                    fillStyle: 'green'
                }
            }),
            wallLeft: this.modules.Bodies.rectangle(0, 300, 20, 1000, {
                isStatic: true,
                render: {
                    fillStyle: 'green'
                }
            }),

        }
        this.socket.on("paddleAssigned", (data) => {
            console.log("recieved paddle", data)
            this.paddleSide = data
            if (this.paddleSide == "left") {
                this.bodies.myPaddle = this.bodies.leftPaddle
                this.bodies.othersPaddle = this.bodies.rightPaddle

            } else {
                this.bodies.myPaddle = this.bodies.rightPaddle
                this.bodies.othersPaddle = this.bodies.leftPaddle

            }

            this.updateOtherPaddle()
        })

    }
    createModules() {
        this.objects.engine = this.modules.Engine.create(),
            this.objects.render = this.modules.Render.create({
                element: document.body,
                engine: this.objects.engine,
                options: {
                    background: "transparent",
                    wireframes: false,
                    width: 1000,
                    height: 600,
                }
            }),
            this.objects.runner = this.modules.Runner.create(),
            this.objects.mouse = this.modules.Mouse.create(this.objects.render.canvas),
            this.objects.mouseConstraint = this.modules.MouseConstraint.create(this.objects.engine, {
                mouse: this.objects.mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            })
    }

    createBodies() {

        this.modules.Composite.add(this.objects.engine.world, [this.bodies.ball, this.bodies.leftPaddle, this.bodies.ground, this.bodies.roof, this.bodies.wall, this.bodies.wallLeft, this.bodies.rightPaddle]);
    }
    events() {

        Events.on(this.objects.mouseConstraint, "mousemove", (e) => {
            this.modules.Body.setPosition(this.bodies.myPaddle, { x: this.bodies.myPaddle.position.x, y: e.mouse.position.y });
            console.log(this.bodies.myPaddle)
            this.socket?.emit(this.paddleSide, { x: this.bodies.myPaddle.position.x, y: e.mouse.position.y })

        })

        Events.on(this.objects.mouseConstraint, "mouseup", (e) => {
            this.modules.Body.setVelocity(this.bodies.ball, { x: 5, y: 5 });
        })
    }

    run() {
        this.modules.Composite.add(this.objects.engine.world, [this.objects.mouseConstraint]);

        this.modules.Render.run(this.objects.render);
        this.modules.Runner.run(this.objects.runner, this.objects.engine);
    }

    socketStuff() {
        this.socket.on('ballPosition', (data) => {
            // Update the ball's position
            this.bodies.ball.position.x = data.x;
            this.bodies.ball.position.y = data.y;
        });


    }

    updateOtherPaddle() {
        if (this.paddleSide.length > 1) {
            // Update the other's paddle position
            if (this.paddleSide == "left")
                this.socket.on("right", (data) => {
                    this.modules.Body.setPosition(this.bodies.othersPaddle, { x: data.x, y: data.y });
                });
            else
                this.socket.on("left", (data) => {
                    this.modules.Body.setPosition(this.bodies.othersPaddle, { x: data.x, y: data.y });
                });

        }
    }



}