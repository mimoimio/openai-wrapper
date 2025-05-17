import { AvatarImage } from "@/components/ui/avatar";
import { Avatar } from "@/components/ui/avatar";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "@/components/ModeToggle";
import ChatInput from "@/components/ChatInput";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Home() {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-background text-foreground border-b h-fit">
        <Sheet >
          <SheetTrigger className="bg-foreground text-background p-2 rounded-md">
            <HamburgerMenuIcon className="" />
          </SheetTrigger>
          <SheetContent side="left" className="">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl font-bold">OpenAPI Wrapper</span>
        </div>
        <div className="flex gap-4">
          <ModeToggle />
          <Avatar className="border-2 ">
            <AvatarImage src={"image/avatar.jpeg"} />
          </Avatar>
        </div>

      </nav>
      {/* 
      <div className="border h-full w-full overflow-y-auto">
        <div className="max-w-2xl mx-auto flex flex-col gap-4 justify-start p-4 ">
          <h1 className="text-4xl">Content</h1>
          <UserMessage />
          <BotMessage message="Lol" loading={false} />
        </div>
      </div> */}

      <ChatInput />

    </>
  );
}
