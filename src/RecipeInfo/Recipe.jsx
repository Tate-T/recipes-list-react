
export const RecipeInfo = ({recipe}) => {
    return(
        <article>
            <h2>{recipe.name}</h2>
            <p>{recipe.time}</p>
            <p>{recipe.servings}</p>
            <p>{recipe.calories}</p>
            <p>{recipe.difficulty}</p>
            <img src={recipe.image} alt="" />
        </article>
    )
}

