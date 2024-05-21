import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { RecipesSliceType, createRecipesSlices } from "./recipeSlice";
import { FavoritesSliceType, CreateFavoritesSlice } from "./favoritesSlice";
import { NotificationSliceType, createNotificationSlice } from "./notificationSlice";


export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlices(...a),
    ...CreateFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))

