import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function TicketEdit({ ticket }) {
    const { data, setData, put, processing } = useForm({
        id: ticket.id,
        name: ticket.name,
        phone: ticket.phone,
        email: ticket.email,
        status: ticket.status,
        subject: ticket.subject,
        description: ticket.description,
    });

    const [editingField, setEditingField] = useState(null);

    const startEditing = (field) => {
        setEditingField(field);
    };

    const saveEdit = () => {
        put(`/tickets/${ticket.id}`, {
            preserveScroll: true,
            onSuccess: () => {
                setEditingField(null);
            },
        });
    };

    return (
        <>
            {editingField ? (
                <div className="flex items-center space-x-2">
                    <input
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        value={data[editingField]}
                        onChange={(e) => setData(editingField, e.target.value)}
                        autoFocus
                    />
                    <button
                        onClick={saveEdit}
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200"
                        disabled={processing}
                    >
                        Salvar
                    </button>
                    <button
                        onClick={() => setEditingField(null)}
                        className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200"
                    >
                        Cancelar
                    </button>
                </div>
            ) : (
                <span
                    onClick={() => startEditing("name")}
                    className="cursor-pointer text-gray-700 hover:text-blue-600 transition duration-200"
                >
                    {ticket.name}
                </span>
            )}
        </>
    );
}
