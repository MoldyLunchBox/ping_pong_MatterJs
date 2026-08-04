export const StartOverlay = ({ onStart }) => (
    <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-slate-950/50 px-4 backdrop-blur-sm">
        <div className="flex max-w-[22rem] flex-col items-center gap-4 rounded-xl bg-white/10 px-6 py-5 text-center shadow-xl ring-1 ring-white/20 sm:px-8 sm:py-6">
            <div>
                <div className="text-sm font-extrabold uppercase tracking-widest text-white sm:text-lg">
                    Start the game
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    Move your mouse to slide the green paddle. Get the ball fast
                    enough and the computer paddle freezes &mdash; that is your
                    chance to score.
                </p>
            </div>
            <button
                onClick={onStart}
                className="rounded-md bg-[#60a5fa] px-6 py-2 text-sm font-semibold text-slate-900 shadow transition hover:bg-[#93c5fd] active:scale-95"
            >
                Start
            </button>
        </div>
    </div>
);
