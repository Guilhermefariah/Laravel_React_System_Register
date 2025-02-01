import React from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { AlertMessage } from "@/Components/Delete/AlertMessage/AlertMessage";
import PainelStatus from "@/Components/Status/PainelStatus/PainelStatus";
import DateUpdated from "@/Components/Date/DateUpdated/DateUpdated";
import DateCreated from "@/Components/Date/DateCreated/DateCreated";
import { ConfirmDelete } from "@/Components/Delete/ConfirmDelete";
import TicketEdit from "./TicketEdit";

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
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                        ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                        Nome
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                        Telefone
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                        E-mail
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                        Assunto
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                        Descrição
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                        Data de Criação
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                        Última Atualização
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                        Ações
                                    </th>
                                </tr>
                            </thead>

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
                                            <DateCreated tickets={ticket} />
                                            <DateUpdated tickets={ticket} />
                                            <td className="px-6 py-2 text-sm text-gray-700">
                                                <ConfirmDelete
                                                    routeName="tickets.destroy"
                                                    id={ticket.id}
                                                />
                                            </td>
                                            <td>
                                                <TicketEdit ticket={ticket} />
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
