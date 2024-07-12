import { gql } from '../../__generated__/gql';

export const SIGN_IN = gql(`
    mutation SignIn($code: Float!, $phone: String!){
        signin(code: $code, phone: $phone){
            reason,
            success,
            token,
            user{
                lastname
                phone
                firstname
                email
            }
        }
    }
`);
