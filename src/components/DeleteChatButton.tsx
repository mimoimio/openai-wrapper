"use client"

import { Button } from "./ui/button";

export default function DeleteChatButton({ chat_id, onDelete }: { chat_id: string, onDelete(chat_id: string): void }) {
    return (
        <Button onClick={async (e) => {
            e.stopPropagation();
            const response = await fetch("/api/chat",
                {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: chat_id
                    })
                }
            );
            if (response.ok) {
                onDelete(chat_id)
                console.log(response)
            }
        }} className="bg-destructive text-white flex w-fit p-2 px-4 rounded-xl hover:cursor-pointer">
            Delete Chat
        </Button>
    )
}