import { gql } from '../../__generated__/gql';

export const GET_PIZZA_CATALOG = gql(`
query getPizzasCatalog {
  getPizzasCatalog {
    catalog{
      description
      id
      img
      ingredients{
        name
      }
      name
      sizes{
        name
        price
      }
      toppings{
        cost
        img
        name
      }
    }
  }
}
`);
