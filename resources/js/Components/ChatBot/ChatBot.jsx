import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isMinimized, setIsMinimized] = useState(true);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = () => {
        if (input.trim() === "") return;

        const userMessage = {
            text: input,
            sender: "user",
            timestamp: new Date().toLocaleTimeString(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        setIsTyping(true);
        setTimeout(() => {
            const systemMessage = {
                text: "Obrigado por entrar em contato! Como posso ajudar?",
                sender: "system",
                timestamp: new Date().toLocaleTimeString(),
            };

            setMessages((prev) => [...prev, systemMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-50  max-w-xs md:max-w-md">
            <div
                className="bg-green-600 text-white p-3 rounded-t-lg cursor-pointer flex justify-between items-center"
                onClick={() => setIsMinimized(!isMinimized)}
            >
                <FaWhatsapp size={30} />
            </div>

            {!isMinimized && (
                <div className="bg-white border border-gray-300 rounded-b-lg flex flex-col h-80">
                    <div className="flex-1 overflow-y-auto p-3 space-y-2">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${
                                    msg.sender === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                }`}
                            >
                                <div
                                    className={`p-2 rounded-lg max-w-xs text-sm shadow-md ${
                                        msg.sender === "user"
                                            ? "bg-green-500 text-gray-100"
                                            : "bg-gray-100 text-gray-700"
                                    }`}
                                >
                                    <p>{msg.text}</p>
                                    <span className="block text-xs mt-1 text-gray-700">
                                        {msg.timestamp}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="p-2 rounded-lg bg-gray-200 text-gray-700 text-sm shadow-md">
                                    <p>Digitando...</p>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-2 border-t border-gray-200 flex items-center">
                        <input
                            type="text"
                            className="flex-1 border rounded-l-lg p-2"
                            placeholder="Digite sua mensagem..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button
                            className="bg-green-600 text-white p-2 rounded-r-lg flex items-center justify-center"
                            onClick={handleSendMessage}
                        >
                            Enviar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
