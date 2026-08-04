import {
    Bodies,
    Body,
    Composite,
    Engine,
    Events,
    Mouse,
    MouseConstraint,
    Render,
    Runner,
} from "matter-js";

const COLORS = {
    playerPaddle: "#86efac",
    opponentPaddle: "#a78bfa",
    wall: "#FFEBEB",
    ball: "#ede9fe",
};

// the board was laid out against a 375px wide reference, so every size below is
// multiplied by the ratio between the live board and that reference width
const REFERENCE_WIDTH = 375;

const BALL_RADIUS = 10;
const WALL_THICKNESS = 20;
const PADDLE_LENGTH = 50;
const PADDLE_THICKNESS = 10;
const SERVE_VELOCITY = { x: 5, y: 6 };

// above this speed the opponent stops following the ball, which is what makes
// the game winnable
const OPPONENT_TRACKING_SPEED = 20;

const speedOf = (body) =>
    Math.sqrt(body.velocity.x ** 2 + body.velocity.y ** 2);

export class PongEngine {
    /**
     * @param {HTMLElement} container element the canvas is mounted into
     * @param {{ maxSpeed: number, onSpeed: Function, onScore: Function }} options
     */
    constructor(container, { maxSpeed, onSpeed, onScore }) {
        this.container = container;
        this.maxSpeed = maxSpeed;
        this.onSpeed = onSpeed;
        this.onScore = onScore;

        this.width = container.clientWidth;
        this.height = container.clientHeight;
        this.scale = this.width / REFERENCE_WIDTH;

        this.engine = Engine.create();
        this.engine.gravity = { x: 0, y: 0, scale: 0 };

        this.render = Render.create({
            element: container,
            engine: this.engine,
            options: {
                background: "transparent",
                wireframes: false,
                showAngleIndicator: false,
                width: this.width,
                height: this.height,
            },
        });
        this.runner = Runner.create();

        this.buildBodies();
        this.bindEvents();
    }

    buildBodies() {
        const { width, height, scale } = this;
        const centerX = width / 2;
        const centerY = height / 2;
        const thickness = PADDLE_THICKNESS * scale;
        const length = PADDLE_LENGTH * scale;

        // the ball is created first so it always owns the lowest body id
        this.ball = Bodies.circle(centerX, centerY, BALL_RADIUS * scale, {
            label: "ball",
            mass: 1,
            density: 10,
            restitution: 1.15,
            friction: 0,
            frictionAir: 0,
            collisionFilter: { group: -1 },
            render: { fillStyle: COLORS.ball },
        });

        // center mark: an outer ring, a dot and the halfway line
        const decoration = [
            Bodies.circle(centerX, centerY, 40 * scale, {
                isStatic: true,
                collisionFilter: { group: -1 },
                render: { fillStyle: COLORS.wall },
            }),
            Bodies.circle(centerX, centerY, 35 * scale, {
                isStatic: true,
                collisionFilter: { group: -1 },
            }),
            Bodies.circle(centerX, centerY, 5 * scale, {
                isStatic: true,
                collisionFilter: { group: -1 },
                render: { fillStyle: COLORS.wall },
            }),
            Bodies.rectangle(centerX, centerY, 5 * scale, width, {
                isStatic: true,
                collisionFilter: { group: -1 },
                render: { fillStyle: COLORS.wall },
            }),
        ];

        this.playerPaddle = Bodies.rectangle(
            thickness,
            centerY,
            thickness,
            length,
            { isStatic: true, render: { fillStyle: COLORS.playerPaddle } }
        );
        this.opponentPaddle = Bodies.rectangle(
            width - thickness,
            height - length,
            thickness,
            length,
            { isStatic: true, render: { fillStyle: COLORS.opponentPaddle } }
        );

        // only the top and bottom are solid, the sides are where goals happen
        this.horizontalWalls = [
            Bodies.rectangle(centerX, 0, width, WALL_THICKNESS, {
                isStatic: true,
                render: { fillStyle: COLORS.wall },
            }),
            Bodies.rectangle(centerX, height, width, WALL_THICKNESS, {
                isStatic: true,
                render: { fillStyle: COLORS.wall },
            }),
        ];

        this.mouse = Mouse.create(this.render.canvas);
        this.mouseConstraint = MouseConstraint.create(this.engine, {
            mouse: this.mouse,
            constraint: { stiffness: 0.2, render: { visible: false } },
            // the mask and the group never overlap, so the mouse can drive the
            // paddle without ever grabbing hold of the ball
            collisionFilter: {
                mask: ~Body.nextGroup(true),
                group: Body.nextGroup(true),
            },
        });

        Composite.add(this.engine.world, [
            ...decoration,
            this.ball,
            this.playerPaddle,
            this.opponentPaddle,
            ...this.horizontalWalls,
            this.mouseConstraint,
        ]);
    }

