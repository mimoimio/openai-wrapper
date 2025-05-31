"use client"
import DeleteChatButton from "@/components/DeleteChatButton";
import Header from "@/components/Header";
import NewChatLink from "@/components/NewChatLink";
import Link from "next/link";
import { RecordModel } from "pocketbase";
import { useEffect, useState } from "react";


export default function Home() {
  const [chats, setChats] = useState<RecordModel[] | null>(null)
  useEffect(() => {
    const call = async () => {
      const res = await fetch("api/chat/all", { method: "GET" })
      const data = await res.json()
      const chats = data.chats
      setChats(chats)
    }
    call()
  }, [])
  function deleteChat(chat_id: string) {
    setChats(prev =>
      prev
        ? prev.filter(chat => chat.id !== chat_id)
        : prev // In case prev is null
    );
  }


  return (
    <>
      <Header />
      <div className="max-w-2xl w-full mx-auto flex flex-col gap-4 p-4">
        <NewChatLink />
        {chats &&
          chats.map((chat) => {
            return (
              <div key={chat.id} className="flex">
                <Link href={`/chat/${chat.id}`} className="flex flex-col gap-2 p-4 rounded-4xl shadow-foreground shadow-md/20 w-full">
                  <h2 className="font-black">{chat.title}</h2>
                  <p>{chat.created}</p>
                </Link>
                <DeleteChatButton chat_id={chat.id} onDelete={deleteChat} />
              </div>
            )
          })
        }
      </div>
    </>
  );
}
