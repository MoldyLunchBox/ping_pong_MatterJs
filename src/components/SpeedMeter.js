export const SpeedMeter = ({ speed, maxSpeed }) => {
    const fill = { width: `${(speed * 100) / maxSpeed}%` };

    return (
        <div className="relative w-full">
            <div className="rounded border border-red-500 p-1">
                <div
                    className="flex h-6 p-2 items-center justify-center rounded bg-red-300 text-xs leading-none"
                    style={fill}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="p-1 text-sm text-white">Ball speed</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
