import styles from "./RecipeCard.module.css";
import { Link } from "react-router-dom";

export function RecipeCard({ recipe }) {
    var imageUrl = "http://localhost:8000/" + recipe.image.replace(/^uploads\\/, '')
    

    return (
        <li className={styles.recipeCard}>
            <Link to={"/recipes/" + recipe.id} >
            <img
                width={350}
                height={250}
                className={styles.recipeImage}
                alt={recipe.name}
                src={imageUrl}
            />
            < div className={styles.recipeName}>
            {recipe.name}
            </div>
            </Link>
        </li>
    );
};
