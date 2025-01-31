import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex flex-col sm:flex-row sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end w-full sm:w-auto">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Login
                            </Link>

                            <Link
                                href={route("register")}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Cadastre-se
                            </Link>
                        </>
                    )}
                </div>

                <div className="w-full sm:w-1/2 flex items-center justify-center p-6">
                    <img
                        src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-conta_114360-279.jpg?t=st=1738345335~exp=1738348935~hmac=41c3f36696f41b79580d9213d6f5ab2607d792c8e295923b07889b722ae5601a&w=740"
                        alt="Tickets Support"
                        className="w-full max-w-md rounded-lg shadow-lg"
                    />
                </div>

                <div className="w-full sm:w-1/2 flex flex-col items-center justify-center p-6">
                    <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center sm:text-left">
                        Bem-vindo ao Tickets Support
                    </h1>

                    <div className="space-y-4 w-full sm:w-auto">
                        <Link
                            href={route("tickets.create")}
                            className="block w-full sm:w-64 text-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
                        >
                            Criar Ticket
                        </Link>

                        <Link
                            href={route("tickets.index")}
                            className="block w-full sm:w-64 text-center px-6 py-3 bg-blue-300 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 transition"
                        >
                            Visualizar Tickets
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
