import React from "react";
import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function TicketCreate({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        subject: "",
        description: "",
        status: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("tickets.store"));
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
            <Head title="Criar Ticket" />

            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white shadow-lg rounded-lg">
                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Assunto
                            </label>
                            <input
                                id="subject"
                                type="text"
                                value={data.subject}
                                placeholder="Assunto do Ticket"
                                onChange={(e) =>
                                    setData("subject", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                required
                            />
                            {errors.subject && (
                                <p className="text-red-500 text-sm">
                                    {errors.subject}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Descrição
                            </label>
                            <textarea
                                id="description"
                                value={data.description}
                                placeholder="Descrição do Ticket"
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                rows="4"
                                required
                            />
                            {errors.description && (
                                <p className="text-red-500 text-sm">
                                    {errors.description}
                                </p>
                            )}
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            >
                                Criar Ticket
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
