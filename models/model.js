import mongoose, { Schema } from "mongoose";

mongoose.connect("mongodb://taib:1234@127.0.0.1:27017/projects", {
    authSource: "admin"
});

const userSchema = Schema({
    email: String,
    password: String
});

export const modelCollection = new mongoose.model("user", userSchema);

