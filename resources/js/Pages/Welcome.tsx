import { Link, Head } from "@inertiajs/react";
import React from "react";
import HarusGerak from "!assets/bg-default.png";
import LogoHG from "!assets/logo-harusgerak.png";
import { Button } from "@/Components/ui/button";
import { useAos } from "@/lib/hooks/useAos";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    useAos();
    return (
        <>
            <Head title="Welcome" />
            <div className="flex items-center justify-center min-h-screen bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                {/* Background image */}
                <img
                    id="background"
                    className="absolute inset-0 z-0 object-cover w-full h-full"
                    src={HarusGerak}
                    alt="Background"
                />

                {/* Content container */}
                <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                    <div className="flex flex-col items-center justify-center min-h-screen">
                        {/* Logo and text centered */}
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                            className="text-[#E2F163] text-[25px] font-bold mb-2"
                        >
                            Welcome to
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1500">
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

                        <header className="mt-10">
                            {auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="font-poppins bg-white/25 rounded-full px-5 py-3 hover:bg-white text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <div className="flex space-x-6">
                                    <Button
                                        data-aos="fade-right"
                                        data-aos-duration="1500"
                                        className="hover:bg-white"
                                    >
                                        <Link
                                            href={route("login")}
                                            className="rounded-md px-5 py-3 text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                    </Button>
                                    <Button
                                        data-aos="fade-left"
                                        data-aos-duration="1500"
                                        className="hover:bg-white"
                                    >
                                        <Link
                                            href={route("register")}
                                            className="rounded-md px-5 py-3 text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </Button>
                                </div>
                            )}
                        </header>

                        
                    </div>
                </div>
            </div>
        </>
    );
}
