import ChatInterface from "@/components/ChatInterface";
import { getPB } from "@/lib/pocketbase";
import type { MessageModel } from "@/lib/MessageModel";

export default async function ChatPage({ params }: { params: Promise<{ chat_id: string }> }) {
    const { chat_id } = await params;
    try {
        const pb = await getPB()
        const chat: { id: string, title: string } = await pb.collection("chats").getFirstListItem(`id="${chat_id}"`);
        const messages: MessageModel[] = await pb.collection("messages").getFullList<MessageModel>({
            filter: `chat_id="${chat_id}"`,
            sort: "created",
        });

        return (
            <>
                <ChatInterface chatHistory={messages} chat={chat} />
            </>
        )

    } catch (error) {
        const err = ("Error fetching chat or messages:" + error);
        return <div>Error loading chat {err}</div>;
    }
}