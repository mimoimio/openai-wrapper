"use client"

import MarkdownViewer from "@/components/MarkdownViewer";
import { useEffect, useState } from "react";

const getMessage = async (setMessage: (msg: string) => void, setLoading: (loading: boolean) => void) => {
    const res = await fetch("/api/response");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    console.log(data);
    setMessage(data.message);
    setLoading(false);
};


export default function BotMessage() {
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        getMessage(setMessage, setLoading)
    }, [])
    return (
        <div className="flex justify-start">
            <div className="flex flex-col w-full max-w-xl bg-background border-2 rounded-lg p-4">
                <h2 className="font-bold">bot</h2>
                {loading ?
                    <span className="animate-ping flex w-fit">…</span>
                    :
                    <article className="prose dark:prose-invert ">
                        <MarkdownViewer source={message} />
                    </article>
                }
                {/* <p>Texts from bot <span className=" animate-pulse">⬛</span></p> */}
            </div>
        </div>
    )
}