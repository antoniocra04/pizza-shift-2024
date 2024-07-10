import { gql } from '../../__generated__/gql';

export const GET_PIZZA_CATALOG = gql(`
query GetSession {
  session {
    user{
        _id
        city,
        email,
        firstname,
        lastname,
        middlename,
        phone
    }
  }
}
`);
