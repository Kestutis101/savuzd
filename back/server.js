import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/routes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const { MONGO_URI } = process.env;
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

mongoose.connect(MONGO_URI, () => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
