import { Training } from "@/Components/Training";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import LogoHG from "!assets/logo-harusgerak.png";
import { useAos } from "@/lib/hooks/useAos";

export default function Dashboard({ auth }: { auth: any }) {
    useAos();

    // Mengambil tanggal saat ini dengan format "Monday, Jun 12"
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        month: "short",
        day: "numeric"
    };
    const formattedDate = today.toLocaleDateString("en-US", options);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div
                    className="relative flex items-center justify-between -mb-2 text-white"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    {/* Flex digunakan untuk mengatur elemen sejajar */}
                    <div>
                        <h1 className="text-[32px] font-extrabold leading-tight font-poppins text-[#896CFE] capitalize">
                            Hi, {auth.user.name}
                        </h1>
                        {/* Tanggal realtime */}
                        <p className="text-sm uppercase text-white/50">{formattedDate}</p>
                    </div>
                    {/* Dropdown for Profile and Log Out */}
                    <div className="relative z-10">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-[#896CFE] transition duration-150 ease-in-out bg-[#1d1d1d] border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
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
                                <Dropdown.Link href={"/profile"}>
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
            <div
                className="z-0 px-8 py-6 mx-auto mt-10 text-white max-w-7xl"
                data-aos="fade-down"
                data-aos-duration="1000"
            >
                <h1 className="font-bold font-poppins text-[30px]">
                    Find Your Fitness Fit!
                </h1>
                <p className="font-semibold font-poppins text-[16px] ">
                    Gain Muscle, Get fitter, Lose fat
                </p>
                <p className="font-light font-poppins text-[14px] mt-4 text-white/60">
                    Select a program that matches your strength level and
                    training style.
                </p>
            </div>
            <Head title="HarusGerak" />

            <div className="flex flex-col items-center justify-center px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="container px-4 mx-auto lg:px-8">
                    {/* Training Section */}
                    <div
                        className="mt-2"
                        data-aos="zoom-out-up"
                        data-aos-duration="1000"
                    >
                        <Training />
                    </div>
                </div>

                <p
                    className="mt-10 text-white font-poppins"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    “Get your body moving, let your soul dance”
                </p>

                <div
                    className="mt-8"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <img
                        src={LogoHG}
                        alt="Logo HarusGerak"
                        className="w-48 h-auto"
                    />
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="mb-10 text-[#E2F163] text-[40px] font-extrabold italic "
                >
                    HARUS<span className="font-normal">GERAK</span>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
