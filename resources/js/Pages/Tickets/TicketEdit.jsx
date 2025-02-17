import React from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { AlertMessage } from "@/Components/Delete/AlertMessage/AlertMessage";
import { useForm } from "@inertiajs/react";
import { motion } from "framer-motion";
export default function TicketEdit({ ticket, flash }) {
    const { data, setData, put } = useForm({
        amount_tickets: ticket.amount_tickets,
        status: ticket.status,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("tickets.update", { ticket: ticket.id }));
    };

    return (
        <AuthenticatedLayout
            user={ticket.user}
            header={
                <motion.h2
                    className="font-semibold text-xl text-gray-50 leading-tight"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Editar Ticket
                </motion.h2>
            }
        >
            <Head title="Editar Ticket" />
            <motion.div
                className="py-4 max-w-7xl mx-auto sm:px-8 lg:px-8"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="px-6 py-8 sm:p-8 bg-white rounded-lg shadow-md border border-gray-200">
                    <h1 className="text-4xl font-extrabold text-center text-blue-600 leading-tight">
                        Editar Tickets
                    </h1>
                    <p className="mt-4 text-lg text-center text-blue-600">
                        {ticket.subject}
                    </p>
                    <p className="mt-4 text-lg text-center text-gray-500">
                        Atualize os detalhes do ticket
                    </p>
                </div>

                <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
                    <AlertMessage message={flash} />
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label
                                    htmlFor="amount_tickets"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Quantidade de Tickets
                                </label>
                                <input
                                    id="amount_tickets"
                                    name="amount_tickets"
                                    value={data.amount_tickets}
                                    onChange={(e) =>
                                        setData("amount_tickets", e.target.value)
                                    }
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="status"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Status
                                </label>
                                <input
                                    id="status"
                                    name="status"
                                    value={data.status}
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none"
                            >
                                Salvar Alterações
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </AuthenticatedLayout>
    );
}
