"use client"
import { useState } from "react";
import { HamburgerMenuIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { ModeToggle } from "./ModeToggle";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header({ chat }: { chat?: { id: string, title: string } }) {
    const [chatState, setChatState] = useState(chat);
    const [editable, setEditable] = useState(false);
    const changeTitle = async () => {
        try {
            const res = await fetch("/api/chat", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: chatState?.id, title: chatState?.title })
            });
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await res.json();
            setChatState(data);
            setEditable(false);
        } catch (error) {
            console.log("Error in changeTitle: ", error);
        }
    };
    return (

        <nav className="flex justify-between items-center p-4 bg-background text-foreground border-b h-fit">
            <Sheet >
                <SheetTrigger className="bg-foreground text-background p-2 rounded-md">
                    <HamburgerMenuIcon className="" />
                </SheetTrigger>
                <SheetContent side="left" className="">
                    <SheetHeader>
                        <SheetTitle className="italic text-2xl text-shadow-md text-shadow-foreground">OpenAPI Wrapper</SheetTitle>
                        <SheetDescription className="text-sm">
                            A simple wrapper for OpenAPI
                        </SheetDescription>
                    </SheetHeader>
                    <ul className="flex flex-col gap-2 p-4">
                        <li className=" flex ">
                            <Link href={"/"} className="w-full bg-background text-foreground border-b hover:bg-accent px-2 rounded-sm">Home</Link>
                        </li>
                        <li className=" flex ">
                            <Link href={"/"} className="w-full bg-background text-foreground border-b hover:bg-accent px-2 rounded-sm">Home</Link>
                        </li>
                        <li className=" flex ">
                            <Link href={"/"} className="w-full bg-background text-foreground border-b hover:bg-accent px-2 rounded-sm">Home</Link>
                        </li>
                        <li className=" flex ">
                            <Link href={"/"} className="w-full bg-background text-foreground border-b hover:bg-accent px-2 rounded-sm">Home</Link>
                        </li>
                        <li className=" flex ">
                            <Link href={"/"} className="w-full bg-background text-foreground border-b hover:bg-accent px-2 rounded-sm">Home</Link>
                        </li>
                    </ul>
                </SheetContent>
            </Sheet>
            <div className="flex items-center justify-center gap-2">
                {/* <Link href={"/"}> */}
                {
                    chat ?
                        <div className="gap-4 flex items-center">
                            <input
                                className={"text-2xl font-bold text-center rounded-md " + (editable ? "bg-accent border-2" : "bg-background")}
                                type="text"
                                readOnly={!editable}
                                value={chatState?.title}
                                onChange={(e) => setChatState({ id: chatState?.id ?? "", title: e.target.value })}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        changeTitle();
                                        setEditable(false);
                                    }
                                }}
                            />
                            <Button
                                onClick={async () => {
                                    setEditable(!editable);
                                    if (editable)
                                        await changeTitle()
                                }} className="bg-foreground text-background p-2 rounded-md">
                                <Pencil1Icon className="text" />
                            </Button>
                        </div>
                        :
                        <span className="text-2xl font-bold">OpenAI Wrapper</span>

                }
                <span className="text-2xl font-bold">
                </span>
                {/* </Link> */}
            </div>
            <div className="flex gap-4">
                <ModeToggle />
                <Avatar className="border-2 ">
                    <AvatarImage src={"image/avatar.jpeg"} className="w-full" />
                </Avatar>
            </div>

        </nav>
    )
}