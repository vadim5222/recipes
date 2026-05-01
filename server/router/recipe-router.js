const Router = require("express").Router;
const RecipeController = require('../controllers/recipe-controller')
const authMiddleware = require('../middlewares/auth-middleware')
const RecipeRouter = new Router

RecipeRouter.post('/create-recipe', RecipeController.CreateRecipe)
RecipeRouter.get('/recipe-list', authMiddleware, RecipeController.getRecipes)
RecipeRouter.get('/recipe-one/:id', RecipeController.getOneRecipe)
RecipeRouter.put('/recipe-update/:id', RecipeController.UpdateRecipe)
RecipeRouter.patch('/recipe-update/:id', RecipeController.UpdateRecipe)
RecipeRouter.delete('/recipe-delete/:id', RecipeController.DeleteRecipe)

module.exports = RecipeRouter