import Chatbot from "@/Components/ChatBot/ChatBot";
import { Link, Head } from "@inertiajs/react";
import { motion } from "framer-motion";

export default function Welcome() {
    return (
        <>
            <Head title="Tickets Suporte" />
            <div className="relative flex flex-col sm:flex-row sm:justify-center sm:items-center min-h-screen bg-gray-100 selection:bg-red-500 selection:text-white">
                <div className="w-full sm:w-1/2 flex items-center justify-center p-6">
                    <img
                        src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-conta_114360-279.jpg?t=st=1738345335~exp=1738348935~hmac=41c3f36696f41b79580d9213d6f5ab2607d792c8e295923b07889b722ae5601a&w=740"
                        alt="Tickets Support"
                        className="w-full max-w-md rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
                    />
                </div>

                <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start justify-center p-6">
                    <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center sm:text-left leading-tight">
                        Bem-vindo ao <br />
                        <span className="text-gray-700">Tickets Suporte</span>
                    </h1>

                    <p className="text-gray-600 text-lg text-center sm:text-left mb-6">
                        Gerencie seus tickets com rapidez e eficiência.
                    </p>
                    <div className="space-y-4 w-full sm:w-auto">
                        <motion.h2
                            className="font-semibold text-xl text-gray-50 leading-tight"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}>
                            <Link
                                href={route("tickets.create")}
                                className="block w-full sm:w-64 text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all transform hover:scale-105 focus:outline-none"
                            >
                                Criar Ticket
                            </Link>
                        </motion.h2>
                        <motion.h2
                            className="font-semibold text-xl text-gray-50 leading-tight"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >

                            <Link
                                href={route("tickets.index")}
                                className="block w-full sm:w-64 text-center px-6 py-3 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-all transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-200"
                            >
                                Perfil do Vendedor
                            </Link>
                        </motion.h2>
                    </div>
                </div>
            </div>
            <Chatbot />
        </>
    );
}
