import { useState } from "react"
import { SubmitHandler } from "react-hook-form"

import { Dough } from "@api/__generated__/graphql"

import { PageLayout } from "@components/pageLayout"
import { PageTitle } from "@components/pageTitle"
import { PaymentForm, PaymentFormInputs } from "@components/paymentForm"
import { PaymentSuccsessModal } from "@components/paymentSuccsessModal"

import { useCreateOrder } from "@hooks/useCreateOrder/useCreateOrder"

import { clearCart } from "@store/cart/cartSlice"
import { useTypedDispatch, useTypedSelector } from "@store/hooks/baseHooks"

export const PaymentPage = () => {
    const [createOrder, {data}] = useCreateOrder()
    const [isModalActive, setIsModalActive] = useState(false);
    const showModal = isModalActive && data;
    const orderInfo = useTypedSelector((state) => state.orderInfo)
    const cart = useTypedSelector((state) => state.cart)
    const cartDispatch = useTypedDispatch()

    const onSubmit: SubmitHandler<PaymentFormInputs>  = (data) => {
        const {number, cvv, date} = data
        createOrder({
            variables:{
                number:{
                    pan: number,
                    cvv,
                    expireDate: date
                },
                person:{
                    firstname: orderInfo.name,
                    lastname: orderInfo.surname,
                    phone: orderInfo.phone,
                    middlename: ''
                },
                pizzas: cart.products.map((product) => ({
                    description: '',
                    doughs:{
                        name: Dough.Thin,
                        price: 0
                    },
                    id: '1',
                    name: product.name,
                    size: product.sizes.map((size) => ({name: size.name, price: size.price})),
                    toppings: product.selectedToppings,
                })),
                address:{
                    ...orderInfo.address,
                    comment: ''
                }
            }
        }).then(() => {
            setIsModalActive(true)
            cartDispatch(clearCart())
        })
    }

    return(
        <PageLayout>
            <PageTitle title="Введите данные карты для оплаты" />
            <PaymentForm onSubmit={onSubmit}/>
            {
                showModal && <PaymentSuccsessModal order={cart.products.map((product) => product.name + ' ').toString()} price={cart.cartTotalPrice} address={`${orderInfo.address.street}, ${orderInfo.address.house}, ${orderInfo.address.apartment}`} />
            }
        </PageLayout>
    )
}