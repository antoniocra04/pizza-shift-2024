import { gql } from '../../__generated__/gql';

export const GET_PIZZA_ORDERS = gql(`
query getPizzaOrder($orderId: String!) {
  getPizzaOrder(orderId: $orderId) {
    order{
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
