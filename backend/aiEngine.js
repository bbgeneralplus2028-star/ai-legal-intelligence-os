import express from "express";
import OpenAI from "openai";

export const aiRouter = express.Router();

const client = new OpenAI({
apiKey: process.env.OPENAI_API_KEY
});

aiRouter.post("/ai", async (req,res)=>{

const { input, mode } = req.body;

const system = `
You are a legal intelligence system.

Capabilities:
- statutes
- case law explanation
- UCC analysis
- motion drafting
- document summarization
- legal research assistance

Mode: ${mode}
`;

const response = await client.chat.completions.create({
model:"gpt-4o-mini",
messages:[
{ role:"system", content: system },
{ role:"user", content: input }
]
});

res.json({
result: response.choices[0].message.content
});
});
