import { useState } from 'react';
import { GET_PIZZA_CATALOG } from '@api/services/catalog';
import { PizzaCard } from '@components/pizzaCard';
import { PizzaModal } from '@components/pizzaModal';
import { useQuery } from '@apollo/client';

import styles from './style.module.scss';
import { PizzaInput } from '@api/__generated__/graphql';

export const PizzaCatalog = () => {
  const { loading, data } = useQuery(GET_PIZZA_CATALOG);
  const [selectedPizza, setSelectedPizza] = useState<PizzaInput>();
  const [isModalActive, setIsModalActive] = useState(false);
  const showModal = isModalActive && data;

  const selectPizza = (pizzaId: string) => {
    setIsModalActive(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    setSelectedPizza(data.getPizzasCatalog.catalog.find((pizza) => pizza.id == pizzaId));
  };

  return (
    <div className={styles.pizza_catalog}>
      {loading
        ? 'sdf'
        : data?.getPizzasCatalog.catalog.map(({name, description, sizes, img, id}) => (
            <PizzaCard
              key={id}
              title={name}
              subtitle={description}
              price={sizes[0].price}
              img={img}
              onClick={() => selectPizza(id)}
            />
          ))}
      {

         showModal && (
          <PizzaModal
            setActive={setIsModalActive}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            pizza={selectedPizza}
          />
        )
      }
    </div>
  );
};
