import axios from "axios"
import { CategoriesAPIResponseSchema, DrinksAPIRepsonse, RecipeAPIResponseSchema } from "../utils/recipes-schema"
import { Drink, SearchFilter } from "../types"

export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data} = await axios(url)
    const result = CategoriesAPIResponseSchema.safeParse(data)
    
    if(result.success) {
        return result.data
    }
}
export async function getRecipes(filters: SearchFilter) {

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filters.ingredient}`
    const {data} = await axios(url)
    const result = DrinksAPIRepsonse.safeParse(data)
    if (result.success) {
        const drinks = result.data.drinks
        if(filters.category === 'All') {
            return { drinks }
        }
        const filteredDrinks = drinks.filter(drink => drink.strCategory === filters.category)
        return { drinks: filteredDrinks }
    }
    return { drinks: [] }
}

export async function getRecipeById(id: Drink['idDrink']) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data } = await axios(url)
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
    if(result.success) {
        return result.data
    }
}
