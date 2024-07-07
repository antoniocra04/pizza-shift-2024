import type { PizzaIngredient, PizzaSize } from '@api/__generated__/graphql';

export const calculateTotalPrice = (
  size: PizzaSize,
  selectedToppings: PizzaIngredient[]
): number => {
  const totalPrice = 0;
  return (
    size.price + selectedToppings.reduce((acc, ingredient) => acc + ingredient.cost, totalPrice)
  );
};
