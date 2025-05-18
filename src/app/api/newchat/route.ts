import { getPB } from "@/lib/pocketbase";
import { redirect } from "next/navigation";
export async function GET(request: Request) {
    const pb = await getPB();
    const chat = { title: "New Chat" };
    const chat_record = await pb.collection("chats").create(chat);
    const first_message_record = await pb.collection("messages").create({ id: null, chat_id: chat_record.id, role: "system", content: "You are a helpful assistant. You are to console the user with their worries." });
    console.log(first_message_record);
    const chat_id = chat_record.id;
    return redirect(`/chat/${chat_id}`);
}