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

    async UpdateRecipe(id, data){
        const Recipe = await RecipeModel.findByIdAndUpdate(id, {$set: data}, {new:true})
        if (!Recipe){
            throw ApiError.BadRequest('такого рецепта нету')
        }
        return Recipe
    }

    async DeleteRecipe(id){
        const ExistingRecipe = await RecipeModel.findByIdAndDelete(id)
        if (!ExistingRecipe){
            throw ApiError.BadRequest('Такого рецепта нету')
        }
        const recipes = await RecipeModel.find()
        return recipes
    }

    async getRecipes(){
        const recipes = await recipeModel.find()
        return recipes
    }

    async getOneRecipe(id){
        const recipe = await RecipeModel.findById(id)
        if (!recipe){
            throw ApiError.BadRequest('Такого рецепта нету')
        }
        return recipe
    }
}

module.exports = new RecipeService()