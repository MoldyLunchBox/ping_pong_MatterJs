# Ping Pong

A ping pong game in the browser: you take the left paddle, the computer takes the
right one. Move the mouse up and down over the board to play. The computer stops
following the ball once it gets fast enough, so the game is actually winnable.

Built with React, [matter-js](https://brm.io/matter-js/) for the physics and
Tailwind for the styling.

## Running it

```bash
npm install
npm start
```

Then open http://localhost:3000. `npm run build` produces the production bundle
in `build/`.

## Layout

```
src/
├── App.js              page shell
├── index.js            entry point
├── components/
│   ├── Game.js         board sizing, score and serve timing
│   ├── Countdown.js    seconds until the next serve
│   ├── FreezeNotice.js badge shown while the computer paddle is frozen
│   ├── Scoreboard.js   both scores
│   ├── SpeedMeter.js   ball speed, marked with the freeze threshold
│   └── StartOverlay.js start button
└── game/
    └── PongEngine.js   matter-js world: bodies, collisions, opponent, resizing
```

The freeze is the game's one mechanic, so it is signalled three ways: the
opponent paddle turns icy blue, a badge appears over the board, and the speed
meter shows where the threshold sits before you get there.

The board is a 16/9 box that follows the width it is given, and `PongEngine`
rescales every body when that size changes. All sizes inside the engine are
written against a 375px wide reference board and scaled from there.
