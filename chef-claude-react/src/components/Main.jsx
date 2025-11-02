import { useState, useRef, useEffect } from "react"
import Ingredients from "./Ingredients"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromChefClaude } from "../ai"


export default function Main(){

    const [ingredients, setIngredients] = useState([])

    let ingredientsLength = ingredients.length
    
    //handle form data
    function onSubmit(formData){
        const newIngredient = formData.get("ingredient")

        setIngredients((ingredientsItem) => {
             return ingredientsItem.includes(newIngredient) ? [...ingredientsItem] : [...ingredientsItem, newIngredient]
            })
    }

    //text for user to show ingredients needed to display button for generation
    function addMoreText(){
        if (ingredientsLength >= 1 && ingredientsLength < 3)
            return <span id ="ing-amount">Please add {3 - ingredientsLength} more ingredients</span>
        }


    let [recipe, setRecipe] = useState("")
    //gets recipe from claude and sets state
    async function getRecipeClick(){
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
        
    }

    //clear ingredients list and claude recipe
    function clearButton(){
        ingredients ? setIngredients([]) : null
        recipe ? setRecipe("") : null
    }

    //ref
    const recipeSection = useRef(null)

    //useEffect only scrolls to the ref DOM whenever the recipe is generated/changed
    useEffect(() => {
        recipe && recipeSection.current != null ? recipeSection.current.scrollIntoView({behavior: "smooth"}) : null
    }, [recipe]);

    return(
        <main>
            <form action={onSubmit} className="add-ingredient-form">
                <input aria-label = "Add Ingredient" placeholder = "e.g. Oregano" type="text" name = "ingredient"></input>
                <button type="submit">+ Add Ingredient</button>
            </form>
            <button 
            id = "clear-btn"
            onClick={clearButton}
            
            >Clear</button>
            {addMoreText()}
            {ingredients.length > 0 ? 
            <Ingredients
                ingredients = {ingredients}
                ingredientsLength = {ingredientsLength}
                getRecipeClick = {getRecipeClick}
                ref = {recipeSection}
            /> : null}
            {recipe ? 
            <ClaudeRecipe
                recipe = {recipe}
            /> : null}
        </main>
    )
}