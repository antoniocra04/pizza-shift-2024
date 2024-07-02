import { Ingredient, PizzaIngredientInput } from "@api/__generated__/graphql";

export const isIngredientExist = (ingredients: PizzaIngredientInput[], name: Ingredient) => {
    let isExist = false;
    for(let i = 0; i < ingredients.length; i++){
        if(ingredients[i].name == name){
            isExist = true;
            break;
        }
    }
    return isExist;
}