import React, { useState } from "react";
import { Head, Link, usePage, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SuccessButton from "@/Components/Button/SuccessButton";
import { AlertMessage } from "@/Components/Delete/AlertMessage/AlertMessage";
import { ConfirmDelete } from "@/Components/Delete/ConfirmDelete";

export default function TicketIndex() {
    const { auth, tickets, openCount, inProgressCount, resolvedCount } =
        usePage().props;
    const { flash } = usePage().props;

    const [editingTicket, setEditingTicket] = useState(null);
    const [editSubject, setEditSubject] = useState("");
    const [editingStatus, setEditingStatus] = useState(null);
    const [editStatus, setEditStatus] = useState("");
    const [editingDescription, setEditingDescription] = useState(null);
    const [editDescription, setEditDescription] = useState("");

    const handleEditSubject = (ticket) => {
        setEditingTicket(ticket.id);
        setEditSubject(ticket.subject);
    };

    const saveEditSubject = (ticketId) => {
        router.put(
            `/tickets/${ticketId}`,
            { subject: editSubject },
            {
                onSuccess: () => {
                    setEditingTicket(null);
                },
            }
        );
    };

    const handleEditStatus = (ticket) => {
        setEditingStatus(ticket.id);
        setEditStatus(ticket.status);
    };

    const saveEditStatus = (ticketId) => {
        router.put(
            `/tickets/${ticketId}`,
            { status: editStatus },
            {
                onSuccess: () => {
                    setEditingStatus(null);
                },
            }
        );
    };

    const handleEditDescription = (ticket) => {
        setEditingDescription(ticket.id);
        setEditDescription(ticket.description);
    };

    const saveEditDescription = (ticketId) => {
        router.put(
            `/tickets/${ticketId}`,
            { description: editDescription },
            {
                onSuccess: () => {
                    setEditingDescription(null);
                },
            }
        );
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-50 leading-tight">
                    Tickets de Suporte
                </h2>
            }
        >
            <Head title="Tickets" />
            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-gray-50 shadow-xl sm:rounded-lg">
                    <div className="flex justify-end items-center m-4">
                        <Link href={route("tickets.create")}>
                            <SuccessButton>Novo Ticket</SuccessButton>
                        </Link>
                    </div>

                    <AlertMessage message={flash} />

                    <div className="px-6 py-4 bg-gray-50">
                        <div className="flex justify-between items-center space-x-6">
                            <div className="w-1/3">
                                <p className="text-xs font-medium text-gray-500">
                                    Tickets em aberto
                                </p>
                                <div className="h-2 bg-gray-50 rounded-full">
                                    <div
                                        className="h-2 bg-blue-500 rounded-full"
                                        style={{
                                            width: `${
                                                (openCount /
                                                    (openCount +
                                                        inProgressCount +
                                                        resolvedCount)) *
                                                100
                                            }%`,
                                        }}
                                    ></div>
                                </div>
                                <p className="mt-1 text-sm font-semibold text-blue-600">
                                    {openCount}
                                </p>
                            </div>
                            <div className="w-1/3">
                                <p className="text-xs font-medium text-gray-700">
                                    Tickets em andamento
                                </p>
                                <div className="h-2 bg-gray-200 rounded-full">
                                    <div
                                        className="h-2 bg-yellow-500 rounded-full"
                                        style={{
                                            width: `${
                                                (inProgressCount /
                                                    (openCount +
                                                        inProgressCount +
                                                        resolvedCount)) *
                                                100
                                            }%`,
                                        }}
                                    ></div>
                                </div>
                                <p className="mt-1 text-sm font-semibold text-yellow-600">
                                    {inProgressCount}
                                </p>
                            </div>
                            <div className="w-1/3">
                                <p className="text-xs font-medium text-gray-700">
                                    Tickets resolvidos
                                </p>
                                <div className="h-2 bg-gray-200 rounded-full">
                                    <div
                                        className="h-2 bg-green-500 rounded-full"
                                        style={{
                                            width: `${
                                                (resolvedCount /
                                                    (openCount +
                                                        inProgressCount +
                                                        resolvedCount)) *
                                                100
                                            }%`,
                                        }}
                                    ></div>
                                </div>
                                <p className="mt-1 text-sm font-semibold text-green-600">
                                    {resolvedCount}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                        Assunto
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                        Descrição
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
                                {tickets.map((ticket) => (
                                    <tr
                                        key={ticket.id}
                                        className="hover:bg-gray-50 transition duration-300 ease-in-out"
                                    >
                                        <td className="px-6 py-2 text-sm text-gray-700">
                                            {editingTicket === ticket.id ? (
                                                <input
                                                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                    value={editSubject}
                                                    onChange={(e) =>
                                                        setEditSubject(
                                                            e.target.value
                                                        )
                                                    }
                                                    onBlur={() =>
                                                        saveEditSubject(
                                                            ticket.id
                                                        )
                                                    }
                                                    autoFocus
                                                />
                                            ) : (
                                                <span
                                                    onClick={() =>
                                                        handleEditSubject(
                                                            ticket
                                                        )
                                                    }
                                                    className="cursor-pointer text-gray-700 hover:text-blue-600 transition duration-200"
                                                >
                                                    {ticket.subject}
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-gray-700">
                                            {editingDescription ===
                                            ticket.id ? (
                                                <textarea
                                                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                    value={editDescription}
                                                    onChange={(e) =>
                                                        setEditDescription(
                                                            e.target.value
                                                        )
                                                    }
                                                    onBlur={() =>
                                                        saveEditDescription(
                                                            ticket.id
                                                        )
                                                    }
                                                    rows={4}
                                                />
                                            ) : (
                                                <span
                                                    onClick={() =>
                                                        handleEditDescription(
                                                            ticket
                                                        )
                                                    }
                                                    className="cursor-pointer text-gray-700 hover:text-blue-600 transition duration-200"
                                                >
                                                    {ticket.description}
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-gray-700">
                                            {editingStatus === ticket.id ? (
                                                <input
                                                    value={editStatus}
                                                    onChange={(e) =>
                                                        setEditStatus(
                                                            e.target.value
                                                        )
                                                    }
                                                    onBlur={() =>
                                                        saveEditStatus(
                                                            ticket.id
                                                        )
                                                    }
                                                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                />
                                            ) : (
                                                <span
                                                    onClick={() =>
                                                        handleEditStatus(ticket)
                                                    }
                                                    className="cursor-pointer text-gray-700 hover:text-blue-600 transition duration-200"
                                                >
                                                    {ticket.status}
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-gray-700">
                                            {new Date(
                                                ticket.created_at
                                            ).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-gray-700">
                                            {new Date(
                                                ticket.updated_at
                                            ).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-gray-700">
                                            <ConfirmDelete
                                                routeName="tickets.destroy"
                                                id={ticket.id}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
