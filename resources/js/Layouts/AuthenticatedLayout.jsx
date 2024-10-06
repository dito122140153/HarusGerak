import { useState } from "react";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-[#1d1d1d] flex">
            {/* Sidebar */}
            <nav className="absolute left-0 p-4 transform -translate-y-1/2 bg-[#333333] rounded-r-lg w-28 top-1/2 border-r-8 border-[#896CFE] z-10">
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-center"></div>
                    {/* Menu Links */}
                    <div className="flex flex-col space-y-8 place-items-center font-poppins">
                        <NavLink
                            href={route("dashboard")}
                            active={
                                route().current("dashboard") ||
                                route().current("beginner") ||
                                route().current("intermediate") ||
                                route().current("advance")
                            }
                            className={`block py-2 pr-4 text-sm ${
                                route().current("dashboard") ||
                                route().current("beginner") ||
                                route().current("intermediate") ||
                                route().current("advance")
                                    ? "text-[#896CFE]"
                                    : ""
                            }`}
                        >
                            <div className="flex flex-col items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="36"
                                    height="36"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="mb-1"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8" />
                                    <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" />
                                </svg>
                                <span>Summary</span>
                            </div>
                        </NavLink>

                        <NavLink
                            href={route("bmi")}
                            active={route().current("bmi")}
                            className="block py-2 pr-4 text-sm"
                        >
                            <div className="flex flex-col items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="36"
                                    height="36"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-calculator"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                    <path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
                                    <path d="M8 14l0 .01" />
                                    <path d="M12 14l0 .01" />
                                    <path d="M16 14l0 .01" />
                                    <path d="M8 17l0 .01" />
                                    <path d="M12 17l0 .01" />
                                    <path d="M16 17l0 .01" />
                                </svg>
                                <span>BMI</span>
                            </div>
                        </NavLink>

                        <NavLink
                            href={route("tracker")}
                            active={route().current("tracker")}
                            className="block py-2 pr-4 text-sm"
                        >
                            <div className="flex flex-col items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="36"
                                    height="36"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-math-symbols"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M3 12l18 0" />
                                    <path d="M12 3l0 18" />
                                    <path d="M16.5 4.5l3 3" />
                                    <path d="M19.5 4.5l-3 3" />
                                    <path d="M6 4l0 4" />
                                    <path d="M4 6l4 0" />
                                    <path d="M18 16l.01 0" />
                                    <path d="M18 20l.01 0" />
                                    <path d="M4 18l4 0" />
                                </svg>
                                <span>Tracker</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex-1">
                {header && (
                    <header className="bg-[#1d1d1d]">
                        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                <main>{children}</main>
            </div>
        </div>
    );
}
