export default function Ingredients(props){

    const ingredientsListItems = props.ingredients.map((item) =>{
        return <li key={item}>{item}</li>
    })

    return(
        <section className="ingredients-container">
                <h2> Ingredients on hand:</h2>
                <ul>
                    {ingredientsListItems}
                </ul>
                {props.ingredientsLength >= 3 ? <div className="get-recipe-container">
                    <div className="get-recipe-text">
                        <h3>Ready for a recipe?</h3>
                        <span>Generate a recipe from your list of ingredients</span>
                    </div>
                    <button onClick={props.getRecipeClick}>Get a recipe</button>
                </div> : null}
        </section>
    )
}