import React from "react";
import harusgerak from "!assets/bg-opening-screen.png";

export default function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <img
                src={harusgerak}
                className="absolute object-cover w-full h-full"
                alt="Background"
            />
            <button className="relative z-10 px-12 py-2 text-[26px] text-white rounded-full mt-72 hover:text-black hover:bg-white bg-white/45">
                Start
            </button>
        </div>
    );
}
