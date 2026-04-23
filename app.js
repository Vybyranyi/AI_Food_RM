import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import recipeRoutes from "./src/routes/recipeRoutes.js";
import authRoutes from "./src/routes/authRouter.js";
import authMiddleware from "./src/midelwares/authMiddleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

connectDB();

app.use(authMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", authRoutes);
app.use("/recipe", recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
