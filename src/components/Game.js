import { useEffect, useRef, useState } from "react";
import { OPPONENT_FREEZE_SPEED, PongEngine } from "../game/PongEngine";
import { Countdown } from "./Countdown";
import { FreezeNotice } from "./FreezeNotice";
import { Scoreboard } from "./Scoreboard";
import { SpeedMeter } from "./SpeedMeter";
import { StartOverlay } from "./StartOverlay";

const ASPECT = 16 / 9;
const MAX_SPEED = 25;
const SERVE_DELAY = 5000;
const RECENTER_DELAY = 500;
// counting down from the serve delay keeps the number from sitting on 0
const COUNTDOWN_FROM = SERVE_DELAY / 1000;

export const Game = () => {
    const boardRef = useRef(null);
    const engineRef = useRef(null);
    const [height, setHeight] = useState(0);
    const [started, setStarted] = useState(false);
    const [score, setScore] = useState({ player: 0, opponent: 0 });
    const [ballSpeed, setBallSpeed] = useState(0);
    const [countdown, setCountdown] = useState(COUNTDOWN_FROM);
    const [goal, setGoal] = useState(false);

    const opponentFrozen = ballSpeed >= OPPONENT_FREEZE_SPEED;

    // the board keeps a 16/9 box, so its height follows the width it is given
    useEffect(() => {
        const fitToWidth = () => setHeight(boardRef.current.clientWidth / ASPECT);
        fitToWidth();

        window.addEventListener("resize", fitToWidth);
        return () => window.removeEventListener("resize", fitToWidth);
    }, []);

    useEffect(() => {
        if (!height) return;
        if (engineRef.current) {
            engineRef.current.resize();
            return;
        }

        engineRef.current = new PongEngine(boardRef.current, {
            maxSpeed: MAX_SPEED,
            onSpeed: setBallSpeed,
            onScore: (scorer) => {
                setScore((prev) => ({ ...prev, [scorer]: prev[scorer] + 1 }));
                setGoal(true);
            },
        });
        engineRef.current.run();
    }, [height]);

    useEffect(() => () => engineRef.current?.destroy(), []);

    useEffect(() => {
        if (started) engineRef.current?.serve();
    }, [started]);

    // after a goal, park the ball in the middle and count down to the next serve
    useEffect(() => {
        const engine = engineRef.current;
        if (!engine) return;

        setCountdown(COUNTDOWN_FROM);
        engine.resetBall();
        // the engine can nudge the ball once more before it settles
        const recenter = setTimeout(() => engine.resetBall(), RECENTER_DELAY);
        const serve = setTimeout(() => {
            setGoal(false);
            engine.serve();
        }, SERVE_DELAY);
        const ticker = setInterval(
            () => setCountdown((prev) => Math.max(prev - 1, 0)),
            1000
        );

        return () => {
            clearTimeout(recenter);
            clearTimeout(serve);
            clearInterval(ticker);
        };
    }, [score]);

    return (
        <div className="flex w-full justify-center px-4 sm:px-10">
            <div className="flex w-full max-w-[900px] flex-col items-center">
                <Scoreboard score={score} opponentFrozen={opponentFrozen} />
                <SpeedMeter
                    speed={ballSpeed}
                    maxSpeed={MAX_SPEED}
                    freezeAt={OPPONENT_FREEZE_SPEED}
                />

                <div className="relative w-full">
                    <div
                        ref={boardRef}
                        style={{ height: `${height}px` }}
                        className="flex w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#064e3b] to-[#312e81] shadow-2xl ring-1 ring-white/25"
                    ></div>
                    {!started ? (
                        <StartOverlay onStart={() => setStarted(true)} />
                    ) : null}
                    {goal ? <Countdown value={countdown} /> : null}
                    {started && !goal && opponentFrozen ? <FreezeNotice /> : null}
                </div>
            </div>
        </div>
    );
};
