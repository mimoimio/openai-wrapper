import { MessageModel } from "@/lib/MessageModel";
import { getPB } from "@/lib/pocketbase";
import OpenAI from "openai";
const client = new OpenAI();

export async function GET(request: Request) {
    console.log(await request.json());
    // const data = await request.json();
    const response = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello." }],
    });
    const message = response.choices[0].message.content;
    return new Response(JSON.stringify({ message }))
}

export async function POST(request: Request) {
    try {
        const data: { chat_id: string, user_message: string } = await request.json();
        const pb = await getPB();
        // get chat history
        const messageRecords = await pb.collection("messages").getFullList({
            filter: `chat_id="${data.chat_id}"`,
            sort: "created",
        })
        const mappedMessages = messageRecords.map((message) => {
            return { role: message.role, content: message.content }
        })

        // add new message to the database
        const newUserMessage = {
            id: null,
            chat_id: data.chat_id,
            role: "user",
            content: data.user_message
        }
        await pb.collection("messages").create(newUserMessage);

        // add user message to the chat history and get chat completion
        const messages = [...mappedMessages, { role: "user", content: data.user_message }];
        const response = await client.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages,
        })
        const message = response.choices[0].message.content;

        // add bot message to the database
        const newBotMessage = { chat_id: data.chat_id, role: "assistant", content: message }
        await pb.collection("messages").create(newBotMessage);

        // return the bot message
        return new Response(JSON.stringify({ message }))
    } catch (error) {
        console.log("Error in response route: ", error);
        return new Response(JSON.stringify({ message: "Error" }), { status: 500 });
    }
}