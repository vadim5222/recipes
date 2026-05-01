import React, {FC, useContext, useState} from "react";
import { Context } from "../../index";
import {observer} from "mobx-react-lite";


const RecipeForm: FC = () => {
    const [title, setTitle] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const { recipestore } = useContext(Context)
    return(
        <>
            <input
            onChange={e => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder='Название'
            />

            <input
            onChange={e => setCategory(e.target.value)}
            value={category}
            type='text'
            placeholder='Категория'
            />
            <input
            onChange={e => setDescription(e.target.value)}
            value={description}
            type='text'
            placeholder='Описание'
            />
            <button onClick={() => recipestore.CreateRecipe(title, category, description)}>Добавить</button>
        </>
    )
}
export default observer(RecipeForm)