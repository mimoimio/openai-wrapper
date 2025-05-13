import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-4 justify-center  p-4 ">
      <h1 className="text-4xl">Content</h1>

      <div className="flex justify-end ">
        <div className="flex flex-col w-full max-w-xl bg-secondary border-2 rounded-lg p-4">
          <h2 className="font-bold">you</h2>
          <p>Texts from bot</p>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="flex flex-col w-full max-w-xl bg-background border-2 rounded-lg p-4">
          <h2 className="font-bold">bot</h2>
          <p>Texts from bot</p>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="flex flex-col w-full max-w-xl bg-background border-2 rounded-lg p-4">
          <h2 className="font-bold">bot</h2>
          <p>Texts from bot</p>
        </div>
      </div>
    </div>
  );
}
