import React, { useState } from "react";
import HarusGerak from "../../assets/bg-default.png";
import LogoHG from "!assets/logo-harusgerak.png";
import { useAos } from "@/lib/hooks/useAos";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const activities = [
    { name: "Push Up", MET: 6.5 },
    { name: "Sit Up", MET: 3.8 },
    { name: "Jogging", MET: 9.8 },
    { name: "Crunch", MET: 3 },
    { name: "Plank", MET: 2.8 },
    { name: "Dumbbell Bench Press", MET: 5 },
    { name: "Bicep Curl", MET: 3 },
    { name: "Squat", MET: 3 },
    { name: "Bicycle Crunch", MET: 3.8 },
    { name: "Plank with Variation", MET: 4.5 },
    { name: "Hammer Curl", MET: 3 },
    { name: "Barbell Back Squat", MET: 6 },
    { name: "Hanging Leg Raise", MET: 7 },
    { name: "Incline Dumbbell Press", MET: 6 },
    { name: "Barbell Curl", MET: 4 },
    { name: "Back Squat with Heavy Weight", MET: 7 },
];

const Tracker: React.FC = () => {
    useAos();
    const [selectedActivity, setSelectedActivity] = useState(activities[0].MET);
    const [duration, setDuration] = useState<number | string>("");
    const [weight, setWeight] = useState<number | string>("");
    const [calories, setCalories] = useState<number | null>(null);

    const calculateCalories = () => {
        if (!duration || !weight || selectedActivity === undefined) {
            alert("Please fill all the fields");
            return;
        }

        const caloriesBurned =
            (parseFloat(duration as string) *
                selectedActivity *
                parseFloat(weight as string)) /
            200;

        setCalories(caloriesBurned);
    };

    return (
        <AuthenticatedLayout user={undefined}>
            <Head title="HarusGerak" />
            <div className="flex items-center justify-center min-h-screen">
                <img
                    id="background"
                    className="absolute inset-0 z-0 object-cover w-full h-full"
                    src={HarusGerak}
                    alt="Background"
                />
                <div
                    className="z-10 w-full max-w-md p-8 bg-[#2222] rounded-lg shadow-lg font-poppins backdrop-contrast-75"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                >
                    <h1 className="mb-6 text-2xl font-bold text-center text-[#896CFE]">
                        Calories Burned Calculator
                    </h1>

                    <div className="mb-4">
                        <label className="block mb-2 font-semibold text-white font-poppins">
                            Activity
                        </label>
                        <select
                            className="block w-full p-2 border border-gray-300 rounded"
                            value={selectedActivity}
                            onChange={(e) =>
                                setSelectedActivity(parseFloat(e.target.value))
                            }
                        >
                            {activities.map((activity) => (
                                <option
                                    key={activity.name}
                                    value={activity.MET}
                                >
                                    {activity.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 font-semibold text-white font-poppins rounded-md focus:outline-none focus:ring-2 focus:ring-[#896CFE]">
                            Duration (minutes)
                        </label>
                        <input
                            type="number"
                            className="block w-full p-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-[#896CFE]"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            placeholder="Enter your duration"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 font-semibold text-white font-poppins">
                            Weight (kg)
                        </label>
                        <input
                            type="number"
                            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#896CFE]"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="Enter your weight"
                        />
                    </div>

                    <button
                        onClick={calculateCalories}
                        className="w-full p-2 font-bold text-black bg-[#E2F163] rounded-full transition duration-200 hover:bg-[#7055E6] font-poppins"
                    >
                        Calculate
                    </button>

                    {calories !== null && (
                        <div className="mt-6 text-center">
                            <h2 className="text-lg font-semibold text-white">
                                Calories Burned
                            </h2>
                            <p className="text-2xl font-bold text-white">
                                {calories.toFixed(2)} kcal
                            </p>
                        </div>
                    )}
                </div>
                {/* Footer Section */}
                <div className="flex flex-col items-center justify-center ml-24">
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
            </div>
        </AuthenticatedLayout>
    );
};

export default Tracker;
