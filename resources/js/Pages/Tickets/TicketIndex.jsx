import React, { useState } from "react";
import { Head, Link, usePage, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SuccessButton from "@/Components/Button/SuccessButton";
import { AlertMessage } from "@/Components/Delete/AlertMessage/AlertMessage";
import { ConfirmDelete } from "@/Components/Delete/ConfirmDelete";
import PainelStatus from "@/Components/Status/PainelStatus/PainelStatus";
import TableHead from "@/Components/Table/TableHead/TableHead";
import DateUpdated from "@/Components/Date/DateUpdated/DateUpdated";
import DateCreated from "@/Components/Date/DateCreated/DateCreated";

export default function TicketIndex() {
    const { auth, tickets } =
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
                                        {/* confirmar ou cancelar */}
                                        <td className="px-6 py-2 text-sm text-gray-700">
                                            {editingTicket === ticket.id ? (
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                        value={editSubject}
                                                        onChange={(e) =>
                                                            setEditSubject(
                                                                e.target.value
                                                            )
                                                        }
                                                        autoFocus
                                                    />
                                                    <button
                                                        onClick={() =>
                                                            saveEditSubject(
                                                                ticket.id
                                                            )
                                                        }
                                                        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200"
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
                                                <div className="flex flex-col space-y-2">
                                                    <textarea
                                                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                        value={editDescription}
                                                        onChange={(e) =>
                                                            setEditDescription(
                                                                e.target.value
                                                            )
                                                        }
                                                        rows={4}
                                                    />
                                                    <div className="flex space-x-2">
                                                        <button
                                                            onClick={() =>
                                                                saveEditDescription(
                                                                    ticket.id
                                                                )
                                                            }
                                                            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200"
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
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        value={editStatus}
                                                        onChange={(e) =>
                                                            setEditStatus(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                    />
                                                    <button
                                                        onClick={() =>
                                                            saveEditStatus(
                                                                ticket.id
                                                            )
                                                        }
                                                        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200"
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
                                                        handleEditStatus(ticket)
                                                    }
                                                    className="cursor-pointer text-gray-700 hover:text-blue-600 transition duration-200"
                                                >
                                                    {ticket.status}
                                                </span>
                                            )}
                                        </td>                       
                                        <DateCreated ticket={ticket}/>
                                        
                                        <DateUpdated ticket={ticket}/>

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
