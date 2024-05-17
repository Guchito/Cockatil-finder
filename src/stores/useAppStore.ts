import { create } from "zustand";
import {devtools} from 'zustand/middleware'
import { RecipesSliceType, createRecipesSlices } from "./recipeSlice";

export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({
    ...createRecipesSlices(...a)
})))