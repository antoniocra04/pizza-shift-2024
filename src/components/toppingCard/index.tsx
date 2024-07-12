import { useState } from 'react';
import type { Ingredient } from '@api/__generated__/graphql';
import { PizzaIngredient } from '@utils/PizzaIngredient';
import { clsx } from 'clsx';

import styles from './style.module.scss';

interface ToppingCardProps {
  img: string;
  name: Ingredient;
  price: number;
  onClick: (name: Ingredient, price: number) => void;
}

export const ToppingCard = ({ img, name, price, onClick }: ToppingCardProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    onClick(name, price);
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={clsx(styles.topping_card, isSelected ? styles.active : '')}
      onClick={handleSelect}
    >
      <div>
        <img width={100} src={img} alt='' />
        <p className={styles.topping_text}>{PizzaIngredient[name]}</p>
      </div>
      <p className={styles.topping_price}>{price}₽</p>
    </div>
  );
};
