import mongoose, { Schema } from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./app/config/.env" });

const URI = (process.env.environment === "staging") ? process.env.MONGODB_DEVELOPMENT_CONNECTION : process.env.MONGODB_PRODUCTION_CONNECTION;

// console.log(URI);

export const connect = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected fucking atlas");
    } catch (error) {
        console.log(error.message);
    }
}



const userSchema = new Schema({
    email: String,
    password: String
}, { versionKey: false });

export const modelCollection = new mongoose.model("user", userSchema);

