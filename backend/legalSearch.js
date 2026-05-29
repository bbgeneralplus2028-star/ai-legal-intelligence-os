import express from "express";

export const searchRouter = express.Router();

searchRouter.post("/search", async (req,res)=>{

const { query } = req.body;

// Placeholder for CourtListener / Cornell / GovInfo integration
res.json({
results: [
"Search results placeholder for: " + query,
"Connect CourtListener API here",
"Connect Cornell LII here"
]
});

});
