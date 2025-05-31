"use client"

import { Button } from "./ui/button";

export default function NewChatLink() {
    return (
        <div className="flex">
            <Button onClick={async () => {
                const response = await fetch("/api/chat");
                const data = await response.json();
                const chat_id = data.chat_id; // Assuming the API returns the new chat ID
                window.location.href = `/chat/${chat_id}`; // Redirect to the new chat page
            }} className="bg-foreground text-background flex w-fit p-2 px-4 rounded-xl">
                New Chat
            </Button>
        </div>
    )
}