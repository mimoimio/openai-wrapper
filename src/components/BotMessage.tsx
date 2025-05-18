"use client"

import MarkdownViewer from "@/components/MarkdownViewer";


export default function BotMessage({ message, loading }: { message: string, loading: boolean }) {
    return (
        <div className="flex justify-start">
            <div className="flex flex-col w-full max-w-xl bg-background border-2 rounded-lg p-4">
                <h2 className="font-bold">bot</h2>
                {loading ?
                    <span className="animate-ping flex w-fit">…</span> :
                    <article className="prose dark:prose-invert ">
                        <MarkdownViewer source={message} />
                    </article>
                }
            </div>
        </div>
    )
}