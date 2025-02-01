import React from "react";

export default function DateUpdated( { ticket } ) {

    return (
        <td className="px-6 py-2 text-sm text-gray-700">
            {ticket && new Date(ticket.updated_at).toLocaleDateString()}
        </td>
    );
}
