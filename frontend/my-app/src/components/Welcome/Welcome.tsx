import React, { FC, useContext, useEffect, useState } from 'react';
import { Context } from "../../index";
import { IUser } from "../../models/IUser";
import {IRecipe} from "../../models/IRecipe";
import UserService from "../../services/UserService";
import { observer } from 'mobx-react-lite';
import RecipeForm from "../RecipeForm/RecipeForm";
import RecipeService from "../../services/RecipeService";
import { data } from 'react-router-dom';


const Welcome = () => {

    const { store } = useContext(Context)
    const { recipestore } = useContext(Context)
    const [users, setUsers] = useState<IUser[]>([])
    const [recipes, setRecipes] = useState<IRecipe[]>([])
    const [showUsers, setShowUsers] = useState(false)
    const [showRecipes, setShowRecipes] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers()
            setUsers(response.data)
        } catch (e: any) {
            console.log(e)
        }
    }

    async function getRecipes() {
        try {
            const response = await RecipeService.fetchRecipes()
            setRecipes(response.data)
        } catch (e: any){
            console.log(e)
        }
    }

    if (store.isLoading) {
        return <div>Загрузка...</div>
    }
    return (
        <div>
            <div>
                <h1>Добро пожаловать {store.user.username}</h1>
                <h1>{store.user.isActivated ? 'Аккаунт подтвержден' : 'Подтвердите аккаунт'}</h1>
                <button onClick={() => store.logout()}>Выйти</button>
                <div>
                    <button onClick={async () => {
                        if(!showUsers){
                            await getUsers()
                        }
                        setShowUsers(prev => !prev)
                    }}>{showUsers ? 'Скрыть пользователей' : 'Показать пользователей'}</button>
                    {showUsers && users.map(user =>
                        <div key={user.id}>{user.username}</div>)}
                    <RecipeForm/>
                    <button onClick={async () => {
                        if(!showRecipes){
                            await getRecipes()
                        }
                        setShowRecipes(prev => !prev)
                    }}>{showRecipes ? 'Скрыть список рецептов' : 'Показать список рецептов'}</button>
                    {showRecipes && recipes.map(recipe =>
                        <div key={recipe._id}>{recipe.title} 
                        <button onClick={() => recipestore.DeleteRecipe(recipe._id)}>Удалить</button>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default observer(Welcome)