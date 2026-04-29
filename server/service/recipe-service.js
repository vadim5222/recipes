const RecipeModel = require('../models/recipe-model')
const ApiError = require('../exceptions/api-error')
const RecipeDto = require('../dtos/recipe-dto')
const recipeModel = require('../models/recipe-model')


class RecipeService{
    async CreateRecipe(title, category, description){
        const ExistingRecipe = await RecipeModel.findOne({title})
        if (ExistingRecipe){
            throw ApiError.BadRequest('Рецепт с таким названием уже есть')
        }
        const recipe = await RecipeModel.create({title, category, description})
        const recipeDto = new RecipeDto(recipe)

        return{
            recipe: recipeDto
        }
    }
    async getRecipes(){
        const recipes = await recipeModel.find()
        return recipes
    }
}

module.exports = new RecipeService()