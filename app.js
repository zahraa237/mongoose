const mongoose = require("mongoose");
const express = require("express");
const Recipe = require("./models/Recipe");
const app = express();
async function conntectToDB() {
  //connection to the database
  try {
    await mongoose.connect(
      "mongodb+srv://zahraa:1234@cluster0.ag8zw3l.mongodb.net/recipesDB?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error Occured", error);
  }
}
conntectToDB();

function createRecipe(newRecipe) {
  Recipe.create({
    name: newRecipe.name,
    ingredients: newRecipe.ingredients,
    instructions: newRecipe.instructions,
    prepTime: newRecipe.prepTime,
    difficulty: newRecipe.difficulty,
  });
}

function getAllRecipes() {
  const allRecipes = Recipe.find();
  console.log(allRecipes);
}

function updateRecipe(recipeId, newRecipeData) {
  Recipe.findByIdAndUpdate(recipeId, newRecipeData, { new: true });
  console.log();
}

function deleteRecipe(recipeId) {
  Recipe.findByIdAndDelete(recipeId);
}
function getRecipeById(id) {
  const found = Recipe.findById(id);
  console.log(found);
}

const newRecipe = {
  name: "Um Ali",
  ingredients: ["Puff Pastry", "Milk"],
  instructions: "bake at 180C",
  prepTime: 120,
  difficulty: "Medium",
};

// createRecipe(newRecipe);
// getAllRecipes();
deleteRecipe("68935475b5acad8b5fdd766e");

updateRecipe("68935475b5acad8b5fdd766e", { name: "updatedname" });

getRecipeById("68935475b5acad8b5fdd766e");

// Listen on port 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening on port " + port);
});
