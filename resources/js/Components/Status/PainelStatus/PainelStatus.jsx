import { usePage } from "@inertiajs/react";
import React from "react";

export default function PainelStatus() {
    const { openCount, inProgressCount, resolvedCount } = usePage().props;
    return (
        <div className="px-6 py-4 bg-gray-50">
            <div className="flex justify-between items-center space-x-6">
                <div className="w-1/3">
                    <p className="text-xs font-medium text-gray-500">
                        Tickets em aberto
                    </p>
                    <div className="h-2 bg-gray-200 rounded-full">
                        <div
                            className="h-2 bg-blue-500 rounded-full"
                            style={{
                                width: `${
                                    (openCount /
                                        (openCount +
                                            inProgressCount +
                                            resolvedCount)) *
                                    100
                                }%`,
                            }}
                        ></div>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-blue-600">
                        {openCount}
                    </p>
                </div>
                <div className="w-1/3">
                    <p className="text-xs font-medium text-gray-700">
                        Tickets em andamento
                    </p>
                    <div className="h-2 bg-gray-200 rounded-full">
                        <div
                            className="h-2 bg-yellow-500 rounded-full"
                            style={{
                                width: `${
                                    (inProgressCount /
                                        (openCount +
                                            inProgressCount +
                                            resolvedCount)) *
                                    100
                                }%`,
                            }}
                        ></div>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-yellow-600">
                        {inProgressCount}
                    </p>
                </div>
                <div className="w-1/3">
                    <p className="text-xs font-medium text-gray-700">
                        Tickets resolvidos
                    </p>
                    <div className="h-2 bg-gray-200 rounded-full">
                        <div
                            className="h-2 bg-green-500 rounded-full"
                            style={{
                                width: `${
                                    (resolvedCount /
                                        (openCount +
                                            inProgressCount +
                                            resolvedCount)) *
                                    100
                                }%`,
                            }}
                        ></div>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-green-600">
                        {resolvedCount}
                    </p>
                </div>
            </div>
        </div>
    );
}
