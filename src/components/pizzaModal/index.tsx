import { useState } from 'react';
import { Ingredient, Pizza, PizzaIngredientInput } from '@api/__generated__/graphql';
import { CrossIcon } from '@icons/CrossIcon';
import { Button } from '@ui/button';

import { Tabs } from '@components/tabs';
import { ToppingCard } from '@components/toppingCard';
import { Modal } from '@components/modal';

import { isIngredientExist } from '../../helpers/isIngredientExist';

import styles from './style.module.scss';

interface PizzaModalProps {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  pizza: Pizza;
}

export const PizzaModal = ({ setActive, pizza }: PizzaModalProps) => {
  const [currentSize, setCurrentSize] = useState(0);
  const [toppings, setToppings] = useState<PizzaIngredientInput[]>([]);

  const handleClose = () => {
    setActive(false);
  };

  const handleClickIngredient = (name: Ingredient, price: number) => {
    let newToppings: PizzaIngredientInput[] = [];

    if (isIngredientExist(toppings, name)) {
      newToppings = toppings.filter((t) => t.name != name)
    } else {
      newToppings = newToppings.concat(toppings)
      newToppings.push({ img: '', name: name, cost: price })
    }

    setToppings(newToppings)
  };

  return (
    <Modal>
      <div className={styles.pizza_modal__cross}>
        <div onClick={handleClose}>
          <CrossIcon />
        </div>
      </div>
      <div className={styles.pizza_modal}>
        <div>
          <img width={220} src={`${import.meta.env.VITE_BACKEND_URL}${pizza.img}`} alt="" />
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
              {pizza.toppings.map(({cost, img, name}) => (
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

          <Button>Добавить в корзину</Button>
        </div>
      </div>
    </Modal>
  );
};
