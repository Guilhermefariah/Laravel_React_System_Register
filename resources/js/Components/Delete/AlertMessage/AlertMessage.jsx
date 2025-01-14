import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

export const AlertMessage = ({ message }) => {
    const isSuccess = message.success ? true : false;
    const isError = message.error ? true : false;

    if (!isSuccess && !isError) return null;

    const alertStyles = isSuccess
        ? {
              bg: "bg-green-500 dark:bg-green-800",
              text: "text-green-800 dark:text-green-500",
              icon: <FiCheckCircle className="w-5 h-5" />,
              content: message.success,
          }
        : {
              bg: "bg-red-500 dark:bg-red-800",
              text: "text-red-800 dark:text-red-500",
              icon: <FiXCircle className="w-5 h-5" />,
              content: message.error,
          };

    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.reload();
        }, 3000);

        return () => clearTimeout(timer);
    }, [message]);

    return (
        <motion.div
            className={`p-4 m-4 text-sm rounded-lg max-w-sm ${alertStyles.text} ${alertStyles.bg} flex items-center space-x-4 shadow-lg`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
        >
            <div className="flex-shrink-0">{alertStyles.icon}</div>
            <div>{alertStyles.content}</div>
        </motion.div>
    );
};
