import { useState } from 'react';
import {
  type PizzaIngredientInput,
  type PizzaInput,
  useGetPizzasCatalogQuery
} from '@api/__generated__/graphql';
import { PizzaCard } from '@components/pizzaCard';
import { PizzaModal } from '@components/pizzaModal';
import { calculateTotalPrice } from '@helpers/calculateTotalPrice';
import { useDispatch } from '@store/baseHooks';
import { addProduct } from '@store/cart/cartSlice';

import styles from './style.module.scss';

export const PizzaCatalog = () => {
  const { loading, data } = useGetPizzasCatalogQuery();
  const [selectedPizza, setSelectedPizza] = useState<PizzaInput>();
  const [isModalActive, setIsModalActive] = useState(false);
  const cartDispatch = useDispatch();
  const showModal = isModalActive && data;

  const selectPizza = (pizzaId: string) => {
    setIsModalActive(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setSelectedPizza(data.getPizzasCatalog.catalog.find((pizza) => pizza.id === pizzaId));
  };

  const addToCart = (toppings: PizzaIngredientInput[], currentSize: number) => {
    if (selectedPizza) {
      cartDispatch(
        addProduct({
          img: selectedPizza.img,
          toppings: selectedPizza.toppings,
          ingredients: selectedPizza.ingredients,
          selectedIngredients: selectedPizza.ingredients.concat(toppings),
          selectedToppings: toppings,
          name: selectedPizza.name,
          sizes: selectedPizza.sizes,
          currentSize: selectedPizza.sizes[currentSize],
          count: 1,
          totalPrice: calculateTotalPrice(selectedPizza.sizes[currentSize], toppings)
        })
      );
    }
    setIsModalActive(false);
  };

  return (
    <div className={styles.pizza_catalog}>
      {loading
        ? 'sdf'
        : data?.getPizzasCatalog.catalog.map(({ name, description, sizes, img, id }) => (
            <PizzaCard
              key={id}
              title={name}
              subtitle={description}
              price={sizes[0].price}
              img={img}
              onClick={() => selectPizza(id)}
            />
          ))}
      {showModal && (
        <PizzaModal
          onClose={() => setIsModalActive(false)}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          pizza={selectedPizza}
          onClick={addToCart}
        />
      )}
    </div>
  );
};
