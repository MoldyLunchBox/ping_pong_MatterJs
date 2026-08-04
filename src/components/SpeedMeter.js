export const SpeedMeter = ({ speed, maxSpeed, freezeAt }) => {
    const filled = Math.min((speed / maxSpeed) * 100, 100);
    const threshold = (freezeAt / maxSpeed) * 100;
    const frozen = speed >= freezeAt;

    return (
        <div className="w-full py-3">
            <div className="mb-1.5 flex items-baseline justify-between text-[10px] font-semibold uppercase tracking-widest text-slate-400 sm:text-xs">
                <span>Ball speed</span>
                <span className="font-mono tabular-nums text-slate-200">
                    {speed.toFixed(1)}
                </span>
            </div>

            <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10">
                <div
                    className={`h-full rounded-full transition-all duration-150 ${
                        frozen
                            ? "bg-gradient-to-r from-sky-400 to-cyan-200"
                            : "bg-gradient-to-r from-emerald-500 to-emerald-300"
                    }`}
                    style={{ width: `${filled}%` }}
                />
                {/* the point where the opponent gives up */}
                <div
                    className="absolute inset-y-0 w-0.5 bg-white/70"
                    style={{ left: `${threshold}%` }}
                />
            </div>

            <div className="relative h-4 text-[9px] font-semibold uppercase tracking-widest text-slate-500 sm:text-[10px]">
                <span
                    className="absolute -translate-x-1/2 whitespace-nowrap pt-1"
                    style={{ left: `${threshold}%` }}
                >
                    freeze
                </span>
            </div>
        </div>
    );
};
