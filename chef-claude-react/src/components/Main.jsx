import { useState } from "react"

export default function Main(){

    const [ingredients, setIngredients] = useState([])
    

    const ingredientsListItems = ingredients.map((item) =>{
        return <li key={item}>{item}</li>
    })
    
    function onSubmit(formData){
        const newIngredient = formData.get("ingredient")

        setIngredients((ingredientsItem) => {
            return [...ingredientsItem, newIngredient]
    })
        

    }

    return(
        <main>
            <form action={onSubmit} className="add-ingredient-form">
                <input aria-label = "Add Ingredient" placeholder = "e.g. Oregano" type="text" name = "ingredient"></input>
                <button type="submit">+ Add Ingredient</button>
            </form>
            <section className="ingredients-container">
                <h2> Ingredients on hand:</h2>
                <ul>
                    {ingredientsListItems}
                </ul>
                <div className="get-recipe-container">
                    <div className="get-recipe-text">
                        <h3>Ready for a recipe?</h3>
                        <span>Generate a recipe from your list of ingredients</span>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>
        </main>
    )
}