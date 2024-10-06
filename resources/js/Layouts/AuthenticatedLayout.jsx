import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-[#232323] flex"> 
            {/* Sidebar */}
            <nav className="bg-[#232323] w-64 border-r border-gray-100">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-center py-4">
                            <Link href="/">
                                <ApplicationLogo className="block w-auto text-[#896CFE] fill-current h-9" />
                            </Link>
                        </div>

                        {/* Menu Links */}
                        <div className="flex-1 mt-10 space-y-8">
                            <NavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                                className="text-[#896CFE] text-xl block px-4 py-2"
                            >
                                Dashboard
                            </NavLink>
                            {/* Tambahkan link lainnya di sini */}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex-1">
                {header && (
                    <header className="bg-[#232323] ">
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
