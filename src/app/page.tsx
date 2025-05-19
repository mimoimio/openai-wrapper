import Header from "@/components/Header";
import { getPB } from "@/lib/pocketbase";
import Link from "next/link";

export default async function Home() {
  const pb = await getPB();
  const chats = await pb.collection("chats").getFullList();

  return (
    <>
      <Header />
      <div className="max-w-2xl w-full mx-auto flex flex-col gap-4 p-4">
        <Link href={"/api/chat"} className="bg-foreground text-background flex w-fit p-2 px-4 rounded-xl">New Chat</Link>
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
    </>
  );
}
