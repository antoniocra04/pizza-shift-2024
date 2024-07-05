import { CREATE_ORDER } from "@api/services/orders"
import { useMutation } from "@apollo/client"

export const useCreateOrder = () => {
    return useMutation(CREATE_ORDER)
}