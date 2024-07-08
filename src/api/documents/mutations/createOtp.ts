import { gql } from '../../__generated__/gql';

export const CREATE_OTP = gql(`
    mutation CreateOtp($phone: String!){
        createOtp(phone: $phone){
            reason,
            success
        }
    }
`);
