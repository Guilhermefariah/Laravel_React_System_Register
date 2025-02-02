import React from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ConfirmDelete } from "@/Components/Delete/ConfirmDelete";
import PainelStatus from "@/Components/Status/PainelStatus/PainelStatus";
import { AlertMessage } from "@/Components/Delete/AlertMessage/AlertMessage";
import TableHead from "@/Components/Table/TableHead";

export default function TicketShow({ user, auth, tickets, flash }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-50 leading-tight">
                    Vendedor
                </h2>
            }
        >
            <Head title="Tickets Suporte" />
            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-gray-50 shadow-xl sm:rounded-lg">
                    <AlertMessage message={flash} />

                    <PainelStatus />

                    <div className="relative overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <TableHead />

                            <tbody className="bg-white divide-y divide-gray-200">
                                {tickets.length > 0 ? (
                                    tickets.map((ticket) => (
                                        <tr
                                            key={ticket.id}
                                            className="hover:bg-gray-50 transition duration-300 ease-in-out"
                                        >
                                            <td className="px-6 py-2 text-sm text-gray-700">
                                                {ticket.id}
                                            </td>
                                            <td className="px-6 py-2 text-sm text-gray-700">
                                                {user.name}
                                            </td>
                                            <td className="px-6 py-2 text-sm text-gray-700">
                                                {user.phone}
                                            </td>
                                            <td className="px-6 py-2 text-sm text-gray-700">
                                                {user.email}
                                            </td>
                                            <td className="px-6 py-2 text-sm text-gray-700">
                                                {ticket.status}
                                            </td>
                                            <td className="px-6 py-2 text-sm text-gray-700">
                                                {ticket.subject}
                                            </td>
                                            <td className="px-6 py-2 text-sm text-gray-700">
                                                {ticket.description}
                                            </td>
                                            <td className="px-6 py-2 text-sm text-gray-700">
                                                {ticket &&
                                                    new Date(
                                                        ticket.created_at
                                                    ).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-2 text-sm text-gray-700">
                                                <ConfirmDelete
                                                    routeName="tickets.destroy"
                                                    id={ticket.id}
                                                />
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="9"
                                            className="px-6 py-4 text-center text-sm text-gray-700"
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
