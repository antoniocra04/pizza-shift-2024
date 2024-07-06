import { useState } from "react"

import { CartPizzaCard } from "@components/cartPizzaCard"
import { PizzaModal } from "@components/pizzaModal"

import { useTypedDispatch, useTypedSelector } from "@store/hooks/baseHooks"
import { CartPizza, editProduct, removeProduct } from "@store/cart/cartSlice"

import { PizzaIngredientInput } from "@api/__generated__/graphql"

import { calculateTotalPrice } from "@helpers/calculateTotalPrice"

import style from './style.module.scss'

export const CartList = () => {
    const [isModalActive, setIsModalActive] = useState(false)
    const [selectedPizza, setSelectedPizza] = useState<CartPizza>()
    const cartDispatch = useTypedDispatch();

    const products = useTypedSelector((state) => state.cart.products)
    const showModal = isModalActive && selectedPizza

    const selectPizza = (pizza: CartPizza) => {
        setIsModalActive(true);
        setSelectedPizza(pizza);
      };

    const editPizza = (toppings: PizzaIngredientInput[], currentSize: number) => {
        if(selectedPizza){
            cartDispatch(editProduct({
              img: selectedPizza.img,
              toppings: selectedPizza.toppings,
              ingredients: selectedPizza.ingredients.concat(toppings),
              selectedIngredients: selectedPizza.ingredients.concat(toppings),
              selectedToppings: toppings,
              name: selectedPizza.name,
              sizes: selectedPizza.sizes,
              currentSize: selectedPizza.sizes[currentSize],
              count: 1,
              totalPrice: calculateTotalPrice(selectedPizza.sizes[currentSize], toppings)
            }))
        }
        setIsModalActive(false)
    }
    
    return(
        <div className={style.cart_list}>
            {
                products.map((product) => (
                    <CartPizzaCard pizza={product} {...product} onChange={() => selectPizza(product)} onDelete={() => cartDispatch(removeProduct(product))}/>
                ))
            }
            {showModal && <PizzaModal setActive={setIsModalActive} pizza={selectedPizza} onClick={editPizza} />}
        </div>
    )
}