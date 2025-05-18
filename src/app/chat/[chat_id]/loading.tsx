import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="flex flex-col gap-4 p-4 max-w-2xl mx-auto w-full">
            <div className="flex justify-end">
                <div className="flex flex-col w-full max-w-xl bg-secondary animate-pulse border-2 rounded-lg p-4 gap-4">
                    <Skeleton className="bg-foreground/20 w-1/6 h-6" />
                    <Skeleton className="bg-foreground/20 w-full h-4" />
                    <Skeleton className="bg-foreground/20 w-full h-4" />
                    <Skeleton className="bg-foreground/20 w-full h-4" />
                    <Skeleton className="bg-foreground/20 w-full h-4" />
                </div>
            </div>

            <div className="flex justify-start">
                <div className="flex flex-col w-full max-w-xl bg-background border-2 rounded-lg p-4 gap-4">
                    <Skeleton className="w-1/6 h-6" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                </div>
            </div>

            <div className="flex justify-end">
                <div className="flex flex-col w-full max-w-xl bg-secondary animate-pulse border-2 rounded-lg p-4 gap-4">
                    <Skeleton className="bg-foreground/20 w-1/6 h-6" />
                    <Skeleton className="bg-foreground/20 w-full h-4" />
                    <Skeleton className="bg-foreground/20 w-full h-4" />
                    <Skeleton className="bg-foreground/20 w-full h-4" />
                    <Skeleton className="bg-foreground/20 w-full h-4" />
                </div>
            </div>

            <div className="flex justify-start">
                <div className="flex flex-col w-full max-w-xl bg-background border-2 rounded-lg p-4 gap-4">
                    <Skeleton className="w-1/6 h-6" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                </div>
            </div>

        </div>
    )
}