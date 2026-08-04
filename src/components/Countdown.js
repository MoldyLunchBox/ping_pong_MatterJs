export const Countdown = ({ value }) => (
    <span className="countdown absolute top-0 text-white font-mono text-6xl">
        <span style={{ "--value": value }}></span>
    </span>
);
