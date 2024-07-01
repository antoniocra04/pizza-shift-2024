import { GET_PIZZA_CATALOG } from "@api/services/catalog"
import { PizzaCard } from "@components/pizzaCard";
import { useQuery } from "@apollo/client"

import styles from "./style.module.scss";

export const PizzaCatalog: React.FC = () => {
    const {loading, data} = useQuery(GET_PIZZA_CATALOG);
    return(
        <div className={styles.pizza_catalog}>
            {
                loading ?
                "sdf"
                :
                data?.getPizzasCatalog.catalog.map((pizza, index) => (
                    <PizzaCard key={index} title={pizza.name} subtitle={pizza.description} price={pizza.sizes[0].price} img={pizza.img} />
                ))
            }
        </div>
    )
}