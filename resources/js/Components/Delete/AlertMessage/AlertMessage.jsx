import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AlertMessage = ({ message }) => {
    const isSuccess = message.success ? true : false;
    const isError = message.error ? true : false;

    if (!isSuccess && !isError) return null;

    const alertStyles = isSuccess
        ? {
              bg: "bg-green-600",
              text: "text-gray-50",
              content: message.success,
          }
        : {
              bg: "bg-red-600",
              text: "text-red-50",
              content: message.error,
          };

    const [progress, setProgress] = useState(100);

    useEffect(() => {
        const duration = 500;
        const interval = 50;
        const step = (interval / duration) * 100;

        const timer = setInterval(() => {
            setProgress((prev) => Math.max(0, prev - step));
        }, interval);

        const timeout = setTimeout(() => {
            window.location.reload();
        }, duration);

        return () => {
            clearInterval(timer);
            clearTimeout(timeout);
        };
    }, [message]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-8 right-3 transform -translate-x-1/2 px-4 py-2 rounded-md shadow-lg ${alertStyles.bg} ${alertStyles.text}`}
            >
                {alertStyles.content}
                <div className="w-full h-1 bg-gray-200 mt-2 rounded overflow-hidden">
                    <motion.div
                        initial={{ width: "100%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0 }}
                        className={`h-full ${
                            isSuccess ? "bg-gray-400" : "bg-red-700"
                        }`}
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
