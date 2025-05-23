export default function UserMessage({ message }: { message: string }) {
    return (
        <div className="flex justify-end ">
            <div className="flex flex-col w-full max-w-xl bg-secondary border-2 rounded-lg p-4">
                <h2 className="font-bold">you</h2>
                <p>{message}</p>
            </div>
        </div>
    )
}