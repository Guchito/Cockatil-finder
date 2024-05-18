import { z } from 'zod'

export const CategoriesAPIResponseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
    }))
})

export const SearchFilterSchema = z.object({
    ingredient: z.string(),
    category: z.string() 
})



export const DrinkAPIRepsonse = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string()
})

export const DrinksAPIRepsonse = z.object({
    drinks: z.array(DrinkAPIRepsonse)
})