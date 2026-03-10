const mongoose = require('mongoose')

const RecipesScheme = mongoose.Schema(
  {
    name:{
      type: String,
      required: [true, 'Пожалуйста введите название рецепта']
    },
    category:{
      type: String,
      required: [true, 'Введите категорию (например: Суп, салат и тд.)']
    },
    description:{
      type: Text,
      required: [true, 'Пожалуйста введите описание рецепта']
    }
  },
  {
    timestamp: true
  }
)

const Recipe = mongoose.model('Recipe', RecipesScheme)
module.exports = Recipe