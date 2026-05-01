import { makeAutoObservable, makeObservable } from "mobx";
import axios from "axios";
import { IRecipe } from "../models/IRecipe";
import RecipeService from "../services/RecipeService";

export default class RecipeStore{
    recipe = {} as IRecipe
    constructor(){
        makeObservable(this)
    }

    setRecipe(recipe: IRecipe){
        this.recipe = recipe
    }

    async CreateRecipe(title: string, category: string, description: string) {
        try{
            const response = await RecipeService.CreateRecipe(title, category, description)
            console.log(response)
            this.setRecipe(response.data.recipe)
        } catch(e: any){
            console.log(e.response?.data?.message)
        }
    }

    async DeleteRecipe(id: string){
        try{
            const response = await RecipeService.DeleteRecipe(id)
            console.log(response)
        } catch(e: any){
            console.log(e.response?.data?.message)
        }
    }

    async UpdateRecipe(id: string, data:string){
        try{
            const response = await RecipeService.UpdateRecipe(id, data)
            console.log(response)
            this.setRecipe(response.data.recipe)
        } catch(e: any){
            console.log(e.response?.data?.message)
        }
    }

    async getOneRecipe(id){
        try{
            const response = await RecipeService.getOneRecipe(id)
            console.log(response)
        }catch(e){
            console.log(e.response?.data?.message)
        }
    }
    

}