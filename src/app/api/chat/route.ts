import { getPB } from "@/lib/pocketbase";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    console.log(searchParams);
    const pb = await getPB();
    const chat = { title: "New Chat" };
    const chat_record = await pb.collection("chats").create(chat);
    const first_message_record = await pb.collection("messages").create({
        id: null,
        chat_id: chat_record.id,
        role: "system",
        content: "You are a character called jane doe. The user is your boyfriend and is talking to you right now"
    });
    console.log(first_message_record);
    const chat_id = chat_record.id;
    return new Response(JSON.stringify({ chat_id }));
}

export async function PUT(request: Request) {
    const chat = await request.json();
    const pb = await getPB();
    const chat_record = await pb.collection("chats").update(chat.id, { title: chat.title });
    return new Response(JSON.stringify(chat_record))
}

export async function DELETE(request: Request) {
    const data = await request.json();
    const chat_id = data.chat_id
    const pb = await getPB();
    pb.collection("chats").delete(chat_id);
    return new Response(JSON.stringify({ chat_id }))
}