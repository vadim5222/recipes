const Recipe = require('../models/recipes.model')


const getRecipes = async(req, res) =>{
    try{
        const recipes = await Recipe.find({})
        res.status(200).json(recipes)
    } catch(error){
        res.status(500).json({message: error.message})
    }
}


const getRecipe = async(req, res) => {
    try{
        const {id} = req.params
        const recipe = await Recipe.findById(id)
        res.status(200).json(recipe)
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

const createRecipe = async(req, res) =>{
    try{
        const recipe = await Recipe.create(req.body)
        res.status(200).json(recipe)
    } catch (error){
        res.status(500).json({message: error.message})
    }
}

const updateRecipe = async(req, res) =>{
    try{
        const {id} = req.params
        const recipe = await Recipe.findByIdAndUpdate(id, req.body)

        if (!recipe){
            return res.status(404).json({message: "Такого рецепта не существует"})
        }
        const updateRecipe = await Recipe.findById(id)
        res.status(200).json(updateRecipe)

    } catch(error){
        res.status(500).json({message: error.message})
    }
}

const deleteRecipe = async(req, res) => {
    try{
        const {id} = req.params
        const recipe = await Recipe.findByIdAndDelete(id)
        if(!recipe){
            return res.status(404).json({message: "Продукт не найден"})
        }

        res.status(200).json({message:"Рецепт успешно удален"})
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getRecipes,
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe
}