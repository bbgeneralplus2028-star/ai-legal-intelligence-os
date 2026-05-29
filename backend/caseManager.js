import express from "express";
import fs from "fs";

export const caseRouter = express.Router();

caseRouter.post("/save-case", (req,res)=>{

let cases = JSON.parse(fs.readFileSync("./data/cases.json"));

cases.push(req.body);

fs.writeFileSync("./data/cases.json", JSON.stringify(cases,null,2));

res.json({ status:"case saved" });
});
