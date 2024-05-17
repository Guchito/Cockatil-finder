import { create } from "zustand";
import { RecipesSliceType, createRecipesSlices } from "./recipeSlice";

export const useAppStore = create<RecipesSliceType> ((...a) => ({
    ...createRecipesSlices(...a)
}))