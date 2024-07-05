import { useNavigate } from "react-router-dom"

import { Button } from "@ui/button"

import { useTypedSelector } from "@store/hooks/baseHooks"

import styles from './style.module.scss'

export const CartTotalLabel = () => {
    const cartTotalPrice = useTypedSelector((state) => state.cart.cartTotalPrice)
    const navigate = useNavigate();
    return(
        <div className={styles.cart_total_label}>
            <p className={styles.cart_total_label__text}>Стоимость заказа: {cartTotalPrice}₽</p>
            <Button onClick={() => navigate('/createOrder')}>Оформить заказ</Button>
        </div>
    )
}