import { RecipeCard } from "./RecipeCard/RecipeCard";
import { useEffect, useState } from "react";
import { get, getFavorites } from "../utils/httpClient";
import styles from "./RecipeGrid/RecipesGrid.module.css";
import { Loader } from "./Loader/Loader";
import { filterRecipesByReference } from "../utils/FilterHelper";
import FavDeleteButton from "./FavButtons/FavDeleteButton";

export function FavoritesGrid({ userId }) {
    const [recipes, setRecipes] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getFavorites("favorites/" + JSON.parse(localStorage.getItem("user")).id)
            .then(data => {
                setIsLoading(false);
                setFavorites(data);
            });
        get("recipes")
            .then(data => {
                setIsLoading(false);
                setRecipes(data);
            })
    }, [userId]);

    var filteredRecipes = [];
    console.log(favorites);
    filteredRecipes = filterRecipesByReference(recipes, favorites);
    console.log(filteredRecipes);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <ul className={styles.recipesGrid}>
            {filteredRecipes.map(recipe => (
                <center key={recipe.id}>
                    <RecipeCard recipe={recipe} />
                    <FavDeleteButton id={recipe.favoriteId} />
                </center>
            ))}
        </ul>
    );
}

export default FavoritesGrid;
