import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

export const ModalConfirm = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md w-11/12 sm:w-1/3 md:w-1/4">
                <div className="flex justify-center mb-4">
                    <FaRegTrashAlt className="text-4xl text-red-600" />
                </div>
                <p className="mb-4 text-gray-700 text-lg text-center">
                    {message}
                </p>
                <div className="flex justify-center space-x-4">
                    <button
                        className="px-4 py-2 bg-gray-100 text-black rounded hover:bg-gray-400"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        onClick={onConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}
