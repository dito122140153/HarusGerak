import * as React from "react";
import { useState } from "react";
import HarusGerak from "../../assets/bg-default.png";
import LogoHG from "!assets/logo-harusgerak.png";
import { useAos } from "@/lib/hooks/useAos";
import { Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Bmi() {
    useAos();
    const [weight, setWeight] = useState<number | "">("");
    const [height, setHeight] = useState<number | "">("");
    const [bmi, setBmi] = useState<number | null>(null);
    const [status, setStatus] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const calculateBMI = () => {
        if (weight && height) {
            const heightInMeters = height / 100;
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setBmi(bmiValue);
            determineStatus(bmiValue);
            setIsModalOpen(true);
        }
    };

    const determineStatus = (bmiValue: number) => {
        if (bmiValue < 18.5) {
            setStatus("Berat Badan Kurang");
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
            setStatus("Berat Badan Normal");
        } else if (bmiValue >= 25 && bmiValue < 29.9) {
            setStatus("Berat Berlebih");
        } else {
            setStatus("Obesitas");
        }
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const renderMessage = () => {
        switch (status) {
            case "Berat Badan Kurang":
                return (
                    <div>
                        <h4 className="mb-2 text-lg font-bold text-black">
                            Berat rendah dapat menyebabkan berbagai masalah
                            penyakit:
                        </h4>
                        <ul className="space-y-1 text-black list-disc list-inside">
                            <li>Infertilitas</li>
                            <li>Anemia</li>
                            <li>Osteoporosis</li>
                            <li>Sistem imun lemah</li>
                        </ul>
                    </div>
                );
            case "Berat Badan Normal":
                return (
                    <div>
                        <h4 className="mb-2 text-lg font-bold text-black">
                            Jaga gaya hidup sehat & konsultasi dokter jika ada
                            masalah kesehatan
                        </h4>
                    </div>
                );
            case "Berat Berlebih":
            case "Obesitas":
                return (
                    <div>
                        <h4 className="mb-2 text-lg font-bold text-black">
                            Beberapa penyakit yang berasal dari kegemukan:
                        </h4>
                        <ul className="space-y-1 text-black list-disc list-inside">
                            <li>Diabetes</li>
                            <li>Hipertensi</li>
                            <li>Sakit Jantung</li>
                            <li>Osteoarthritis</li>
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <AuthenticatedLayout user={undefined}>
            <div className="relative flex flex-col items-center justify-center min-h-screen text-gray-100">
                {/* <div className="absolute z-10 top-5 left-5">
                    <Link href={route("dashboard")}>
                        <button className="text-[#E2F163] font-semibold">
                            &lt; Back
                        </button>
                    </Link>
                </div> */}

                <img
                    id="background"
                    className="absolute inset-0 z-0 object-cover w-full h-full"
                    src={HarusGerak}
                    alt="Background"
                />

                <div className="relative z-10 w-full max-w-md bg-[#222226]/90 p-8 rounded-lg shadow-md backdrop-blur-sm">
                    <h2 className="text-[24px] font-bold mb-6 text-[#896CFE] text-center font-poppins">
                        BMI Calculator
                    </h2>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-semibold font-poppins">
                            Height (cm)
                        </label>
                        <input
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(Number(e.target.value))}
                            placeholder="Enter your height"
                            className="w-full p-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#896CFE]"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-semibold font-poppins">
                            Weight (kg)
                        </label>
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(Number(e.target.value))}
                            placeholder="Enter your weight"
                            className="w-full p-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#896CFE]"
                        />
                    </div>

                    <button
                        onClick={calculateBMI}
                        className="w-full py-2 bg-[#E2F163] text-black font-bold rounded-full hover:bg-[#7055E6] transition duration-200 font-poppins"
                    >
                        Calculate
                    </button>
                </div>

                {/* Footer Section */}
                <div className="flex flex-col items-center justify-center mt-24">
                    <div className="flex items-center">
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

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                        <div className="w-full max-w-lg p-8 text-center bg-[#232323] rounded-lg shadow-lg">
                            <h3
                                className={`text-2xl font-bold mb-4 font-poppins uppercase ${
                                    status === "Obesitas"
                                        ? "text-red-500"
                                        : status === "Berat Berlebih"
                                        ? "text-orange-500"
                                        : status === "Berat Badan Normal"
                                        ? "text-green-500"
                                        : "text-blue-500"
                                }`}
                            >
                                {status}
                            </h3>

                            <div className="mb-4 text-center">
                                <p className="text-lg font-semibold text-white font-poppins">
                                    Tinggi (cm): <span>{height}</span>
                                </p>
                                <p className="text-lg font-semibold text-white font-poppins">
                                    Berat (kg): <span>{weight}</span>
                                </p>
                            </div>

                            <div className="relative flex items-center justify-center mb-4">
                                <div className="relative w-3/4 h-4 bg-gray-300 rounded-full">
                                    <div
                                        className="absolute top-0 h-4 bg-red-500 rounded-full"
                                        style={{
                                            width: `${
                                                (bmi && (bmi / 40) * 100) || 0
                                            }%`,
                                        }}
                                    ></div>
                                </div>
                                <span className="absolute text-sm font-bold text-black">
                                    {bmi?.toFixed(1)}
                                </span>
                            </div>

                            <p className="mb-4 text-white font-poppins">
                                Pastikan asupan kalorimu sesuai dengan kebutuhan
                            </p>

                            <button
                                className="px-6 py-2 mb-4 text-black font-poppins font-semibold bg-[#E2F163] rounded-full"
                                onClick={toggleModal}
                            >
                                Cek Ulang
                            </button>

                            <div className="p-4 text-left bg-gray-100 rounded-lg">
                                <h4
                                    className={`text-2xl font-bold mb-4 font-poppins ${
                                        status === "Obesitas"
                                            ? "text-red-500"
                                            : status === "Berat Berlebih"
                                            ? "text-orange-500"
                                            : status === "Berat Badan Normal"
                                            ? "text-green-500"
                                            : "text-blue-500"
                                    }`}
                                >
                                    BMI kamu: {bmi?.toFixed(1)}, {status}
                                </h4>
                                <p className="text-black text-md font-poppins ">
                                    Dalam 60% kasus, pola makan yang buruk dapat
                                    berisiko Diabetes.
                                </p>

                                <a
                                    href="https://ahligizi.id/layanan/"
                                    target="_blank"
                                >
                                    <button className="px-4 py-2 mt-4 font-semibold text-white bg-pink-600 rounded-full font-poppins">
                                        Konsultasi Ahli Gizi
                                    </button>
                                </a>
                            </div>

                            <div className="p-4 mt-4 text-left bg-gray-100 rounded-lg font-poppins">
                                {renderMessage()}
                                <a
                                    href="https://www.halodoc.com/"
                                    target="_blank"
                                >
                                    <button className="px-4 py-2 mt-4 font-semibold text-white bg-red-500 rounded-full">
                                        Konsultasi Dokter Sekarang
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
