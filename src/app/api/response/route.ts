// import OpenAI from "openai";
// const client = new OpenAI();

export async function GET(request: Request) {
    console.log(await request.json());
    // // const data = await request.json();
    // const response = await client.chat.completions.create({
    //     model: "gpt-3.5-turbo",
    //     messages: [{ role: "user", content: "Hello." }],
    // });
    // const message = response.choices[0].message.content;
    // // console.log(response.output_text);
    const message = "Sorry no response for you";
    return new Response(JSON.stringify({ message }))
}

export async function POST(request: Request) {
    console.log(await request.json());
    // const data = await request.json();
    // const response = await client.chat.completions.create({
    //     model: "gpt-3.5-turbo",
    //     messages: data.messages,
    // })
    // const message = response.choices[0].message.content;
    const message = "Sorry no response for you";
    return new Response(JSON.stringify({ message }))
}