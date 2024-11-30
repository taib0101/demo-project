import express from "express";
import router from "./routes/api.js";
import { connect } from "./app/models/model.js";
import dotenv from "dotenv";

dotenv.config({ path: "./app/config/.env" });

connect();

const app = express();
app.use(router);

const PORT = (process.env.environment === "staging") ? process.env.DEVELOPMENT_PORT : process.env.PRODUCTION_PORT;

app.listen(PORT, () => {
    console.log(`port ${PORT}...`);
});
//contributed by sadman
