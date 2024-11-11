import express from "express";
import { modelCollection } from "../app/models/model.js";
import mongoose from "mongoose";

const router = express.Router();
router.use(express.json());
import dotenv from "dotenv";

dotenv.config({ path: "./app/config/.env" });

const URI = (process.env.environment === "staging") ? process.env.MONGODB_DEVELOPMENT_CONNECTION : process.env.MONGODB_PRODUCTION_CONNECTION;

router.get("/signin", (req, res) => {
    res.status(200).send(URI);
});

router.post("/signup", async (req, res) => {
    
    try {
        const insertDocument = new modelCollection(req.body)
        await insertDocument.save();
        return res.status(200).send("inserted successfully");
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
});

export default router;