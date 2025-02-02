import React, { useState, useEffect, useRef } from "react";

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
                className="bg-gray-50 p-3 cursor-pointer flex justify-between items-center"
                onClick={() => setIsMinimized(!isMinimized)}
            >
                {isMinimized ? <h1 className="text-2xl text-left font-bold text-gray-700">Olá! Bem-vindo ao ChatBot {" "}</h1> : null}
                <img src="https://img.freepik.com/vetores-gratis/arte-vetorial-de-robos-em-estilo-de-desenho-animado_78370-4103.jpg?t=st=1738527824~exp=1738531424~hmac=60ed9c009452eec3e1b5e28aabc3765c804e21a22fe3ad009f4c2d462bc11b61&w=740" alt="robot" className="w-16 h-16" />
            </div>

            {!isMinimized && (
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 border border-gray-300 flex flex-col h-80">
                    <div className="flex-1 overflow-y-auto p-3 space-y-2">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.sender === "user"
                                    ? "justify-end"
                                    : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`p-2 rounded-lg max-w-xs text-sm shadow-md ${msg.sender === "user"
                                        ? "bg-green-500 text-gray-50"
                                        : "bg-gray-700 text-gray-50"
                                        }`}
                                >
                                    <p>{msg.text}</p>
                                    <span className="block text-xs mt-1 text-gray-50">
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
                            className="bg-gray-600 text-white p-2 rounded-r-lg flex items-center justify-center"
                            onClick={handleSendMessage}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-6 h-6"
                            >
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
