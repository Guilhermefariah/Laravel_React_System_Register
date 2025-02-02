import React from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ConfirmDelete } from "@/Components/Delete/ConfirmDelete";
import { AlertMessage } from "@/Components/Delete/AlertMessage/AlertMessage";
import TableHead from "@/Components/Table/TableHead";
import WarningButton from "@/Components/Button/WarningButton";
import { motion } from "framer-motion";

export default function TicketShow({ user, auth, tickets, flash }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <motion.h2
                    className="font-semibold text-xl text-gray-50 leading-tight"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Vendedor
                </motion.h2>
            }
        >
            <Head title="Tickets Suporte" />
            <motion.div
                className="py-4 max-w-7xl mx-auto sm:px-8 lg:px-8"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="px-6 py-8 sm:p-8 bg-white rounded-lg shadow-md border border-gray-200">
                    <h1 className="text-4xl font-extrabold text-center text-blue-600 leading-tight">
                        Painel de Tickets
                    </h1>
                    <p className="mt-4 text-lg text-center text-gray-500">
                        Gerencie seus tickets com rapidez e eficiência. <br />
                        Acompanhe e resolva todos os casos com facilidade.
                    </p>
                </div>

                <motion.div
                    className="overflow-hidden bg-gray-50 shadow-xl sm:rounded-lg transition-shadow duration-300 hover:shadow-2xl"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <AlertMessage message={flash} />
                    <div className="relative overflow-x-auto sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <TableHead />
                            <tbody className="bg-white divide-y divide-gray-200">
                                {tickets.length > 0 ? (
                                    tickets.map((ticket) => (
                                        <motion.tr
                                            key={ticket.id}
                                            className="hover:bg-gray-100 transition-all duration-300 ease-in-out"
                                            initial={{ opacity: 0, x: -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <td className="px-8 py-3 text-sm text-gray-700 hover:text-blue-600">
                                                {ticket.id}
                                            </td>
                                            <td className="px-8 py-3 text-sm text-gray-700 hover:text-blue-600">
                                                {user.name}
                                            </td>
                                            <td className="px-8 py-3 text-sm text-gray-700 hover:text-blue-600">
                                                {user.phone}
                                            </td>
                                            <td className="px-8 py-3 text-sm text-gray-700 hover:text-blue-600">
                                                {user.email}
                                            </td>
                                            <td
                                                className={`px-8 py-3 text-sm font-semibold ${ticket.status === "aberto"
                                                        ? "text-green-500"
                                                        : "text-red-500"
                                                    }`}
                                            >
                                                {ticket.status}
                                            </td>

                                            <td className="px-8 py-3 text-sm text-gray-700 hover:text-blue-600">
                                                {ticket.amount_tickets}
                                            </td>
                                            <td className="px-8 py-3 text-sm text-gray-700 hover:text-blue-600">
                                                {ticket.subject}
                                            </td>
                                            <td className="px-8 py-3 text-sm text-gray-700 hover:text-blue-600">
                                                {ticket.description}
                                            </td>
                                            <td className="px-8 py-3 text-sm text-gray-700 hover:text-blue-600">
                                                {ticket &&
                                                    new Date(
                                                        ticket.created_at
                                                    ).toLocaleDateString()}
                                            </td>

                                            <td className="px-6 py-3 text-sm text-center text-gray-800 tracking-wider">
                                                <div className="flex justify-center gap-2">
                                                    <Link
                                                        href={route(
                                                            "tickets.edit",
                                                            { ticket: ticket.id }
                                                        )}
                                                    >
                                                        <div className="relative group">
                                                            <WarningButton className="text-sm transition-transform duration-200 hover:scale-105" />
                                                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-sm text-gray-700 bg-gray-200 rounded p-1 opacity-0 group-hover:opacity-100">
                                                                Editar
                                                            </span>
                                                        </div>
                                                    </Link>
                                                    <div className="relative group">
                                                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-sm text-gray-700 bg-gray-200 rounded p-1 opacity-0 group-hover:opacity-100">
                                                            Deletar
                                                        </span>
                                                        <ConfirmDelete
                                                            routeName="tickets.destroy"
                                                            id={ticket.id}
                                                            className="transition-transform duration-200 hover:scale-105"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="9"
                                            className="px-8 py-6 text-center text-sm text-gray-700 opacity-80 animate-pulse"
                                        >
                                            Nenhum ticket encontrado.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </motion.div>
        </AuthenticatedLayout>
    );
}