    bindEvents() {
        Events.on(this.mouseConstraint, "mousemove", (event) => {
            Body.setPosition(this.playerPaddle, {
                x: this.playerPaddle.position.x,
                y: event.mouse.position.y,
            });
        });

        Events.on(this.engine, "collisionStart", ({ pairs }) => {
            const hitsWall = pairs.some(
                ({ bodyA, bodyB }) =>
                    (bodyA === this.ball && this.horizontalWalls.includes(bodyB)) ||
                    (bodyB === this.ball && this.horizontalWalls.includes(bodyA))
            );
            if (hitsWall) this.bounceOffWall();
        });
    }

    // leave the wall at a fixed 45 degrees, keeping the current speed
    bounceOffWall() {
        const component = Math.cos(Math.PI / 4) * speedOf(this.ball);
        const direction = this.ball.velocity.x < 0 ? -1 : 1;
        Body.setVelocity(this.ball, {
            x: component * direction,
            y: component * direction,
        });
    }

    run() {
        Render.run(this.render);
        Runner.run(this.runner, this.engine);
        this.tracker = setInterval(() => this.track());
    }

    track() {
        const speed = speedOf(this.ball);
        this.onSpeed(speed);

        if (speed > this.maxSpeed) {
            // squared on purpose: it drops the ball back under the cap instead
            // of leaving it hugging the limit
            const factor = (this.maxSpeed / speed) ** 2;
            Body.setVelocity(this.ball, {
                x: this.ball.velocity.x * factor,
                y: this.ball.velocity.y * factor,
            });
        } else if (speed < OPPONENT_TRACKING_SPEED) {
            Body.setPosition(this.opponentPaddle, {
                x: this.opponentPaddle.position.x,
                y: this.ball.position.y,
            });
        }

        if (this.ball.position.x < 0) this.onScore("opponent");
        else if (this.ball.position.x > this.container.clientWidth)
            this.onScore("player");
    }

    resetBall() {
        Body.setVelocity(this.ball, { x: 0, y: 0 });
        Body.setPosition(this.ball, { x: this.width / 2, y: this.height / 2 });
    }

    serve() {
        Body.setVelocity(this.ball, SERVE_VELOCITY);
    }

    // rescale every body and the canvas to the board's new size
    resize() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        const widthRatio = width / this.width;
        const heightRatio = height / this.height;

        Composite.allBodies(this.engine.world).forEach((body) => {
            if (body === this.ball) Body.scale(body, widthRatio, widthRatio);
            else Body.scale(body, widthRatio, heightRatio);

            Body.setPosition(body, {
                x: body.position.x * widthRatio,
                y: body.position.y * heightRatio,
            });
        });

        Engine.update(this.engine);
        this.width = width;
        this.height = height;
        this.render.canvas.width = width;
        this.render.canvas.height = height;
    }

    destroy() {
        clearInterval(this.tracker);
        Runner.stop(this.runner);
        Render.stop(this.render);
        Composite.clear(this.engine.world, false);
        Engine.clear(this.engine);
        this.render.canvas.remove();
    }
}
