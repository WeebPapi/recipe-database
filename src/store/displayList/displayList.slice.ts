import { createSlice } from "@reduxjs/toolkit";
import { getRecipes } from "./displayList.thunks";
import { Ingredients } from "../../Components/DisplayedCards/DisplayedCards";

interface DisplayListElement {
  id: number;
  image: string;
  readyInMinutes: number;
  dishTypes: string[];
  title: string;
  vegan: boolean;
  vegetarian: boolean;
  extendedIngredients: Ingredients[];
}

const initialState: {
  displayList: DisplayListElement[];
  filters: string[];
} = {
  displayList: [],
  filters: [],
};

const displayListSlice = createSlice({
  name: "displayList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getRecipes.fulfilled, (state, action) => {
      const data = action.payload.data;
      state.displayList.push({
        id: data.id,
        image: data.image,
        readyInMinutes: data.readyInMinutes,
        title: data.title,
        vegan: data.vegan,
        vegetarian: data.vegetarian,
        dishTypes: data.dishTypes,
        extendedIngredients: data.extendedIngredients,
      });
    });
  },
});

export const displayListReducer = displayListSlice.reducer;
