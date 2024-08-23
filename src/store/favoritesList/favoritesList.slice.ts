import { createSlice } from "@reduxjs/toolkit"
import { RecipeCardProps } from "../../Components/RecipeCard/RecipeCard"

const initialState: RecipeCardProps[] = []

const favoritesListSlice = createSlice({
  name: "FavoritesList",
  initialState,
  reducers: {
    addFavorite: (
      state,
      action: { type: string; payload: RecipeCardProps }
    ) => {
      if (state.filter((item) => item.id === action.payload.id).length === 0)
        state.push(action.payload)
    },
    removeFavorite: (state, action: { type: string; payload: number }) => {
      return state.filter((item) => item.id !== action.payload)
    },
  },
})

export const favoritesListReducer = favoritesListSlice.reducer
export const { addFavorite, removeFavorite } = favoritesListSlice.actions
