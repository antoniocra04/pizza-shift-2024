import { useState } from 'react';
import type { Ingredient, Pizza, PizzaIngredientInput } from '@api/__generated__/graphql';
import { ToppingCard } from '@components/toppingCard';
import { isIngredientExist } from '@helpers/isIngredientExist';
import type { CartPizza } from '@store/cart/cartSlice';
import { Button } from '@ui/button';
import { Modal } from '@ui/modal';
import { Tabs } from '@ui/tabs';

import styles from './style.module.scss';

interface PizzaModalProps {
  onClose: () => void;
  pizza: Pizza | CartPizza;
  onClick: (toppings: PizzaIngredientInput[], currentSize: number) => void;
}

export const PizzaModal = ({ pizza, onClick, onClose }: PizzaModalProps) => {
  const [currentSize, setCurrentSize] = useState(0);
  const [toppings, setToppings] = useState<PizzaIngredientInput[]>([]);

  const handleClickIngredient = (name: Ingredient, price: number) => {
    let newToppings: PizzaIngredientInput[] = [];

    if (isIngredientExist(toppings, name)) {
      newToppings = toppings.filter((t) => t.name !== name);
    } else {
      newToppings = newToppings.concat(toppings);
      newToppings.push({ img: '', name, cost: price });
    }

    setToppings(newToppings);
  };

  return (
    <Modal onClose={onClose}>
      <div className={styles.pizza_modal}>
        <div>
          <img width={220} src={`${import.meta.env.VITE_BACKEND_URL}${pizza.img}`} alt='' />
        </div>
        <div className={styles.pizza_modal__info}>
          <div className={styles.pizza_modal__scroll}>
            <div className={styles.pizza_modal__info_text}>
              <h2 className={styles.pizza_modal__title}>{pizza.name}</h2>
              <p className={styles.pizza_modal__subtitle}>
                {currentSize * 5 + 30} см, традиционное тесто
              </p>
              <p className={styles.pizza_modal__ingredients}>
                {pizza.ingredients.map((ing) => `${ing.name} `)}
              </p>
            </div>
            <Tabs
              tabs={pizza.sizes.map((size) => size.name)}
              setActive={setCurrentSize}
              active={currentSize}
            />
            <p className={styles.pizza_modal__add_text}>Добавить по вкусу</p>
            <div className={styles.pizza_modal__topings}>
              {pizza.toppings.map(({ cost, img, name }) => (
                <ToppingCard
                  onClick={handleClickIngredient}
                  key={name}
                  img={`https://shift-backend.onrender.com${img}`}
                  name={name}
                  price={cost}
                />
              ))}
            </div>
          </div>
          <Button onClick={() => onClick(toppings, currentSize)}>Добавить в корзину</Button>
        </div>
      </div>
    </Modal>
  );
};
