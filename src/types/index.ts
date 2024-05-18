import {z} from 'zod'
import { CategoriesAPIResponseSchema, DrinkAPIRepsonse, DrinksAPIRepsonse, SearchFilterSchema } from '../utils/recipes-schema'

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIRepsonse>
export type Drink = z.infer<typeof DrinkAPIRepsonse>