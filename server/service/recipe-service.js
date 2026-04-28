const RecipeModel = require('../models/recipe-model')
const ApiError = require('../exceptions/api-error')
const RecipeDto = require('../dtos/recipe-dto')


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
}

module.exports = new RecipeService()