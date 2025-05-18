import { getPB } from "@/lib/pocketbase";
import Link from "next/link";

export default async function Home() {
  const pb = await getPB();
  const chats = await pb.collection("chats").getFullList();

  return (
    <>
      <div className="max-w-2xl w-full mx-auto flex flex-col gap-4 p-4">
        <Link href={"/api/newchat"} className="bg-foreground text-background flex w-fit p-2 px-4 rounded-xl">New Chat</Link>
        {
          chats.map((chat) => {
            return (
              <div key={chat.id}>
                <Link href={`/chat/${chat.id}`} className="flex flex-col gap-2 p-4 rounded-4xl shadow-foreground shadow-md/20">
                  <h2 className="font-black">{chat.title}</h2>
                  <p>{chat.created}</p>
                </Link>
              </div>
            )
          })
        }
      </div>
      {/* <Header />
      <ChatInterface
        chat={{ id: "1", title: "Test Chat" }}
        chatHistory={[{ id: null, chat_id: "1", role: "system", content: "You are a helpful assistant. You are to console the user with their worries." }]} /> */}
    </>
  );
}
