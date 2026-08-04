// shown over the board while the ball is too fast for the opponent to follow
export const FreezeNotice = () => (
    <div className="pointer-events-none absolute inset-x-0 top-4 flex justify-center px-3">
        <span className="flex items-center gap-2 rounded-full bg-slate-950/85 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-200 shadow-lg ring-1 ring-sky-300/60 sm:text-xs">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-300" />
            Computer paddle frozen
        </span>
    </div>
);
