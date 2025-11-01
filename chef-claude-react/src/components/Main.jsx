import { useState } from "react"
import Ingredients from "./Ingredients"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromChefClaude } from "../ai"


export default function Main(){

    const [ingredients, setIngredients] = useState([])

    let ingredientsLength = ingredients.length
    
    
    function onSubmit(formData){
        const newIngredient = formData.get("ingredient")

        setIngredients((ingredientsItem) => {
            return [...ingredientsItem, newIngredient]
        })
    }


    function addMoreText(){
        if (ingredientsLength >= 1 && ingredientsLength < 3)
            return <span id ="ing-amount">Please add {3 - ingredientsLength} more ingredients</span>
        }


    let [recipe, setRecipe] = useState("")

    async function getRecipeClick(){
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
        
    }

    return(
        <main>
            <form action={onSubmit} className="add-ingredient-form">
                <input aria-label = "Add Ingredient" placeholder = "e.g. Oregano" type="text" name = "ingredient"></input>
                <button type="submit">+ Add Ingredient</button>
            </form>
            {addMoreText()}
            {ingredients.length > 0 ? 
            <Ingredients
                ingredients = {ingredients}
                ingredientsLength = {ingredientsLength}
                getRecipeClick = {getRecipeClick}
            /> : null}
            {recipe ? 
            <ClaudeRecipe
                recipe = {recipe}
            /> : null}
        </main>
    )
}