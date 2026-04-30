const recipeService = require('../service/recipe-service')
const ApiError = require('../exceptions/api-error')

class RecipeController {
    async CreateRecipe(req, res, next) {
        try{
            const {title, category, description} = req.body
            const recipeData = await recipeService.CreateRecipe(title, category, description)
            return res.json(recipeData)
        } catch (e){
            next(e)
        }
    }

    async UpdateRecipe(req, res, next){
        try{
            const {id} = req.params
            const data = req.body
            const recipe = await recipeService.UpdateRecipe(id, data)
            res.json('Рецепт успешно обновлен')
        } catch(e){
            next(e)
        }
    }

    async DeleteRecipe(req, res, next){
        try{
            const {id} = req.params
            const recipe = await recipeService.DeleteRecipe(id)
            res.json('Рецепт успешно удален')
        } catch(e){
            next(e)
        }
    }

    async getRecipes(req, res, next){
        try{
            const recipes = await recipeService.getRecipes()
            return res.json(recipes)
        } catch(e){
            next(e)
        }
    }

    async getOneRecipe(req, res, next){
        try{
            const {id} = req.params
            const recipe = await recipeService.getOneRecipe(id)
            res.json(recipe)
        } catch(e){
            next(e)
        }
    }
}

module.exports = new RecipeController()