import React from "react";

export default function TableHead() {
    return (
        <thead className="bg-gray-50">
            <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Nome
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    E-mail
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Telefone
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
            </tr>
        </thead>
    );
}