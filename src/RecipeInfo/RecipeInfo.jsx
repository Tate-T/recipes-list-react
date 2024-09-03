import PropTypes from 'prop-types'
import styles from "./ResipeInfo.module.css"

export const RecipeInfo = ({ recipe }) => {
    return (
        <article className={styles.article}>
            <h2>{recipe.name}</h2>
            <p>{recipe.time}</p>
            <p>{recipe.servings}</p>
            <p>{recipe.calories}</p>
            <p>{recipe.difficulty}</p>
            <img src={recipe.image} alt="" />
        </article>
    )
}

RecipeInfo.propTypes = {
    recipe: PropTypes.shape({
        name: PropTypes.string,
        time: PropTypes.string,
        servings: PropTypes.number,
        calories: PropTypes.number,
        difficulty: PropTypes.number,
        image: PropTypes.string
    })
}