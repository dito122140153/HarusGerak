import { Link, Head } from "@inertiajs/react";
import React from "react";
import HarusGerak from "!assets/bg-opening-screen.png";
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
                <img
                    id="background"
                    className="absolute inset-0 z-0 object-cover w-full h-full"
                    src={HarusGerak}
                    alt="Background"
                />
                <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                    <div className="flex flex-col items-center justify-end min-h-screen">
                        <header className="mt-auto mb-56">
                            {auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="rounded-md px-5 py-3 text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <div className="flex space-x-6">
                                    <Button
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
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
                                        data-aos-duration="1000"
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

                        <footer className="py-8 text-sm text-center text-white dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
