import PropTypes from 'prop-types';
import { RecipeInfo } from "../RecipeInfo/Recipe";

export const Recipes = ({ recipes }) => {
    return (
        <ul>
            {recipes.map(recipe =>
                <li key={recipe.id}>
                    <RecipeInfo recipe={recipe} />
                </li>)}
        </ul>
    )
}

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired  
}