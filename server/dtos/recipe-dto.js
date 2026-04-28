module.exports = class RecipeDto{
    title;
    category;
    description;
    id;

    constructor(model){
        this.title = model.title
        this.category = model.category
        this.description = model.description
        this.id = model._id
    }
}

