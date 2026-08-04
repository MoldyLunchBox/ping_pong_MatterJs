import { Game } from "./components/Game";

const App = () => (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-b from-black to-[#1e293b] pb-12">
        <h1 className="my-8 flex flex-wrap items-center justify-center gap-3 px-4 text-center text-2xl font-extrabold text-white sm:text-4xl lg:my-12 lg:text-5xl">
            Ping Pong
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 sm:text-sm lg:text-base">
                But you can win
            </span>
        </h1>
        <Game />
    </div>
);

export default App;
