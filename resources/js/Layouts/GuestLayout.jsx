import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-gray-50 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Link href="/">
                                <ApplicationLogo className="block h-10 w-auto fill-current text-blue-600 hover:text-yellow-400 transition duration-300 ansition-all ease-in-out transform hover:scale-105 hover:rotate-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="p-4 overflow-hidden">{children}</main>
        </div>
    );
}
