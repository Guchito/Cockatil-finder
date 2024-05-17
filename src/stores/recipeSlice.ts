import { StateCreator } from "zustand"

type Category = {}


export type RecipesSliceType = {
    categories: Category[]
}


export const createRecipesSlices : StateCreator<RecipesSliceType> = () => ({
    categories: []
})