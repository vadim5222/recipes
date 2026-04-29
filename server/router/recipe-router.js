const Router = require("express").Router;
const RecipeController = require('../controllers/recipe-controller')
const RecipeRouter = new Router

RecipeRouter.post('/create-recipe', RecipeController.CreateRecipe)
RecipeRouter.get('/recipe-list', RecipeController.getRecipes)

module.exports = RecipeRouter