const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [String],
  instructions: String,
  prepTime: Number,
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    default: "Easy",
  },
});
const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
