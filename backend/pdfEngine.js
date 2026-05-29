import express from "express";
import pdfParse from "pdf-parse";
import fs from "fs";

export const pdfRouter = express.Router();

pdfRouter.post("/pdf", async (req,res)=>{

const buffer = fs.readFileSync("./upload.pdf");
const data = await pdfParse(buffer);

res.json({
text: data.text.slice(0, 5000)
});
});
