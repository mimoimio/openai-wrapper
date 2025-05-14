export default function BotMessage() {
    return (

        <div className="flex justify-start">
            <div className="flex flex-col w-full max-w-xl bg-background border-2 rounded-lg p-4">
                <h2 className="font-bold">bot</h2>
                <p>Texts from bot <span className=" animate-pulse">⬛</span></p>
            </div>
        </div>
    )
}