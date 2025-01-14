import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import DangerButton from "@/Components/Button/DangerButton";
import { ModalConfirm } from "./ModalConfirm/ModalConfirm";

export const ConfirmDelete = ({ id, routeName }) => {
    const { delete: destroy } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = () => {
        destroy(route(routeName, id));
        setIsModalOpen(false);
    }

    return (
        <>
            <DangerButton
                className="ms-1 text-sm"
                onClick={() => setIsModalOpen(true)}
            >
                Delete
            </DangerButton>
            <ModalConfirm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleDelete}
                message="Are you sure you want to delete this item?"
            ></ModalConfirm>
        </>
    );
}
