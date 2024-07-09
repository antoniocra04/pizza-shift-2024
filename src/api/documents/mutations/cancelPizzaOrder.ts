import { gql } from '../../__generated__/gql';

export const CANCEL_ORDER = gql(
  `
        mutation CancelOrder($orderId: String!){
            cancelPizzaOrder(orderId: $orderId){
                reason,
                success
            }
        }
    `
);
