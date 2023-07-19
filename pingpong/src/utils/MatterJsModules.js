import Matter, { Events, Engine, World, Bodies } from "matter-js";
 
export class MatterJsModules {

    objects = { engine: null, render: null, runner: null, mouse: null, mouseConstraint: null };

    paddleSide = ""
    matterContainer = document.querySelector("#matter-Container") 
 
    constructor() {
        this.oldDim = { w: this.matterContainer.clientWidth, h: this.matterContainer.clientHeight }
   
        this.obj = this.saveMeasurements({ width: this.matterContainer.clientWidth, height: this.matterContainer.clientHeight })
    
        this.colors = {
            leftP: "#6DA9E4",
            rightP: "#F6BA6F",
            wall: "#FFEBEB",
            ball: "red",
            background: "#ADE4DB",
        }
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
            ball: this.modules.Bodies.circle(this.obj.divWidth / 2, this.obj.divHeight / 2, this.getBallRadius(), { isStatic: true, label: "ball" }),
            circleA: this.modules.Bodies.circle(this.obj.divWidth / 2, this.obj.divHeight / 2, 80, { isStatic: true, collisionFilter: { group: -1, }, render: { fillStyle: this.colors.wall }, label: "circleA" }),
            circleB: this.modules.Bodies.circle(this.obj.divWidth / 2, this.obj.divHeight / 2, 70, { isStatic: true, collisionFilter: { group: -1, }, render: { fillStyle: this.colors.background }, label: "circleB" }),
            circleC: this.modules.Bodies.circle(this.obj.divWidth / 2, this.obj.divHeight / 2, 10, { isStatic: true, collisionFilter: { group: -1, }, render: { fillStyle: this.colors.wall }, label: "circleC" }),
            centerLine: this.modules.Bodies.rectangle(this.obj.divWidth / 2, this.obj.divHeight / 2, this.obj.divWidth, 10, { isStatic: true, collisionFilter: { group: -1, }, render: { fillStyle: this.colors.wall }, label: "centerLine" }),

            leftPaddle: this.modules.Bodies.rectangle(this.obj.leftPaddle.x, this.obj.leftPaddle.y, this.getPaddleDim().width, this.getPaddleDim().height, {
                label: "lPadel",
                isStatic: true, render: {
                    fillStyle: this.colors.leftP
                }
            }),
            rightPaddle: this.modules.Bodies.rectangle(this.obj.rightPaddle.x, this.obj.rightPaddle.y, this.getPaddleDim().width, this.getPaddleDim().height, {
                label: "rPadel",
                isStatic: true, render: {
                    fillStyle: this.colors.rightP
                }
            }),
            myPaddle: this.modules.Bodies.rectangle(0, 0, 0, 0, { isStatic: true }),
            othersPaddle: this.modules.Bodies.rectangle(0, 0, 0, 0, { isStatic: true }),
            roof: this.modules.Bodies.rectangle(this.obj.wallTop.x, this.obj.wallTop.y, this.obj.wallTop.width, this.obj.wallTop.height, {
                label: "roof",
                isStatic: true,
                render: {
                    fillStyle: 'blue'
                }
            }),
            ground: this.modules.Bodies.rectangle(this.obj.wallBottom.x, this.obj.wallBottom.y, this.obj.wallBottom.width, this.obj.wallBottom.height, {
                label: "ground",
                isStatic: true,
                render: {
                    fillStyle: 'red'
                }
            }),
            wall: this.modules.Bodies.rectangle(this.obj.wallRight.x, this.obj.wallRight.y, this.obj.wallRight.width, this.obj.wallRight.height, {
                label: "wallRight",
                isStatic: true,
                render: {
                    fillStyle: this.colors.wall
                }
            }),
            wallLeft: this.modules.Bodies.rectangle(this.obj.wallLeft.x, this.obj.wallLeft.y, this.obj.wallLeft.width, this.obj.wallLeft.height, {
                label: "wallLeft",
                isStatic: true,
                render: {
                    fillStyle: this.colors.wall
                }
            }),

        }



    }
    getBallRadius() {

        const widthRatio = this.matterContainer.clientWidth / 375;
        const heightRatio = this.matterContainer.clientHeight / 375 * (16 / 9)
        return 20 * widthRatio
    }

    getPaddleDim() {
        const widthRatio = this.matterContainer.clientWidth / 375;
        const heightRatio = this.matterContainer.clientHeight / 375 * (16 / 9)
        return { width: 100 * widthRatio, height: 20 * widthRatio }
    }

    saveMeasurements(div) {

        const obj = {
            divWidth: div.width,
            divHeight: div.height,
            ball: { x: div.height / 2, y: div.width / 2, radius: 20 },
            wallBottom: { x: div.width / 2, y: div.height, width: div.width, height: 20 },
            wallTop: { x: div.width / 2, y: 0, width: div.width, height: 20 },
            wallLeft: { x: 0, y: div.height / 2, width: 20, height: div.height },
            wallRight: { x: div.width, y: div.height / 2, width: 20, height: div.height },
            leftPaddle: { x: div.width / 2, y: 50, width: 100, height: 20 },
            rightPaddle: { x: div.width / 2, y: div.height - 50, width: 100, height: 20 },
        }
        return obj
    }
    createModules() {
        if (this.matterContainer) {

            this.objects.engine = this.modules.Engine.create();
            this.objects.render = this.modules.Render.create({
                element: this.matterContainer,
                engine: this.objects.engine,
                options: {
                    background: "transparent",
                    wireframes: false,
                    showAngleIndicator: false,
                    width: this.matterContainer.clientWidth,
                    height: this.matterContainer.clientHeight,
                }
            })
                this.objects.runner = this.modules.Runner.create()
                this.objects.mouse = this.modules.Mouse.create(this.objects.render.canvas)
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
    }


    createBodies() {

        this.modules.Composite.add(this.objects.engine.world, [this.bodies.circleA, this.bodies.circleB, this.bodies.circleC, this.bodies.centerLine, this.bodies.ball, this.bodies.leftPaddle, this.bodies.wall, this.bodies.wallLeft, this.bodies.rightPaddle]);
    }
    events() {

        Events.on(this.objects.mouseConstraint, "mousemove", (e) => {
            this.modules.Body.setPosition(this.bodies.myPaddle, { x: e.mouse.position.x, y: this.bodies.myPaddle.position.y });
            const oldWidth = this.matterContainer.clientWidth;
            const oldHeight = this.matterContainer.clientHeight;
            const newWidth = 375
            const newHeight = 375 * (16 / 9)
            const { widthRatio, heightRatio } = this.getResizeRatio(oldWidth, oldHeight, newWidth, newHeight)
            this.socket?.emit(this.paddleSide, { x: e.mouse.position.x * widthRatio, y: this.bodies.myPaddle.position.y * heightRatio })

        })


    }

    run() {
        this.modules.Composite.add(this.objects.engine.world, [this.objects.mouseConstraint]);

        this.modules.Render.run(this.objects.render);
        this.modules.Runner.run(this.objects.runner, this.objects.engine);
    }

    windowSizeEvent(height) {


        this.onWindowSizeChange()


    }
    onWindowSizeChange() {
        function calculateRectangleVertices(dimensions) {
            const halfWidth = dimensions.width / 2;
            const halfHeight = dimensions.height / 2;

            const vertices = [
                { x: dimensions.x - halfWidth, y: dimensions.y - halfHeight },   // Top-left vertex
                { x: dimensions.x + halfWidth, y: dimensions.y - halfHeight },   // Top-right vertex
                { x: dimensions.x + halfWidth, y: dimensions.y + halfHeight },   // Bottom-right vertex
                { x: dimensions.x - halfWidth, y: dimensions.y + halfHeight }    // Bottom-left vertex
            ];

            return vertices;
        }

        const aspectRatio = 16 / 9; // Replace with your desired aspect ratio
        const newWidth = this.matterContainer.clientWidth; // Replace with your desired width
        const newHeight = this.matterContainer.clientHeight; // Replace with your desired height
        const oldWidth = this.oldDim.w
        const oldHeight = this.oldDim.h
        const widthRatio = newWidth / oldWidth;
        const heightRatio = newHeight / oldHeight;
        // this.modules.Body.set(ground, 'width', window.innerWidth);
        const modules = this.modules
        const dimenssions = this.obj
        const bodies = this.bodies
        this.modules.Composite.allBodies(this.objects.engine.world).forEach(function (body) {

            if (body.label !== "ball")
                Matter.Body.scale(body, widthRatio, heightRatio);
            else
                Matter.Body.scale(body, widthRatio, widthRatio);

            var newPosition = {
                x: body.position.x * widthRatio,
                y: body.position.y * heightRatio
            };
            Matter.Body.setPosition(body, newPosition);
            // var  scaleX = newScreen.w / oldScreen.w
            // var  scaleY = newScreen.h / oldScreen.h;
            // if (body.label !== "ball")
            // Matter.Body.scale(body, scaleX, scaleY);
            // // Update dimensions
            // var  scaleX = newWidth / oldWidth
            // var  scaleY = newHeight / oldHeight
            // // Update position
            // var newPosition = {
            //   x: body.position.x * scaleX,
            //   y: body.position.y * scaleY
            // };
            // Matter.Body.setPosition(body, newPosition);
        });
        this.modules.Engine.update(this.objects.engine)
        this.oldDim = { w: newWidth, h: newHeight }
        this.objects.render.canvas.width = newWidth
        this.objects.render.canvas.height = newHeight
    }

    socketStuff() {
        const newWidth = this.matterContainer.clientWidth; // Replace with your desired width
        const newHeight = this.matterContainer.clientHeight; // Replace with your desired height
        const oldWidth = 375
        const oldHeight = 375 * (16 / 9)
        const widthRatio = newWidth / oldWidth;
        const heightRatio = newHeight / oldHeight;
        this.socket?.on('ballPosition', (data) => {
            const oldWidth = 375
            const oldHeight = 375 * (16 / 9)
            const newWidth = this.matterContainer.clientWidth;
            const newHeight = this.matterContainer.clientHeight;
            const { widthRatio, heightRatio } = this.getResizeRatio(oldWidth, oldHeight, newWidth, newHeight)
            // Update the ball's position
            this.bodies.ball.position.x = data.x * widthRatio
            this.bodies.ball.position.y = data.y * heightRatio
            // Matter.Body.scale(this.bodies.ball, widthRatio, widthRatio);

        });


    }

    getResizeRatio(oldWidth, oldHeight, newWidth, newHeight) {
        const widthRatio = newWidth / oldWidth;
        const heightRatio = newHeight / oldHeight;
        return { widthRatio, heightRatio }
    }





}