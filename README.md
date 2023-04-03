this is a ping pong game, developed using nestjs on the back-end side, and nextjs on the front-end.

the game takes advantage of the physics library Matterjs.

## Technical details
    the same world specs are initialized on both the back and the front end, except that in the backend the ball has additional parameters like friction, initial velocity etc, and the position of the ball is then transmited to both players from the backend, 
    the padles on the sides, their positions change in the frontend when the user moves them, and their positions are emited to the socket gateway which transmits it forward to the other player

## encountered issues
   i coded this app with the logic that one game instance is running in the backend (nestjs), and another instance of the game runs in the front, and these two share the same initial window size, meaning that the measurements are always the same in both instances, overlooking the fact that the second player could be playing on a different window size, now ill have to change the logic so that the backend measurement will be fixed, and the front end will need to translate the measurements to fit in its window size, ```
```
example:
backend game window is set to 1000/600, ball is at x:500, y: 300
frontend game window is set to 500/300, ball position will have to be translated  from window 1000/500 to 500/300, which would be x:250, y: 150
```