"use client"

import MarkdownViewer from "@/components/MarkdownViewer";


export default function BotMessage({ message, loading }: { message: string, loading: boolean }) {

    // const getMessage = async (setMessage: (msg: string) => void, setLoading: (loading: boolean) => void) => {
    //     const res = await fetch("/api/response",
    //         {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 messages:
    //                     [{ role: "user", content: "briefly compare 2 philosophy of nextjs and laravel side by side. Then write a line of code that you're most likely to find when working on each." }],
    //             })

    //         }
    //     );
    //     if (!res.ok) {
    //         throw new Error("Failed to fetch data");
    //     }
    //     const data = await res.json();
    //     console.log(data);
    //     setMessage(data.message);
    //     setLoading(false);
    // };
    // const [message, setMessage] = useState<string>("Yakikaku na nu nona");
    // const [loading, setLoading] = useState<boolean>(false);
    // useEffect(() => {
    //     // getMessage(setMessage, setLoading)
    //     setMessage("Yeah")
    //     setLoading(false)
    // }, [])

    return (
        <div className="flex justify-start">
            <div className="flex flex-col w-full max-w-xl bg-background border-2 rounded-lg p-4">
                <h2 className="font-bold">bot</h2>
                {loading ?
                    <span className="animate-ping flex w-fit">…</span>
                    :
                    <article className="prose dark:prose-invert ">
                        <MarkdownViewer source={message} />
                    </article>
                }
                {/* <p>Texts from bot <span className=" animate-pulse">⬛</span></p> */}
            </div>
        </div>
    )
}