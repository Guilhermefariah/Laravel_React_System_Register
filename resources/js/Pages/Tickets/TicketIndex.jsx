import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SuccessButton from "@/Components/Button/SuccessButton";
import { AlertMessage } from "@/Components/Delete/AlertMessage/AlertMessage";

export default function TicketIndex() {
    const { auth, tickets, openCount, inProgressCount, resolvedCount } = usePage().props;
    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-50 leading-tight">
                    Tickets de Suporte
                </h2>
            }
        >
            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg">
                    <div className="flex justify-end items-center m-4">
                        <Link href={route("tickets.create")}>
                            <SuccessButton className="text-sm">
                                Criar Novo Ticket
                            </SuccessButton>
                        </Link>
                    </div>

                    <AlertMessage message={flash} />

                    <div className="px-4 py-2 bg-gray-100 border-b text-sm text-gray-700">
                        <p>Tickets em aberto: {openCount}</p>
                        <p>Tickets em andamento: {inProgressCount}</p>
                        <p>Tickets resolvidos: {resolvedCount}</p>
                    </div>

                    <div className="relative overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                        Assunto
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                        Data de Criação
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                        Última Atualização
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">
                                {tickets && tickets.length > 0 ? (
                                    tickets.map((ticket) => (
                                        <tr
                                            key={ticket.id}
                                            className="hover:bg-gray-50 transition duration-200"
                                        >
                                            <td className="px-6 py-2 text-sm text-gray-800">
                                                {ticket.subject}
                                            </td>
                                            <td className="px-6 py-2 text-sm">
                                                <span
                                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${
                                                        ticket.status === "Aberto"
                                                            ? "yellow-100 text-yellow-800"
                                                            : ticket.status === "Em andamento"
                                                            ? "blue-100 text-blue-800"
                                                            : "green-100 text-green-800"
                                                    }`}
                                                >
                                                    {ticket.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-2 text-sm text-gray-800">
                                                {new Date(ticket.created_at).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-2 text-sm text-gray-800">
                                                {new Date(ticket.updated_at).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={4}
                                            className="px-6 py-2 text-sm text-center text-gray-800"
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
