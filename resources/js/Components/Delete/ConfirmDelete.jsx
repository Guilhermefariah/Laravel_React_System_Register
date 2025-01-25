import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import DangerButton from "@/Components/Button/DangerButton";
import { ModalConfirm } from "./ModalConfirm/ModalConfirm";
import { FaRegTrashAlt } from "react-icons/fa";

export const ConfirmDelete = ({ id, routeName }) => {
    const { delete: destroy } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = () => {
        destroy(route(routeName, id));
        setIsModalOpen(false);
    };

    return (
        <>
            <DangerButton
                className="ms-1 text-sm"
                onClick={() => setIsModalOpen(true)}
            >
                <FaRegTrashAlt  className="size-6" />
            </DangerButton>
            <ModalConfirm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleDelete}
                message="Você realmente deseja deletar?"
            ></ModalConfirm>
        </>
    );
};
