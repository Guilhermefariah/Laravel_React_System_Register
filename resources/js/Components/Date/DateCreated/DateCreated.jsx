import React from "react";

export default function DateCreated({ ticket }) {
    return (
        <td className="px-6 py-2 text-sm text-gray-700">
            {new Date(ticket.created_at).toLocaleDateString()}
        </td>
    );
}
