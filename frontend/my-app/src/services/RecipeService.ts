import $api from "../http";
import { IRecipe } from "../models/IRecipe";
import { RecipeResponce } from "../models/response/RecipeResponse";

export default class RecipeService {

    static async CreateRecipe(title: string, category: string, description: string) {
        return $api.post<RecipeResponce>('/create-recipe', {title, category, description})
    }

    static async DeleteRecipe(id: string){
        return $api.delete<RecipeResponce>(`/recipe-delete/${id}`)   
    }

    static async UpdateRecipe(id: string, data: string){
        return $api.put<RecipeResponce>(`/recipe-update/${id}`, {data})
    }

    static async getOneRecipe(id: string){
        return $api.get<RecipeResponce>(`/recipe-one/${id}`)
    }

    
    static fetchRecipes() {
        return $api.get<IRecipe[]>('/recipe-list')
    }
}