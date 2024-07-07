import type { Ingredient, PizzaIngredientInput } from '@api/__generated__/graphql';

export const isIngredientExist = (
  ingredients: PizzaIngredientInput[],
  name: Ingredient
): boolean => {
  const isExist = ingredients.some((ingredient: PizzaIngredientInput) => ingredient.name === name);
  return isExist;
};
