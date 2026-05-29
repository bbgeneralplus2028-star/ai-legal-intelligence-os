import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { aiRouter } from "./aiEngine.js";
import { searchRouter } from "./legalSearch.js";
import { pdfRouter } from "./pdfEngine.js";
import { caseRouter } from "./caseManager.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// ONE UNIFIED API HUB
app.use("/api", aiRouter);
app.use("/api", searchRouter);
app.use("/api", pdfRouter);
app.use("/api", caseRouter);

app.listen(3000, ()=>{
console.log("AI Legal Intelligence OS running");
});
