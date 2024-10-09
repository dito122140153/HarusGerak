import React, { useState } from "react";
import LogoHG from "!assets/logo-harusgerak.png";
import pushup from "!assets/pushup.gif";
import { useAos } from "@/lib/hooks/useAos";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { datatraining } from "@/lib/data/data";

const ArmsTraining = ({
    level = "intermediate",
    category = "arms-training",
}) => {
    const plans = datatraining[level][category]?.plans || [];
    useAos();
    // State untuk menyimpan status hari
    const [days, setDays] = useState([
        { day: "Mon", isCompleted: true },
        { day: "Tue", isCompleted: true },
        { day: "Wed", isCompleted: true },
        { day: "Thu", isCompleted: false },
        { day: "Fri", isCompleted: false },
        { day: "Sat", isCompleted: false },
        { day: "Sun", isCompleted: false },
    ]);

    // State untuk modal pengaturan
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function untuk toggle modal
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    // Function untuk toggle status hari (centang atau silang)
    const toggleDayStatus = (index) => {
        const updatedDays = days.map((day, i) =>
            i === index ? { ...day, isCompleted: !day.isCompleted } : day
        );
        setDays(updatedDays);
    };

    return (
        <AuthenticatedLayout user={undefined}>
            <div className="min-h-screen py-20 text-white px-72 ">
                {/* Heading */}
                <div
                    className="mb-8 font-poppins"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                >
                    <h1 className="text-4xl font-bold text-[#896CFE]">
                        {datatraining.intermediate["arms-training"].title}
                    </h1>
                    <p className="mt-2 text-xl font-bold">
                        Feel The Burn And Blast Away <br /> Those Calories!
                    </p>
                    <p className="max-w-4xl font-light text-white">
                        {datatraining.intermediate["arms-training"].desc}
                    </p>
                </div>

                {/* Exercise Plans */}
                <div className="flex">
                    <div className="w-2/3">
                        <h2
                            className="text-2xl font-bold text-[#E2F163]"
                            data-aos="fade-down"
                            data-aos-duration="1500"
                        >
                            Plan Overview
                        </h2>
                        <div className="max-w-4xl mt-4 mr-10 space-y-4">
                            {plans.length > 0 ? (
                                plans.map((plan, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center p-4 rounded-lg bg-white/20"
                                        data-aos="flip-down"
                                        data-aos-duration="1500"
                                    >
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-bold">
                                                {plan.title}
                                            </h3>
                                            <p className="text-gray-400">
                                                {plan.desc}
                                            </p>
                                            <p className="text-gray-400">
                                                {plan.repetisi}
                                            </p>
                                        </div>
                                        <img
                                            src={plan.image}
                                            alt={`${plan.title} exercise`}
                                            className="object-cover w-24 h-24 ml-4 rounded-lg"
                                        />
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-400">
                                    No plans available.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Right: Weekly Schedule and Metrics */}
                    <div
                        className="relative w-1/3 pl-8 mt-12"
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                    >
                        {/* Weekly Schedule */}
                        <div className="relative p-4 mb-8 rounded-lg bg-white/20">
                            <h2 className="text-2xl font-bold text-white">
                                Weekly Schedule
                            </h2>
                            <div className="grid grid-cols-7 gap-4 mt-4">
                                {days.map((day, idx) => (
                                    <div key={idx} className="text-center ">
                                        <span
                                            className={`block w-8 h-8 mx-auto rounded-full ${
                                                day.isCompleted
                                                    ? "text-[#E2F163]"
                                                    : "text-[#E2F163]"
                                            }`}
                                        >
                                            {day.isCompleted ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="30"
                                                    height="30"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="icon icon-tabler icons-tabler-filled icon-tabler-circle-check"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    />
                                                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                                                </svg>
                                            ) : (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="32"
                                                    height="32"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="icon icon-tabler icons-tabler-filled icon-tabler-xbox-x"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    />
                                                    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m3.6 5.2a1 1 0 0 0 -1.4 .2l-2.2 2.933l-2.2 -2.933a1 1 0 1 0 -1.6 1.2l2.55 3.4l-2.55 3.4a1 1 0 1 0 1.6 1.2l2.2 -2.933l2.2 2.933a1 1 0 0 0 1.6 -1.2l-2.55 -3.4l2.55 -3.4a1 1 0 0 0 -.2 -1.4" />
                                                </svg>
                                            )}
                                        </span>
                                        <span className="block mt-2 font-semibold text-md drop-shadow-lg">
                                            {day.day}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Icon Settings in Top Right */}
                            <div
                                className="absolute text-gray-400 cursor-pointer top-2 right-2 hover:text-[#E2F163]"
                                onClick={toggleModal}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="icon icon-tabler icons-tabler-filled icon-tabler-settings"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
                                </svg>
                            </div>

                            {/* Modal (Jika Dibuka) */}
                            {isModalOpen && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/20">
                                    <div className="w-1/3 p-8 text-center rounded-lg bg-black/80">
                                        <h3 className="mb-8 text-2xl font-bold text-white">
                                            Training Days
                                        </h3>
                                        <div className="grid grid-cols-7 gap-4 mb-8">
                                            {days.map((day, idx) => (
                                                <div
                                                    key={idx}
                                                    className="text-center"
                                                >
                                                    <button
                                                        onClick={() =>
                                                            toggleDayStatus(idx)
                                                        }
                                                    >
                                                        {day.isCompleted ? (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="30"
                                                                height="30"
                                                                viewBox="0 0 24 24"
                                                                fill="currentColor"
                                                                className="icon icon-tabler icons-tabler-filled icon-tabler-circle-check text-[#E2F163]"
                                                            >
                                                                <path
                                                                    stroke="none"
                                                                    d="M0 0h24v24H0z"
                                                                    fill="none"
                                                                />
                                                                <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                                                            </svg>
                                                        ) : (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="32"
                                                                height="32"
                                                                viewBox="0 0 24 24"
                                                                fill="currentColor"
                                                                className="icon icon-tabler icons-tabler-filled icon-tabler-xbox-x"
                                                            >
                                                                <path
                                                                    stroke="none"
                                                                    d="M0 0h24v24H0z"
                                                                    fill="none"
                                                                />
                                                                <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m3.6 5.2a1 1 0 0 0 -1.4 .2l-2.2 2.933l-2.2 -2.933a1 1 0 1 0 -1.6 1.2l2.55 3.4l-2.55 3.4a1 1 0 1 0 1.6 1.2l2.2 -2.933l2.2 2.933a1 1 0 0 0 1.6 -1.2l-2.55 -3.4l2.55 -3.4a1 1 0 0 0 -.2 -1.4" />
                                                            </svg>
                                                        )}
                                                    </button>
                                                    <span className="block mt-2 text-sm">
                                                        {day.day}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            className="px-8 w py-2 text-white bg-[#896CFE] rounded-lg font-poppins shadow-indigo-500/50"
                                            onClick={toggleModal}
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Cardio, Strenght dan Weeks */}
                        <div className="flex justify-between mt-20">
                            <div className="text-center">
                                <div className="flex flex-col items-center justify-center w-20 h-20 p-2 rounded-lg bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.25"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="mb-1 icon-tabler icons-tabler-outline icon-tabler-chart-bar-popular text-[#E2F163]"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                        <path d="M9 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                        <path d="M15 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                        <path d="M4 20h14" />
                                    </svg>
                                    <h3 className="text-sm font-semibold text-[#E2F163]">
                                        Cardio
                                    </h3>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="flex flex-col items-center justify-center w-20 h-20 p-2 rounded-lg bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.25"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="mb-1 icon-tabler icons-tabler-outline icon-tabler-chart-bar-popular text-[#E2F163]"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                        <path d="M9 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                        <path d="M15 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                        <path d="M4 20h14" />
                                    </svg>
                                    <h3 className="text-sm font-semibold text-[#E2F163]">
                                        Strength
                                    </h3>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="flex flex-col items-center justify-center w-20 h-20 p-2 rounded-lg bg-white/20">
                                    <span className="mb-1 text-2xl text-[#E2F163]">
                                        12
                                    </span>
                                    <h3 className="text-sm font-semibold text-[#E2F163]">
                                        Weeks
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Footer Section */}
                        <div className="flex flex-col items-center justify-center mt-20">
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
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ArmsTraining;
