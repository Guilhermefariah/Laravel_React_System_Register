import React from "react";
import { Link, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function TicketIndex() {
    const { auth, tickets, openCount, inProgressCount, resolvedCount } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-bold text-2xl text-gray-800 dark:text-white leading-tight">
                    Tickets de Suporte
                </h2>
            }
        >
            <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
                <div className="flex justify-between mb-6">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                        <p>Tickets em aberto: {openCount}</p>
                    </div>
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                        <p>Tickets em andamento: {inProgressCount}</p>
                    </div>
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                        <p>Tickets resolvidos: {resolvedCount}</p>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 rounded-md">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    Assunto
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    Data de Criação
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    Atualização
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tickets && tickets.length > 0 ? (
                                tickets.map((ticket) => (
                                    <tr
                                        key={ticket.id}
                                        className="hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                            {ticket.subject}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`bg-${
                                                    ticket.status === 'Aberto'
                                                        ? 'yellow'
                                                        : ticket.status === 'Em andamento'
                                                        ? 'blue'
                                                        : 'green'
                                                }-100 text-${
                                                    ticket.status === 'Aberto'
                                                        ? 'yellow'
                                                        : ticket.status === 'Em andamento'
                                                        ? 'blue'
                                                        : 'green'
                                                }-800 px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}>
                                                {ticket.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                                            {new Date(ticket.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                                            {new Date(ticket.updated_at).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={4}
                                        className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-300"
                                    >
                                        Nenhum ticket encontrado.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
