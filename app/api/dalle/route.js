import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);
export async function POST(request) {
    try {
        const body = await request.json();
        const { prompt } = body;

        const response = await openai.createImage({
            prompt,
            n: 1,
            size: "1024x1024",
            response_format: "b64_json",
        });

        const image = response.data.data[0].b64_json;

        return NextResponse.json({ photo: image, type: "b64" });
    } catch (error) {
        console.log(error, "ERROR_MESSAGES");
        return NextResponse.json({
            message: "Something went wrong",
            photo: `https://picsum.photos/1024/1024?random=${Math.floor(Math.random() * 10) + 1}`,
            type: "url",
        });
    }
}
