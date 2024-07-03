
import { useState } from "react";
import { GET_PIZZA_CATALOG } from "@api/services/catalog"
import { PizzaCard } from "@components/pizzaCard";
import { PizzaModal } from "@components/pizzaModal";
import { useQuery } from "@apollo/client"

import styles from "./style.module.scss";

export const PizzaCatalog: React.FC = () => {
    const {loading, data} = useQuery(GET_PIZZA_CATALOG);
    const [selectedPizza, setSelectedPizza] = useState("");
    const [isModalActive, setIsModalActive] = useState(false);

    const selectPizza = (pizzaId: string) => {
        setIsModalActive(true)
        setSelectedPizza(pizzaId)
    }

    return(
        <div className={styles.pizza_catalog}>
            {
                loading ?
                "sdf"
                :
                data?.getPizzasCatalog.catalog.map((pizza, index) => (
                    <PizzaCard key={index} title={pizza.name} subtitle={pizza.description} price={pizza.sizes[0].price} img={pizza.img} onClick={() => selectPizza(pizza.id)} />
                ))
            }
            {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                isModalActive && <PizzaModal setActive={setIsModalActive} pizza={data && data.getPizzasCatalog.catalog[parseInt(selectedPizza)-1]}/>
            }

        </div>
    )
}