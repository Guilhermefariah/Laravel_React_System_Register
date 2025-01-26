import React, { useState } from "react";
import { Head, Link, usePage, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SuccessButton from "@/Components/Button/SuccessButton";
import { AlertMessage } from "@/Components/Delete/AlertMessage/AlertMessage";
import PainelStatus from "@/Components/Status/PainelStatus/PainelStatus";
import TableHead from "@/Components/Table/TableHead/TableHead";
import { ConfirmDelete } from "@/Components/Delete/ConfirmDelete";
import DateUpdated from "@/Components/Date/DateUpdated/DateUpdated";
import DateCreated from "@/Components/Date/DateCreated/DateCreated";

export default function TicketIndex() {
    const { auth, tickets } = usePage().props;
    const { flash } = usePage().props;

    const { data, setData, put, errors, processing } = useForm({
        subject: "",
        description: "",
        status: "",
    });

    const [editingTicket, setEditingTicket] = useState(null);
    const [editingDescription, setEditingDescription] = useState(false);
    const [editingStatus, setEditingStatus] = useState(false);

    const startEditing = (ticket) => {
        setEditingTicket(ticket.id);
        setEditingDescription(ticket.id);
        setEditingStatus(ticket.id);

        setData({
            subject: ticket.subject,
            description: ticket.description,
            status: ticket.status,
        });
    };

    const saveEdit = (ticketId) => {
        put(`/tickets/${ticketId}`, {
            preserveScroll: true,
            onSuccess: () => {
                setEditingTicket(null);
                setEditingDescription(null);
                setEditingStatus(null);
            },
        });
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

                    <PainelStatus />

                    <div className="relative overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <TableHead />

                            <tbody className="bg-white divide-y divide-gray-200">
                                {tickets.map((ticket) => (
                                    <tr
                                        key={ticket.id}
                                        className="hover:bg-gray-50 transition duration-300 ease-in-out"
                                    >
                                        <td className="px-6 py-2 text-sm text-gray-700">
                                            {editingTicket === ticket.id ? (
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                        value={data.subject}
                                                        onChange={(e) =>
                                                            setData(
                                                                "subject",
                                                                e.target.value
                                                            )
                                                        }
                                                        autoFocus
                                                    />
                                                    <button
                                                        onClick={() =>
                                                            saveEdit(ticket.id)
                                                        }
                                                        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200"
                                                        disabled={processing}
                                                    >
                                                        Salvar
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setEditingTicket(
                                                                null
                                                            )
                                                        }
                                                        className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200"
                                                    >
                                                        Cancelar
                                                    </button>
                                                </div>
                                            ) : (
                                                <span
                                                    onClick={() =>
                                                        startEditing(ticket)
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
                                                <div className="flex flex-col space-y-2">
                                                    <textarea
                                                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                        value={data.description}
                                                        onChange={(e) =>
                                                            setData(
                                                                "description",
                                                                e.target.value
                                                            )
                                                        }
                                                        rows={4}
                                                        autoFocus
                                                    />
                                                    <div className="flex space-x-2">
                                                        <button
                                                            onClick={() =>
                                                                saveEdit(
                                                                    ticket.id
                                                                )
                                                            }
                                                            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200"
                                                            disabled={
                                                                processing
                                                            }
                                                        >
                                                            Salvar
                                                        </button>
                                                        <button
                                                            onClick={() =>
                                                                setEditingDescription(
                                                                    null
                                                                )
                                                            }
                                                            className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200"
                                                        >
                                                            Cancelar
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <span
                                                    onClick={() =>
                                                        startEditing(ticket)
                                                    }
                                                    className="cursor-pointer text-gray-700 hover:text-blue-600 transition duration-200"
                                                >
                                                    {ticket.description}
                                                </span>
                                            )}
                                        </td>

                                        <td className="px-6 py-2 text-sm text-gray-700">
                                            {editingStatus === ticket.id ? (
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                        value={data.status}
                                                        onChange={(e) =>
                                                            setData(
                                                                "status",
                                                                e.target.value
                                                            )
                                                        }
                                                        autoFocus
                                                    />
                                                    <button
                                                        onClick={() =>
                                                            saveEdit(ticket.id)
                                                        }
                                                        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200"
                                                        disabled={processing}
                                                    >
                                                        Salvar
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setEditingStatus(
                                                                null
                                                            )
                                                        }
                                                        className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200"
                                                    >
                                                        Cancelar
                                                    </button>
                                                </div>
                                            ) : (
                                                <span
                                                    onClick={() =>
                                                        startEditing(ticket)
                                                    }
                                                    className="cursor-pointer text-gray-700 hover:text-blue-600 transition duration-200"
                                                >
                                                    {ticket.status}
                                                </span>
                                            )}
                                        </td>
                                        <DateCreated ticket={ticket} />

                                        <DateUpdated ticket={ticket} />

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
