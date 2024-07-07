import { useEffect, useState } from 'react';
import { CrossIcon } from '@icons/CrossIcon';
import type { CartPizza } from '@store/cart/cartSlice';
import { editProduct } from '@store/cart/cartSlice';
import { useTypedDispatch } from '@store/hooks/baseHooks';
import { Counter } from '@ui/counter';

import styles from './style.module.scss';

interface CartPizzaCardProps {
  pizza: CartPizza;
  onChange: () => void;
  onDelete: () => void;
}

export const CartPizzaCard = ({ onChange, onDelete, pizza }: CartPizzaCardProps) => {
  const [count, setCount] = useState(pizza.count);
  const cartDispatch = useTypedDispatch();

  useEffect(() => {
    cartDispatch(editProduct({ ...pizza, count }));
  }, [count]);

  return (
    <div className={styles.cart_pizza_card}>
      <img width={65} src={`${import.meta.env.VITE_BACKEND_URL}${pizza.img}`} alt='' />
      <p className={styles.cart_pizza_card__name}>{pizza.name}</p>
      <p className={styles.cart_pizza_card__ingredients}>
        {pizza.currentSize.name} {pizza.selectedIngredients.map((ing) => `${ing.name} `)}
      </p>
      <Counter count={count} setCount={setCount} />
      <button type='button' className={styles.cart_pizza_card__change} onClick={onChange}>
        Изменить
      </button>
      <p className={styles.cart_pizza_card__price}>{pizza.totalPrice}₽</p>
      <CrossIcon className={styles.cart_pizza_card__icon} onClick={onDelete} />
    </div>
  );
};
