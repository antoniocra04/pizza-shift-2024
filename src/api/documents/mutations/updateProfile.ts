import { gql } from '../../__generated__/gql';

export const CREATE_OTP = gql(`
    mutation UpdateProfile($phone: String!, $profile: UpdateProfileProfileDto!){
        updateProfile(phone: $phone, profile: $profile){
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
