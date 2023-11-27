import { RecipeCard } from "../RecipeCard/RecipeCard";
import { useEffect, useState } from "react";
import { get, getRecipes } from "../../utils/httpClient";
import styles from "./RecipesGrid.module.css";
import { Loader } from "../Loader/Loader";

export function RecipesGrid({ searchText = "", userId }) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    !!userId ? (getRecipes("recipes/users/" + userId)
      .then(data => {
        setIsLoading(false);
        setRecipes(data);
      })) : (get("recipes")
        .then(data => {
          setIsLoading(false);
          setRecipes(data);
        }))
      ;
  }, [userId]);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchText.toLowerCase())
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ul className={styles.recipesGrid}>
      {filteredRecipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
}

export default RecipesGrid;
