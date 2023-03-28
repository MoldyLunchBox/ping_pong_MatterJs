import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import  {Body, Engine, World, Bodies } from 'matter-js';

@WebSocketGateway(3008, { cors: "*" })
export class GameGateway {
    @WebSocketServer() server;

    private engine: Engine;
    private world: World;
    private ball: any;
    constructor() {
        this.engine = Engine.create();
        this.world = this.engine.world;
        this.engine.gravity = {
            x: 0,
            y: 0,
            scale: 0
        };
        this.ball = Bodies.circle(100, 100, 20, { restitution: 1.01, friction: 0, frictionAir: 0 });
        var ground = Bodies.rectangle(500, 0, 1000, 20, {
            isStatic: true,
            render: {
                fillStyle: 'blue'
            }
        });
        var wallLeft = Bodies.rectangle(0, 300, 20, 1000, {  isStatic: true,
            render: {
              fillStyle: 'green'
            }});
       Body.setVelocity(this.ball, { x: 5, y: 5 });

        var roof = Bodies.rectangle(500, 600, 1000, 20, {
            isStatic: true,
            render: {
                fillStyle: 'red'
            }
        });
        var wall = Bodies.rectangle(900, 300, 20, 1000, {
            isStatic: true,
            render: {
                fillStyle: 'green'
            }
        });

        World.add(this.world, [this.ball, ground, wall, roof, wallLeft]);

        // Start the engine and update the ball's position
        Engine.run(this.engine);
        setInterval(() => {
            this.server.emit('ballPosition', { x: this.ball.position.x, y: this.ball.position.y });
        }, 1000 / 60);
    }
}