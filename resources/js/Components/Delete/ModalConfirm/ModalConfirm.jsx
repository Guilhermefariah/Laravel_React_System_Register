import React from 'react';

export const ModalConfirm = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md w-1/3">
                <p className="mb-4 text-gray-50 text-lg">{message}</p>
                <div className="flex justify-end space-x-4">
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


