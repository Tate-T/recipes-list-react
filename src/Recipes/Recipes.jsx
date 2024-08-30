
import { RecipeInfo } from "../RecipeInfo/Recipe"

export const Recipes = ({recipes}) => {
    return(
        <ul>
            {recipes.map(recipe=> 
            <li>
                <RecipeInfo recipe={recipe}/>
            </li>)}
        </ul>
    )
}

