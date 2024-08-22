import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { displayListReducer } from "./displayList/displayList.slice"
import { favoritesListReducer } from "./favoritesList/favoritesList.slice"

const rootReducer = combineReducers({
  displayList: displayListReducer,
  favoritesList: favoritesListReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
