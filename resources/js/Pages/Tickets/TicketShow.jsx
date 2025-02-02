import React from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ConfirmDelete } from "@/Components/Delete/ConfirmDelete";
import { AlertMessage } from "@/Components/Delete/AlertMessage/AlertMessage";
import TableHead from "@/Components/Table/TableHead";
import WarningButton from "@/Components/Button/WarningButton";

export default function TicketShow({ user, auth, tickets, flash }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-50 leading-tight animate-fadeIn">
                    Vendedor
                </h2>
            }
        >
            <Head title="Tickets Suporte" />
            <div className="py-4 max-w-7xl mx-auto sm:px-8 lg:px-8 animate-fadeIn">
                <div className="overflow-hidden bg-gray-50 shadow-xl sm:rounded-lg transition-shadow duration-300 hover:shadow-2xl">
                    <AlertMessage message={flash} />
                    <div className="relative overflow-x-auto sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <TableHead />
                            <tbody className="bg-white divide-y divide-gray-200">
                                {tickets.length > 0 ? (
                                    tickets.map((ticket) => (
                                        <tr
                                            key={ticket.id}
                                            className="hover:bg-gray-100 transition-all duration-300 ease-in-out"
                                        >
                                            <td className="px-8 py-3 text-sm text-gray-700">
                                                {ticket.id}
                                            </td>
                                            <td className="px-8 py-3 text-sm text-gray-700">
                                                {user.name}
                                            </td>
                                            <td className="px-8 py-3 text-sm text-gray-700">
                                                {user.phone}
                                            </td>
                                            <td className="px-8 py-3 text-sm text-gray-700">
                                                {user.email}
                                            </td>
                                            <td className={`px-8 py-3 text-sm font-semibold ${ticket.status === 'aberto' ? 'text-green-500' : 'text-red-500'}`}>
                                                {ticket.status}
                                            </td>

                                            <td className="px-8 py-3 text-sm text-gray-700">
                                                {ticket.amount_tickets}
                                            </td>
                                            <td className="px-8 py-3 text-sm text-gray-700">
                                                {ticket.subject}
                                            </td>
                                            <td className="px-8 py-3 text-sm text-gray-700">
                                                {ticket.description}
                                            </td>
                                            <td className="px-8 py-3 text-sm text-gray-700">
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
                                        </tr>
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
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
