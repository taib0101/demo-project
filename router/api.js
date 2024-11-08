import express from "express";
import { modelCollection } from "../models/model.js";

const router = express.Router();
router.use(express.json());

router.get("/signin", (req, res) => {

});

router.post("/signup", (req, res) => {
    const insertDocument = new modelCollection(req.body)
    insertDocument.save();
    res.status(200).send("inserted successfully");
});

export default router;