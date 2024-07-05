import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from '../index';
import { PizzaIngredientInput, PizzaSizeInput } from '@api/__generated__/graphql';
import { calculateTotalPrice } from '../../helpers/calculateTotalPrice';

export interface CartPizza{
    img: string;
    toppings: PizzaIngredientInput[];
    selectedToppings: PizzaIngredientInput[];
    ingredients: PizzaIngredientInput[];
    selectedIngredients: PizzaIngredientInput[];
    totalPrice: number;
    count: number;
    name: string;
    sizes: PizzaSizeInput[];
    currentSize: PizzaSizeInput;
}

interface CartState {
	products: CartPizza[];
    cartTotalPrice: number;
}

const initialState: CartState = {
	products: [],
    cartTotalPrice: 0
};

export const cartSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<CartPizza>) => {
			state.products = state.products.concat(action.payload)

            let totalCartPrice = 0;
            state.products.forEach((product) => {
                totalCartPrice = calculateTotalPrice(product.currentSize, product.selectedToppings)
            })
            state.cartTotalPrice = totalCartPrice;
            cartSlice.caseReducers.updateTotalCartPrice(state)
		},
        removeProduct: (state, action: PayloadAction<CartPizza>) => {
            state.products = state.products.filter((product) => product.name != action.payload.name)

            let totalCartPrice = 0;
            state.products.forEach((product) => {
                totalCartPrice = calculateTotalPrice(product.currentSize, product.selectedToppings)
            })
            state.cartTotalPrice = totalCartPrice;
            cartSlice.caseReducers.updateTotalCartPrice(state)
        },
        editProduct: (state, action: PayloadAction<CartPizza>) => {
            const {count, currentSize, ingredients, selectedToppings, totalPrice, name} = action.payload;
            const newProducts = state.products.concat()
            const index = state.products.findIndex((product) => product.name == name)

            newProducts[index].count = count
            newProducts[index].currentSize = currentSize
            newProducts[index].selectedToppings = selectedToppings
            newProducts[index].totalPrice = totalPrice
            newProducts[index].selectedIngredients =  ingredients.concat(selectedToppings)
            newProducts[index].selectedIngredients = newProducts[index].selectedIngredients.filter((ingredient, index, self) => self.indexOf(ingredient) == index)

            state.products = newProducts
            cartSlice.caseReducers.updateTotalCartPrice(state)
        },
        clearCart: () => initialState,
        updateTotalCartPrice: (state) => {
            let totalCartPrice = 0;
            state.products.forEach((product) => {
                totalCartPrice += calculateTotalPrice(product.currentSize, product.selectedToppings) * product.count
            })
            state.cartTotalPrice = totalCartPrice;
        }
	},
});

export const { addProduct, removeProduct, editProduct, clearCart } = cartSlice.actions;
export const selectCart = (state: RootState): CartState => state.cart;
export default cartSlice.reducer;