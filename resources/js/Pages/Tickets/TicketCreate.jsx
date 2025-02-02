import React from "react";
import { Head, usePage } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { AlertMessage } from "@/Components/Delete/AlertMessage/AlertMessage";
import { motion } from "framer-motion";
import GuestLayout from "@/Layouts/GuestLayout";

export default function TicketCreate() {
    const { flash, users } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        email: "",
        status: "",
        amount_tickets: "",
        subject: "",
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("tickets.store"));
    };

    return (
        <GuestLayout>
            <Head title="Tickets Suporte" />

            <AlertMessage message={flash} />

            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-6 py-8 sm:p-8 bg-white rounded-lg shadow-md border-none border-gray-200">
                    <h1 className="text-4xl font-extrabold text-center text-blue-600 leading-tight">
                        Suporte para Vendedores
                    </h1>
                    <p className="mt-4 text-lg text-center text-gray-500">
                        Selecione um vendedor e envie um ticket
                        <br />
                        Acompanhe e resolva todos os casos com facilidade
                    </p>
                </div>

                <motion.div
                    className="bg-white shadow-lg rounded-lg"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <label
                                htmlFor="user_email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Selecione um Vendedor
                            </label>
                            <select
                                id="user_email"
                                value={data.email}
                                placeholder="E-mail do solicitante"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                required
                            >
                                <option value="" disabled>
                                    Selecione um Vendedor
                                </option>
                                {users.map((user) => (
                                    <option key={user.id} value={user.email}>
                                        {user.email}
                                    </option>
                                ))}
                            </select>
                            {errors.email && (
                                <p className="text-red-500 text-sm">
                                    {errors.email}
                                </p>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <label
                                htmlFor="status"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Status
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="status"
                                    value="Ativo"
                                    checked={data.status === "Ativo"}
                                    onChange={(e) => setData("status", e.target.value)}
                                    className="mr-2"
                                />
                                Ativo
                            </label>

                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="status"
                                    value="Inativo"
                                    checked={data.status === "Inativo"}
                                    onChange={(e) => setData("status", e.target.value)}
                                    className="mr-2"
                                />
                                Inativo
                            </label>

                            {errors.status && (
                                <p className="text-red-500 text-sm">
                                    {errors.status}
                                </p>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >                            <label
                            htmlFor="amount_tickets"
                            className="block text-sm font-medium text-gray-700"
                        >
                                Quantidade de Tickets
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="amount_tickets"
                                    value="Aberto"
                                    checked={data.amount_tickets === "Aberto"}
                                    onChange={(e) => setData("amount_tickets", e.target.value)}
                                    className="mr-2"
                                />
                                Aberto
                            </label>

                            <label htmlFor="flex items-center">
                                <input
                                    type="radio"
                                    name="amount_tickets"
                                    value="Em andamento"
                                    checked={data.amount_tickets === "Em andamento"}
                                    onChange={(e) =>
                                        setData("amount_tickets", e.target.value)
                                    }
                                    className="mr-2"
                                />
                                Em andamento
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="amount_tickets"
                                    value="Resolvido"
                                    checked={data.amount_tickets === "Resolvido"}
                                    onChange={(e) =>
                                        setData("amount_tickets", e.target.value)
                                    }
                                    className="mr-2"
                                />
                                Resolvido
                            </label>
                            {errors.amount_tickets && (
                                <p className="text-red-500 text-sm">
                                    {errors.amount_tickets}
                                </p>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
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
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
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
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                >
                                    Criar Ticket
                                </button>
                            </div>
                        </motion.div>
                    </form>
                </motion.div>
            </div>
        </GuestLayout>
    );
}
