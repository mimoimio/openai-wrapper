import { getPB } from "@/lib/pocketbase";

export async function GET(request: Request) {
    try {
        console.log(request)
        const pb = await getPB();
        const chats = await pb.collection("chats").getFullList();
        return new Response(
            JSON.stringify({ chats }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (err) {
        return new Response(
            JSON.stringify({ error: "Failed to fetch chats", details: err instanceof Error ? err.message : err }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
