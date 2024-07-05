import { gql } from '../__generated__/gql';

export const CREATE_ORDER = gql(
    `
        mutation createOrder($number: CreatePizzaPaymentDebitCardDto!, $person: CreatePizzaPaymentPersonDto!, $pizzas: [CreatePizzaPaymentPizzaDto!]!, $address: CreatePizzaPaymentAddressDto!){
            createPizzaPayment(debitCard: $number, person: $person, pizzas: $pizzas, receiverAddress: $address){
                order{
                    cancellable,
                    status,
                    _id
                },
                reason,
                success
            }
        }
    `
)