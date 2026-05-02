import { observer } from "mobx-react-lite"
import React, {FC, useState} from "react"
import { IRecipe } from "../../models/IRecipe"

const UpdateRecipeForm = () => {

    const [selectRecipe, setSelectRecipe] = useState<IRecipe | null>(null)

    return(
        <>
        </>
    )
}

export default observer(UpdateRecipeForm)