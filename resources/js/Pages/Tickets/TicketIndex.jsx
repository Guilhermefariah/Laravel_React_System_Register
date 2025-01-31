import React, { useState } from "react";
import { Head, usePage, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { AlertMessage } from "@/Components/Delete/AlertMessage/AlertMessage";
import PainelStatus from "@/Components/Status/PainelStatus/PainelStatus";
import TableHead from "@/Components/Table/TableHead/TableHead";
import { ConfirmDelete } from "@/Components/Delete/ConfirmDelete";
import DateUpdated from "@/Components/Date/DateUpdated/DateUpdated";
import DateCreated from "@/Components/Date/DateCreated/DateCreated";
import Chatbot from "@/Components/ChatBot/ChatBot";

export default function TicketIndex() {
    const { auth, tickets, flash } = usePage().props;

    const { data, setData, put, processing } = useForm({
        id: "",
        name: "",
        phone: "",
        email: "",
        status: "",
        subject: "",
        description: "",
    });

    const [editingTicket, setEditingTicket] = useState(null);

    const startEditing = (ticket, field) => {
        setEditingTicket({
            id: ticket.id,
            field,
        });

        setData((prev) => ({
            ...prev,
            id: ticket.id,
            name: ticket.name,
            phone: ticket.phone,
            email: ticket.email,
            status: ticket.status,
            subject: ticket.subject,
            description: ticket.description,
        }));
    };

    const saveEdit = (ticketId) => {
        put(`/tickets/${ticketId}`, {
            preserveScroll: true,
            onSuccess: () => {
                setEditingTicket(null);
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-50 leading-tight">
                    Vendor
                </h2>
            }
        >
            <Head title="Tickets" />
            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-gray-50 shadow-xl sm:rounded-lg">
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
                                            {editingTicket?.id === ticket.id &&
                                            editingTicket?.field === "id" ? (
                                                <input
                                                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                    value={data.id}
                                                    onChange={(e) =>
                                                        setData(
                                                            "id",
                                                            e.target.value
                                                        )
                                                    }
                                                    autoFocus
                                                />
                                            ) : (
                                                ticket.id
                                            )}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-gray-700">
                                            {editingTicket?.id === ticket.id &&
                                            editingTicket?.field === "name" ? (
                                                <input
                                                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                    autoFocus
                                                />
                                            ) : (
                                                ticket.name
                                            )}
                                        </td>

                                        <td className="px-6 py-2 text-sm text-gray-700">
                                            {editingTicket?.id === ticket.id &&
                                            editingTicket?.field === "phone" ? (
                                                <input
                                                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                    value={data.phone}
                                                    onChange={(e) =>
                                                        setData(
                                                            "phone",
                                                            e.target.value
                                                        )
                                                    }
                                                    autoFocus
                                                />
                                            ) : (
                                                ticket.phone
                                            )}
                                        </td>

                                        <td className="px-6 py-2 text-sm text-gray-700">
                                            {editingTicket?.id === ticket.id &&
                                            editingTicket?.field === "email" ? (
                                                <input
                                                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                    value={data.email}
                                                    onChange={(e) =>
                                                        setData(
                                                            "email",
                                                            e.target.value
                                                        )
                                                    }
                                                    autoFocus
                                                />
                                            ) : (
                                                ticket.email
                                            )}
                                        </td>

                                        <td className="px-6 py-2 text-sm text-gray-700">
                                            {editingTicket?.id === ticket.id &&
                                            editingTicket?.field ===
                                                "status" ? (
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
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
                                                        startEditing(
                                                            ticket,
                                                            "status"
                                                        )
                                                    }
                                                    className="cursor-pointer text-gray-700 hover:text-blue-600 transition duration-200"
                                                >
                                                    {ticket.status}
                                                </span>
                                            )}
                                        </td>

                                        <td className="px-6 py-2 text-sm text-gray-700">
                                            {editingTicket?.id === ticket.id &&
                                            editingTicket?.field ===
                                                "subject" ? (
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
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
                                                        startEditing(
                                                            ticket,
                                                            "subject"
                                                        )
                                                    }
                                                    className="cursor-pointer text-gray-700 hover:text-blue-600 transition duration-200"
                                                >
                                                    {ticket.subject}
                                                </span>
                                            )}
                                        </td>

                                        <td className="px-6 py-2 text-sm text-gray-700">
                                            {editingTicket?.id === ticket.id &&
                                            editingTicket?.field ===
                                                "description" ? (
                                                <div className="flex items-center space-x-2">
                                                    <textarea
                                                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
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
                                                        startEditing(
                                                            ticket,
                                                            "description"
                                                        )
                                                    }
                                                    className="cursor-pointer text-gray-700 hover:text-blue-600 transition duration-200"
                                                >
                                                    {ticket.description}
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
            <Chatbot />
        </AuthenticatedLayout>
    );
}
