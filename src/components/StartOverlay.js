export const StartOverlay = ({ onStart }) => (
    <div className="absolute inset-0 top-10 flex items-center justify-center">
        <div className="w-1/3 h-1/3 max-w-[300px] backdrop-blur-sm flex items-center gap-2 flex-col justify-center bg-white/30 sm:gap-11 rounded-lg bg-white">
            <div className="text-center bg-white bg-opacity-25 rounded-sm w-full font-extrabold text-xs text-[#1e1b4b] sm:text-lg">
                START THE GAME
            </div>
            <button
                onClick={onStart}
                className="bg-[#60a5fa] bg-opacity-90 rounded-sm p-1 shadow sm:px-4 sm:p-2 hover:bg-[#93c5fd]"
            >
                Start
            </button>
        </div>
    </div>
);
