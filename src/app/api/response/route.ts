import OpenAI from "openai";
const client = new OpenAI();

export async function GET(request: Request) {
    const response = await client.responses.create({
        model: "gpt-4.1",
        input: " briefly compare 1 philosophy of nextjs and laravel side by side. Then write a line of code that you're most likely to find when working on each",
    });
    // console.log(response.output_text);
    return new Response(JSON.stringify({ message: response.output_text }))
}