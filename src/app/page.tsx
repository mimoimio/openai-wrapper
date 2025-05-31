"use client"
import DeleteChatButton from "@/components/DeleteChatButton";
import Header from "@/components/Header";
import NewChatLink from "@/components/NewChatLink";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { RecordModel } from "pocketbase";
import { useEffect, useState } from "react";


export default function Home() {
  const [chats, setChats] = useState<RecordModel[] | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const call = async () => {
      const res = await fetch("api/chat/all", { method: "GET", cache: "no-cache" })
      const data = await res.json()
      const chats = data.chats
      setChats(chats)
      setLoading(false)
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
        {
          loading ?
            <Skeleton className="flex p-4 rounded-4xl shadow-foreground shadow-md/20 w-full">
              <div className="flex flex-col w-full gap-4">
                <Skeleton className="flex h-1 w-1/2 p-4 shadow-foreground bg-pink-50/30 shadow-md/20  rounded-full" />
                <Skeleton className="flex h-10 w-full shadow-foreground bg-pink-50/30 shadow-md/20 rounded-full" />
              </div>

            </Skeleton>
            :

            chats &&
            chats.map((chat) => {
              return (
                <div key={chat.id} className="flex">
                  <Link href={`/chat/${chat.id}`} className="flex bg-pink-400/20 p-4 rounded-4xl shadow-foreground shadow-md/20 w-full">
                    <div className="flex flex-col gap-2 w-full ">
                      <h2 className="font-black">{chat.title}</h2>
                      <p>{chat.created}</p>
                    </div>
                    <DeleteChatButton chat_id={chat.id} onDelete={deleteChat} />
                  </Link>
                </div>
              )
            })
        }
      </div>
    </>
  );
}
