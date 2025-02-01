import Chatbot from "@/Components/ChatBot/ChatBot";
import { Link, Head } from "@inertiajs/react";

export default function TicketIndex({ user }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex flex-col sm:flex-row sm:justify-center sm:items-center min-h-screen bg-gray-100 selection:bg-red-500 selection:text-white">
                <div className="w-full sm:w-1/2 flex items-center justify-center p-6">
                    <img
                        src="https://img.freepik.com/fotos-gratis/ilustracao-3d-de-caneta-colocando-carrapatos-azuis-no-papel_107791-15675.jpg?t=st=1738426309~exp=1738429909~hmac=06fe98af87e0a2c13e2635341979a6c08a9930017dc60059635af5f52f1fd866&w=740"
                        alt="Tickets Support"
                        className="w-full max-w-md rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
                    />
                </div>

                <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start justify-center p-6">
                    <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center sm:text-left leading-tight">
                        Olá, {user.name}
                    </h1>

                    <h2 className="text-gray-700 text-lg text-center sm:text-left mb-6">
                        <span className="text-blue-700 text-2xl text-center sm:text-left">
                            Email: {"  "}
                        </span>
                        {user.email}
                    </h2>

                    <h2 className="text-gray-700 text-lg text-center sm:text-left mb-6">
                        <span className="text-blue-700 text-2xl text-center sm:text-left">
                            Telefone: {"  "}
                        </span>
                        {user.phone}
                    </h2>

                    <p className="text-gray-700 text-lg text-center sm:text-left mb-6">
                        Seus tickets estão disponíveis para visualização.
                    </p>

                    <div className="space-y-4 w-full sm:w-auto">
                        <Link
                            href={route("tickets.create")}
                            className="block w-full sm:w-64 text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all transform hover:scale-105 focus:outline-none"
                        >
                            Visualizar Tickets
                        </Link>
                    </div>
                </div>
            </div>
            <Chatbot />
        </>
    );
}
