this is a ping pong game, developed using nestjs on the back-end side, and nextjs on the front-end.

the game takes advantage of the physics library Matterjs.

## Technical details
the same world specs are initialized on both the back and the front end, except that in the backend the ball has additional parameters like friction, initial velocity etc, and the position of the ball is then transmited to both players from the backend, 
the padles on the sides, their positions change in the frontend when the user moves them, and their positions are emited to the socket gateway which transmits it forward to the other player
