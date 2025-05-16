"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";

export default function ChatInput() {
    const getMessage = async (inputValue: string, setMessage: (msg: string) => void, setLoading: (loading: boolean) => void) => {
        setLoading(true);
        const res = await fetch("/api/response",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages:
                        [{ role: "user", content: inputValue }],
                })

            }
            // "briefly compare 2 philosophy of nextjs and laravel side by side. Then write a line of code that you're most likely to find when working on each." }
        );
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        console.log(data);
        setMessage(data.message);
        setLoading(false);
    };
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <div className="border h-full w-full overflow-y-auto">
                <div className="max-w-2xl mx-auto flex flex-col gap-4 justify-start p-4 ">
                    <h1 className="text-4xl">Content</h1>
                    <UserMessage />
                    <BotMessage message={message} loading={loading} />
                </div>
            </div>
            <div className="mx-auto w-full max-w-2xl h-fit p-4 flex ">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={loading ? "Loading..." : "Type your message here..."}
                    className={"w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:animate-pulse disabled:bg-gray-200"}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            // Call the function to send the message
                            getMessage(inputValue, setMessage, setLoading);
                            setInputValue(""); // Clear the input field after sending
                        }
                    }}
                    disabled={loading}
                />
                <Button className="ml-2">Send</Button>
            </div>
        </>
    )
}