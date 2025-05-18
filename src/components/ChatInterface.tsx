"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import type { MessageModel } from "@/lib/MessageModel";

export default function ChatInterface({ chatHistory, chat }: { chatHistory: MessageModel[], chat: { id: string, title: string } }) {
    const [loading, setLoading] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<MessageModel[]>(chatHistory);
    // TODO: change 
    const getMessage = async (inputValue: string) => {
        setLoading(true);
        const newBotMessage: MessageModel = { id: null, chat_id: chat.id, role: "assistant", content: "" }
        const newMessages: MessageModel[] = [...messages, { id: null, chat_id: chat.id, role: "user", content: inputValue }];

        setMessages(newMessages);
        setMessages(prev => [...prev, newBotMessage]);
        const res = await fetch("/api/response",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chat.id,
                    user_message: inputValue,
                })
            }
        );
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        newBotMessage.content = data.message;
        setLoading(false);
    };

    const handleInput = () => {
        getMessage(inputValue);
        setInputValue("");
    }
    return (
        <>
            <div className="border h-full w-full overflow-y-auto">
                <div className="max-w-2xl mx-auto flex flex-col gap-4 justify-start p-4 ">
                    {
                        messages.map(({ role, content }, index) => {
                            return (
                                role !== "system" &&
                                <div key={index} className="flex flex-col gap-2">
                                    {role === "user" ?
                                        <UserMessage message={content} /> :
                                        <BotMessage message={content} loading={loading && index === (messages.length - 1)} />
                                    }
                                </div>
                            )
                        })
                    }


                </div>
            </div>
            <div className="mx-auto w-full max-w-2xl h-fit p-4 flex ">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={loading ? "Loading..." : "Type your message here..."}
                    className={"w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:animate-pulse disabled:bg-gray-200"}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleInput(); } }}
                    disabled={loading}
                />
                <Button onClick={() => { if (!inputValue.trim()) return; handleInput() }} disabled={loading} className="ml-2 disabled:bg-ghost">Send</Button>
            </div >
        </>
    )
}