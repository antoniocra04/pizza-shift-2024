import { Button } from "@ui/button"
import styles from './style.module.scss'
import { useTypedSelector } from "@store/hooks/baseHooks"

export const CartTotalLabel = () => {
    const cartTotalPrice = useTypedSelector((state) => state.cart.cartTotalPrice)
    return(
        <div className={styles.cart_total_label}>
            <p className={styles.cart_total_label__text}>Стоимость заказа: {cartTotalPrice}₽</p>
            <Button>Оформить заказ</Button>
        </div>
    )
}