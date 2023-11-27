export function filterRecipesByReference(recipes, referenceArray) {
  const filteredRecipes = [];
  for (const reference of referenceArray) {
    const matchingRecipe = recipes.find(recipe => recipe.id === reference.RecipeId);
    if (matchingRecipe) {
      const filteredRecipe = { ...matchingRecipe, favoriteId: reference.id };
      filteredRecipes.push(filteredRecipe);
    }
  }
  return filteredRecipes;
}
