import { gql } from '../../__generated__/gql';

export const GET_PIZZA_ORDERS = gql(`
query getPizzaOrders {
  getPizzaOrders {
    orders{
      _id,
      cancellable,
      receiverAddress{
        apartment,
        comment,
        house,
        street
      }
      status
    }
  }
}
`);
