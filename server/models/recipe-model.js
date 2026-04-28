const {Schema, model} = require('mongoose')

const RecipeSchema = new Schema({
    title: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true}
})

module.exports = model('Recipe', RecipeSchema)