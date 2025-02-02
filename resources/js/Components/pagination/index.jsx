import { motion } from "framer-motion";
import React from "react";
import { Link } from "@inertiajs/react";

export const Pagination = ({ links, currentPage }) => {
    return (
        <div className="flex justify-center mt-8 mb-8 space-x-4">
            {links
                .filter((link, index) => {
                    const isSpecial = ["&laquo; Previous", "Next &raquo;"].includes(link.label);
                    const isNearCurrent = Math.abs(index - currentPage) <= 1;
                    return link.active || isSpecial || isNearCurrent;
                })
                .map((link, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="shadow-md rounded-lg"
                    >
                        <Link
                            href={link.url || "#"}
                            as="button"
                            className={`px-6 py-1 text-lg font-medium border transition-all rounded-lg ${
                                link.active
                                    ? "bg-gray-300 text-gray-50 cursor-default"
                                    : "bg-blue-600 text-gray-50 hover:bg-blue-800"
                            } ${!link.url && "cursor-not-allowed opacity-50"}`}
                            onClick={(e) => !link.url && e.preventDefault()}
                        >
                            {link.label === "&laquo; Previous"
                                ? "〈"
                                : link.label === "Next &raquo;"
                                ? "〉"
                                : link.label}
                        </Link>
                    </motion.div>
                ))}
        </div>
    );
};