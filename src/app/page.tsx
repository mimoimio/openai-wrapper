import BotMessage from "@/components/BotMessage";
import { AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import UserMessage from "@/components/UserMessage";
import { Avatar } from "@/components/ui/avatar";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-background text-foreground border-b h-fit">
        <Button>
          <HamburgerMenuIcon />
        </Button>
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

      <div className="border h-full w-full overflow-y-auto">
        <div className="max-w-2xl mx-auto flex flex-col gap-4 justify-start p-4 ">
          <h1 className="text-4xl">Content</h1>
          <UserMessage />
          <BotMessage />
        </div>
      </div>

      <div className="mx-auto w-full max-w-2xl h-fit p-4 flex ">
        <input
          type="text"
          placeholder="Type your message here..."
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <Button className="ml-2">Send</Button>
      </div>
    </>
  );
}
