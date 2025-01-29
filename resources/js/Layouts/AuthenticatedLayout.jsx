import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function Authenticated({ header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-gray-50 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-blue-600 hover:text-blue-700 transition duration-300" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:ms-10 sm:flex">
                            <NavLink
                                    href={route("tickets.create")}
                                    active={route().current("tickets.create")}
                                >
                                    <h1 className="text-2xl text-gray-700 hover:text-blue-500 transition duration-300">
                                        Criar ticket
                                    </h1>
                                </NavLink>
                                <NavLink
                                    href={route("tickets.index")}
                                    active={route().current("tickets.index")}
                                >
                                    <h1 className="text-2xl text-gray-700 hover:text-blue-500 transition duration-300">
                                        Suporte
                                    </h1>
                                </NavLink>
                            </div>
                        </div>


                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="p-2 rounded-md text-gray-700 hover:text-blue-500 transition duration-150"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden "
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("tickets.index")}
                            active={route().current("tickets.index")}
                        >
                            Início
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-blue-600">

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Perfil
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Sair
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-gradient-to-r from-blue-500 to-blue-600 shadow-xl">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-white">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
