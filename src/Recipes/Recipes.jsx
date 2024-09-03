import PropTypes from 'prop-types';
import { RecipeInfo } from "../RecipeInfo/RecipeInfo";
import styles from "./Recipes.module.css";

export const Recipes = ({ recipes }) => {
    return (
        <ul className={styles.list}>
            {recipes.map(recipe =>
                <li key={recipe.id} className={styles.item}>
                    <RecipeInfo recipe={recipe} />
                </li>)}
        </ul>
    )
}

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired  
}