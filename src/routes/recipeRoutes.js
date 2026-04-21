import express from "express";
import {
  createRecipe,
  deleteRecipe,
  getRecipeById,
  getRecipes,
  updateRecipe,
} from "../controllers/recipeController.js";

const router = express.Router();

router.post("/", createRecipe);
router.get("/", getRecipes);
router.get("/:id", getRecipeById);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;
