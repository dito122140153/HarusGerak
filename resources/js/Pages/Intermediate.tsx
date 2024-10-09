import React from "react";
import trainingfoto from "../../assets/intermediate.png";
import abs from "../../assets/abs.jpeg";
import chest from "../../assets/chest.jpeg";
import arms from "../../assets/arms.jpeg";
import legs from "../../assets/legs.jpeg";
import LogoHG from "!assets/logo-harusgerak.png";
import { useAos } from "@/lib/hooks/useAos";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Intermediate = () => {
    useAos();

    // Contoh data card dengan URL sesuai halaman tujuan
    const cardData = [
        {
            title: "Abs training",
            desc: "Core exercises",
            url: "/intermediate/abs-training",
            foto: abs,
        },
        {
            title: "Chest training",
            desc: "Chest exercises",
            url: "/intermediate/chest-training",
            foto: chest,
        },
        {
            title: "Arms training",
            desc: "Arm exercises",
            url: "/intermediate/arms-training",
            foto: arms,
        },
        {
            title: "Legs training",
            desc: "Leg exercises",
            url: "/intermediate/legs-training",
            foto: legs,
        },
    ];

    return (
        <AuthenticatedLayout user={undefined}>
            <Head title="HarusGerak" />
            <div
                className="w-full min-h-screen py-12 text-white px-72 "
                data-aos="fade-right"
                data-aos-duration="1000"
            >
                {/* Header Section */}
                <div className="flex flex-col items-start">
                    <h1 className="mb-2 text-[32px] font-bold text-left">
                        Are you up for the challenge? Our Intermediate course is
                        designed to push your limits.
                    </h1>
                    <p className="max-w-2xl text-justify text-[20px] text-gray-400 font-light">
                        Tingkatkan intensitas latihanmu dengan program
                        Intermediate. Kombinasi gerakan yang lebih kompleks dan
                        durasi yang lebih panjang akan membantumu mencapai
                        tujuan kebugaranmu lebih cepat. Cocok untuk mereka yang
                        ingin membentuk otot dan meningkatkan stamina.
                    </p>
                </div>

                {/* Card Section */}
                <div className="flex justify-between gap-8 mt-10">
                    {/* Left Cards */}
                    <div
                        className="grid grid-cols-2 gap-12"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        {cardData.map((card, index) => (
                            <a
                                href={card.url} // Menggunakan href untuk navigasi
                                key={index}
                                className="block p-4 transition duration-300 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl"
                            >
                                <img
                                    src={card.foto}
                                    alt={card.title}
                                    className="w-[130px] h-[100px] rounded-lg object-cover mx-auto"
                                />
                                <h2 className="mt-2 text-lg font-semibold text-center">
                                    {card.title}
                                </h2>
                                <p className="text-center text-gray-400">
                                    {card.desc}
                                </p>
                            </a>
                        ))}
                    </div>

                    {/* Right Section with Image */}
                    <div
                        className="flex flex-col items-center mt-2"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
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
                            data-aos-duration="1000"
                        />
                    </div>
                    <p
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className="mt-4 text-2xl text-[#E2F163] text-[40px] font-extrabold italic"
                    >
                        HARUS<span className="font-normal">GERAK</span>
                    </p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Intermediate;
