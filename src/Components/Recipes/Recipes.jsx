import PropTypes from 'prop-types';
import { RecipeInfo } from "../RecipeInfo/RecipeInfo.jsx";
import {RecipesList, RecipesItem} from './Recipes.js'
import { Buttons } from '../Button/Button.jsx';
import {TitleOfCard} from '../CardTitle/CardTitle.jsx'

export const Recipes = ({ recipes }) => {
    return (
        <RecipesList>
            {recipes.map(recipe =>
                <RecipesItem  key={recipe.id}>
                    <TitleOfCard/>
                    <RecipeInfo recipe={recipe} />
                    <Buttons/>
                </RecipesItem>)}
        </RecipesList>
    )
}

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired  
}