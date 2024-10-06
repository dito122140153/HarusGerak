import React from "react";
import trainingfoto from "../../assets/training-photo.png";
import LogoHG from "!assets/logo-harusgerak.png";
import { useAos } from "@/lib/hooks/useAos";

const Intermediate = () => {
    useAos();

    // Contoh data card dengan URL sesuai halaman tujuan
    const cardData = [
        { title: "Abs training", url: "/abs-training" },
        { title: "Chest training", url: "/chest-training" },
        { title: "Arms training", url: "/arms-training" },
        { title: "Legs training", url: "/legs-training" },
    ];

    return (
        <div className="w-full min-h-screen py-12 text-white px-72 bg-black/90">
            {/* Header Section */}
            <div className="flex flex-col items-start">
                <h1 className="mb-2 text-[32px] font-bold text-left">
                    Start Here: Our Intermediate's Fitness Program Is Perfect
                    For Those New To Exercise.
                </h1>
                <p className="max-w-md text-left text-[20px] text-gray-400 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>

            {/* Card Section */}
            <div className="flex justify-between gap-8 mt-10">
                {/* Left Cards */}
                <div className="grid grid-cols-3 gap-12">
                    {cardData.map((card, index) => (
                        <a
                            href={card.url} // Menggunakan href untuk navigasi
                            key={index}
                            className="block p-4 transition duration-300 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl"
                        >
                            <img
                                src={trainingfoto}
                                alt={card.title}
                                className="w-[130px] h-[100px] rounded-lg object-cover mx-auto"
                            />
                            <h2 className="mt-2 text-lg font-semibold text-center">
                                {card.title}
                            </h2>
                            <p className="text-center text-gray-400">
                                Lorem ipsum
                            </p>
                        </a>
                    ))}
                </div>

                {/* Right Section with Image */}
                <div className="flex flex-col items-center">
                    <img
                        src={trainingfoto}
                        alt="Intermediate Program"
                        className="object-cover w-full rounded-lg h-72"
                    />
                    <span className="py-2 font-extrabold text-[#896CFE] bg-white/30 rounded-b-xl px-10 text-[24px] font-poppins">
                        Intermediate
                    </span>
                    <p className="mt-4 italic text-center text-gray-400">
                        "Get Your Body Moving, Let Your Soul Dance"
                    </p>
                </div>
            </div>

            {/* Footer Section */}
            <div className="flex flex-col items-center justify-center mt-4">
                <div className="flex items-center">
                    {/* Logo */}
                    <img
                        src={LogoHG}
                        alt="Logo HarusGerak"
                        className="w-48 h-auto"
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                    />
                </div>
                <p
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="mt-4 text-2xl text-[#E2F163] text-[40px] font-extrabold italic"
                >
                    HARUS<span className="font-normal">GERAK</span>
                </p>
            </div>
        </div>
    );
};

export default Intermediate;
