import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { displayListReducer } from "./displayList/displayList.slice";

const rootReducer = combineReducers({ displayList: displayListReducer });

export const store = configureStore({
  reducer: rootReducer,
});
