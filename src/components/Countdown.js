// sits over the board between a goal and the next serve, but must not swallow
// the mouse or the player cannot line their paddle up in time
export const Countdown = ({ value }) => (
    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-xl bg-slate-950/30">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-300 sm:text-xs">
            Next serve
        </span>
        <span className="font-mono text-5xl font-bold tabular-nums text-white drop-shadow-lg sm:text-7xl">
            {value}
        </span>
    </div>
);
