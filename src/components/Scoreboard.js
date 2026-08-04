const Score = ({ label, value }) => (
    <div className="flex w-full justify-center">
        <div className="flex-col text-center">
            <div>{label}</div>
            <div>{value}</div>
        </div>
    </div>
);

export const Scoreboard = ({ score }) => (
    <div className="h-10 flex text-sm flex-row my-5 text-white font-semibold items-center w-full sm:text-lg lg:text-2xl">
        <Score label="You" value={score.player} />
        <Score label="Comp" value={score.opponent} />
    </div>
);
