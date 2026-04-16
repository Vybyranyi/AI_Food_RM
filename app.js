import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
