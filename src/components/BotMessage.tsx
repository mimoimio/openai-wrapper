import MarkdownViewer from "@/components/MarkdownViewer";

export default function BotMessage() {
    const md = '# Hello!\n---\nType some **Markdown**…\n```lua \nprint() warn() math.round()\n```'
    return (
        <div className="flex justify-start">
            <div className="flex flex-col w-full max-w-xl bg-background border-2 rounded-lg p-4">
                <h2 className="font-bold">bot</h2>
                <article className="prose dark:prose-invert">
                    <MarkdownViewer source={md} />
                </article>
                {/* <p>Texts from bot <span className=" animate-pulse">⬛</span></p> */}
            </div>
        </div>
    )
}