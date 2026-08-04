import { COLORS } from "../game/PongEngine";

const Score = ({ label, value, color }) => (
    <div className="flex flex-1 flex-col items-center gap-1">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400 sm:text-xs">
            <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: color }}
            />
            {label}
        </div>
        <div className="font-mono text-3xl font-bold tabular-nums text-white sm:text-4xl">
            {value}
        </div>
    </div>
);

export const Scoreboard = ({ score, opponentFrozen }) => (
    <div className="flex w-full max-w-[420px] items-center justify-center py-2">
        <Score label="You" value={score.player} color={COLORS.playerPaddle} />
        <div className="h-10 w-px bg-white/20" />
        <Score
            label="Comp"
            value={score.opponent}
            color={
                opponentFrozen
                    ? COLORS.opponentPaddleFrozen
                    : COLORS.opponentPaddle
            }
        />
    </div>
);
