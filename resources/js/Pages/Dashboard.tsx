import { Training } from "@/Components/Training";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown"; // Import Dropdown
import LogoHG from "!assets/logo-harusgerak.png";
import { useAos } from "@/lib/hooks/useAos";

export default function Dashboard({ auth }) {
    useAos();
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between text-white">
                    {" "}
                    {/* Flex digunakan untuk mengatur elemen sejajar */}
                    <div>
                        <h1 className="text-[32px] font-semibold leading-tight font-poppins text-[#896CFE] uppercase">
                            Hi, {auth.user.name}
                        </h1>
                        <p className="text-sm text-white/50">MONDAY, JUN 12</p>
                    </div>
                    {/* Dropdown for Profile and Log Out */}
                    <div>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-[#896CFE] transition duration-150 ease-in-out bg-[#232323] border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
                                    >
                                        {/* Icon for User */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="64"
                                            height="64"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-tabler icon-tabler-user-circle"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route("profile.edit")}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            }
        >
            <div className="px-8 py-6 mx-auto text-white max-w-7xl">
                <h1 className="font-bold font-poppins text-[30px]">Find Your Fitness Fit!</h1>
                <p className="font-semibold font-poppins text-[16px]">Gain Muscle, Get fitter, Lose fat</p>
                <p className="font-light font-poppins text-[14px] mt-4 text-white/60">Select a program that matches your strength level and training style.</p>
            </div>
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

                <div
                    className="mt-8"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                >
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
