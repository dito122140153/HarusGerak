import React, { useState } from "react";
import HarusGerak from "!assets/bg-default.png";
import PrimaryButton from "@/Components/PrimaryButton";
import { AgeScroll } from "@/Components/AgeScroll";
import { WeightScroll } from "@/Components/WeightScroll";
import { HeightScroll } from "@/Components/HeightScroll";

const Predashboard: React.FC = () => {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        gender: "",
        age: "",
        weight: "",
        height: "",
    });

    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="relative flex flex-col items-center justify-center w-full h-screen text-white">
                        <img
                            src={HarusGerak}
                            alt="Background"
                            className="absolute inset-0 z-0 object-cover w-full h-full"
                        />

                        <div className="relative z-10 flex flex-col items-center ">
                            <h1 className="text-[30px] text-center font-poppins text-[#E2F163] mt-60">
                                Consistency Is <br /> the Key To Progress.{" "}
                                <br /> Don't Give Up!
                            </h1>

                            <div className="w-screen h-[150px] bg-[#B3A0FF] mt-20 flex justify-center">
                                <p className="max-w-screen-md py-6 text-center text-[22px] text-black font-poppins">
                                    Harus Gerak merupakan platform digital yang
                                    dirancang untuk memotivasi dan memandu dalam
                                    menjalani gaya hidup aktif dan sehat.
                                </p>
                            </div>

                            <PrimaryButton
                                className="font-extrabold text-[20px] mt-10 font-poppins"
                                onClick={nextStep}
                            >
                                Next
                            </PrimaryButton>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="flex flex-col items-center justify-center w-screen min-h-screen text-white bg-black/90">
                        <div className="absolute top-5 left-5">
                            <button
                                className="text-[#E2F163] font-semibold"
                                onClick={prevStep}
                            >
                                &lt; Back
                            </button>
                        </div>

                        <h1 className="mb-6 text-[40px] font-bold">
                            What’s Your Gender
                        </h1>

                        <div className="w-full bg-[#B3A0FF] h-[150px] py-3 px-5 text-center mb-6 mt-10">
                            <p className="w-full py-6 justify-center text-center text-[22px] text-black font-poppins ">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        {/* Gender Selection */}
                        <div className="flex mt-10 mb-10 space-x-10 gap-52">
                            <button
                                className="flex flex-col items-center text-white"
                                onClick={() =>
                                    setFormData({ ...formData, gender: "Male" })
                                }
                            >
                                <div className="w-44 h-44 bg-[#E2F163] flex items-center justify-center rounded-full mb-2">
                                    <span className="text-4xl">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="96"
                                            height="96"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="text-black icon icon-tabler icons-tabler-outline icon-tabler-gender-male"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
                                            <path d="M19 5l-5.4 5.4" />
                                            <path d="M19 5h-5" />
                                            <path d="M19 5v5" />
                                        </svg>
                                    </span>
                                </div>
                                <span className="font-semibold">Male</span>
                            </button>
                            <button
                                className="flex flex-col items-center text-white"
                                onClick={() =>
                                    setFormData({
                                        ...formData,
                                        gender: "Female",
                                    })
                                }
                            >
                                <div className="w-44 h-44    bg-[#E2F163] flex items-center justify-center rounded-full mb-2">
                                    <span className="text-4xl">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="96"
                                            height="96"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="text-black icon icon-tabler icons-tabler-outline icon-tabler-gender-female"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
                                            <path d="M12 14v7" />
                                            <path d="M9 18h6" />
                                        </svg>
                                    </span>
                                </div>
                                <span className="font-semibold">Female</span>
                            </button>
                        </div>

                        <PrimaryButton
                            className="font-extrabold text-[20px] mt-10 font-poppins"
                            onClick={nextStep}
                        >
                            Continue
                        </PrimaryButton>
                    </div>
                );
            case 3:
                return (
                    <div className="flex flex-col items-center justify-center w-screen min-h-screen text-white bg-black/90">
                        <div className="absolute top-5 left-5">
                            <button
                                className="text-[#E2F163] font-semibold"
                                onClick={prevStep}
                            >
                                &lt; Back
                            </button>
                        </div>

                        <h1 className="mb-6 text-[40px] font-bold">
                            How Old Are You?
                        </h1>

                        <div className="w-full h-[150px] py-3 px-5 text-center mb-6 rounded-lg ">
                            <p className="w-full py-6 justify-center text-center text-[22px] text-white font-poppins ">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        {/* Age Selection */}
                        <div className="-mt-14">
                            <AgeScroll />
                        </div>

                        <PrimaryButton
                            className="font-extrabold text-[20px] mt-44 font-poppins"
                            onClick={nextStep}
                        >
                            Continue
                        </PrimaryButton>
                    </div>
                );
            case 4:
                return (
                    <div className="flex flex-col items-center justify-center w-screen min-h-screen text-white bg-black/90">
                        <div className="absolute top-5 left-5">
                            <button
                                className="text-[#E2F163] font-semibold"
                                onClick={prevStep}
                            >
                                &lt; Back
                            </button>
                        </div>

                        <h1 className="mb-6 text-[40px] font-bold">
                            What Is Your Weight?
                        </h1>

                        <div className="w-full h-[150px] py-3 px-5 text-center mb-6 rounded-lg ">
                            <p className="w-full py-6 justify-center text-center text-[22px] text-white font-poppins ">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        {/* Weight Selection */}
                        <div className="-mt-14">
                            <WeightScroll />
                        </div>

                        <PrimaryButton
                            className="font-extrabold text-[20px] mt-44 font-poppins"
                            onClick={nextStep}
                        >
                            Continue
                        </PrimaryButton>
                    </div>
                );
            case 5:
                return (
                    <div className="flex flex-col items-center justify-center w-screen min-h-screen text-white bg-black/90">
                        <div className="absolute top-5 left-5">
                            <button
                                className="text-[#E2F163] font-semibold"
                                onClick={prevStep}
                            >
                                &lt; Back
                            </button>
                        </div>

                        <h1 className="mb-6 text-[40px] font-bold">
                            What Is Your Height?
                        </h1>

                        <div className="w-full h-[150px] py-3 px-5 text-center mb-6 rounded-lg ">
                            <p className="w-full py-6 justify-center text-center text-[22px] text-white font-poppins ">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        {/* Height Selection */}
                        <div className="-mt-14">
                            <HeightScroll />
                        </div>

                        <PrimaryButton
                            className="font-extrabold text-[20px] mt-20 font-poppins mr-10"
                            onClick={nextStep}
                        >
                            Continue
                        </PrimaryButton>
                    </div>
                );
            default:
                return <div>Unknown Step</div>;
        }
    };

    return <div>{renderStep()}</div>;
};

export default Predashboard;
