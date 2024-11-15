import express from "express";
import { modelCollection } from "../app/models/model.js";
import mongoose from "mongoose";
import { hash } from "bcrypt";
import { siginAuthentication } from "../app/middlewares/authMiddleware.js";

const router = express.Router();
router.use(express.json());

router.post("/signin", siginAuthentication, (req, res) => {
    res.status(200).send("Hello world");
});


router.post("/signup", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await modelCollection.findOne({ email });

        console.log(user);

        if (!user) {
            hash(password, 10, async (error, hash) => {
                const insertDocument = new modelCollection({ email, password: hash });
                await insertDocument.save();
                return res.status(200).send("inserted successfully");
                // Store hash in your password DB.
            });
        } else {
            res.status(401).send("account already exist");
        }

    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
});

router.get("/time", (req, res) => {
    res.send(new Date(Date.now()).toLocaleString());
});

export default router;