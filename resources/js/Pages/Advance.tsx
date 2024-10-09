import React from "react";
import trainingfoto from "../../assets/advance.png";
import abs from "../../assets/abs.jpeg";
import chest from "../../assets/chest.jpeg";
import arms from "../../assets/arms.jpeg";
import legs from "../../assets/legs.jpeg";
import LogoHG from "!assets/logo-harusgerak.png";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useAos } from "@/lib/hooks/useAos";
import { Head } from "@inertiajs/react";

const Advance = () => {
    useAos();

    // Contoh data card dengan URL sesuai halaman tujuan
    const cardData = [
        {
            title: "Abs training",
            desc: "Core exercises",
            url: "/advance/abs-training",
            foto: abs,
        },
        {
            title: "Chest training",
            desc: "Chest exercises",
            url: "/advance/chest-training",
            foto: chest,
        },
        {
            title: "Arms training",
            desc: "Arm exercises",
            url: "/advance/arms-training",
            foto: arms,
        },
        {
            title: "Legs training",
            desc: "Leg exercises",
            url: "/advance/legs-training",
            foto: legs,
        },
    ];

    return (
        <AuthenticatedLayout user={undefined}>
            <Head title="HarusGerak" />
            <div
                className="w-full min-h-screen py-12 text-white px-72"
                data-aos="fade-right"
                data-aos-duration="1000"
            >
                {/* Header Section */}
                <div className="flex flex-col items-start">
                    <h1 className="mb-2 text-[32px] font-bold text-left">
                        Ready to push the boundaries? Our Advanced course is for
                        those who dare to be different.
                    </h1>
                    <p className="max-w-2xl text-justify text-[20px] text-gray-400 font-light">
                        Tantang dirimu dengan program Advanced. Latihan-latihan
                        intensif dan bervariasi akan mendorongmu untuk mencapai
                        batas kemampuan fisikmu. Dirancang untuk mereka yang
                        ingin mencapai performa fisik optimal.
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
                            alt="Advance Program"
                            className="object-cover w-full rounded-lg h-72"
                        />
                        <span className="py-2 font-extrabold text-[#896CFE] bg-white/30 rounded-b-xl px-10 text-[24px] font-poppins">
                            Advance
                        </span>
                        <p className="mt-4 italic text-center text-gray-400">
                            "Get Your Body Moving, Let Your Soul Dance"
                        </p>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="flex flex-col items-center justify-center mt-2">
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

export default Advance;
