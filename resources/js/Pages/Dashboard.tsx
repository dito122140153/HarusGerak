import { Training } from "@/Components/Training";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import LogoHG from "!assets/logo-harusgerak.png";
import { useAos } from "@/lib/hooks/useAos";

export default function Dashboard({ auth }) {
    useAos();
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="text-white">
                    <h1 className="text-[32px] font-semibold leading-tight font-poppins text-[#896CFE] uppercase">
                        Hi, {auth.user.name}
                    </h1>
                    <p className="text-sm text-white/50">MONDAY, JUN 12</p>
                    <h2 className="text-[32px] font-semibold mt-4 font-poppins">
                        Find Your Fitness Fit!
                    </h2>
                    <p className="mt-1 text-lg font-bold text-white">
                        Gain Muscle, Get Fitter, Lose Fat
                    </p>
                    <p className="text-[14px] mt-1 text-white/50">
                        Select a program that matches your strength level and
                        training style.
                    </p>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="flex flex-col items-center justify-center px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="container px-4 mx-auto lg:px-8">
                    {/* Training Section */}
                    <div className="mt-8">
                        <Training />
                    </div>
                </div>

                <p className="mt-10 text-white font-poppins">
                    “Get your body moving, let your soul dance”
                </p>

                <div className="mt-8" data-aos="zoom-in" data-aos-duration="1500">
                    <img
                        src={LogoHG}
                        alt="Logo HarusGerak"
                        className="w-48 h-auto"
                    />
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="mb-10 text-[#E2F163] text-[40px] font-extrabold italic "
                >
                    HARUS<span className="font-normal">GERAK</span>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
