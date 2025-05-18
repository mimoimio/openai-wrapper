import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { ModeToggle } from "./ModeToggle";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

export default function Header() {
    return (

        <nav className="flex justify-between items-center p-4 bg-background text-foreground border-b h-fit">
            <Sheet >
                <SheetTrigger className="bg-foreground text-background p-2 rounded-md">
                    <HamburgerMenuIcon className="" />
                </SheetTrigger>
                <SheetContent side="left" className="">
                    <SheetHeader>
                        <SheetTitle className="italic text-2xl text-shadow-md text-shadow-foreground">OpenAPI Wrapper</SheetTitle>
                        <SheetDescription>
                            <p className="text-sm">A simple wrapper for OpenAPI</p>
                            <p className="text-sm">Made with Next.js, Radix UI, and Tailwind CSS</p>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <div className="flex items-center justify-center gap-2">
                <Link href={"/"}><span className="text-2xl font-bold">OpenAPI Wrapper</span></Link>
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