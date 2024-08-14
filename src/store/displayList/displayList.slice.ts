import { createSlice } from "@reduxjs/toolkit";
import { getRecipes } from "./displayList.thunks";
import { Ingredients } from "../../Components/DisplayedCards/DisplayedCards";
import { RecipeType } from "../../recipeType";

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
  filters: {
    cuisine: string[];
    type: string[];
    ingredients: string[];
    diet: string[];
  };
  currentUrl: string;
} = {
  displayList: [],
  filters: {
    cuisine: [],
    type: [],
    ingredients: [],
    diet: [],
  },
  currentUrl: "random?number=5&",
};

const displayListSlice = createSlice({
  name: "displayList",
  initialState,
  reducers: {
    addFilter: (
      state,
      action: {
        payload: {
          type: "cuisine" | "type" | "ingredients" | "diet";
          name: string;
        };
        type: string;
      }
    ) => {
      state.filters[action.payload.type].push(action.payload.name);
    },
    filterUrl: (state, action: { payload: string }) => {
      state.currentUrl =
        "complexSearch?addRecipeInformation=true&fillIngredients=true&" +
        action.payload +
        "&number=5";
    },
  },
  extraReducers(builder) {
    builder.addCase(getRecipes.fulfilled, (state, action) => {
      console.log(action);
      let recipes;
      if (action.payload.data.recipes) recipes = action.payload.data.recipes;
      if (action.payload.data.results) recipes = action.payload.data.results;

      state.displayList = recipes.map((data: RecipeType) => ({
        id: data.id,
        image: data.image,
        readyInMinutes: data.readyInMinutes,
        title: data.title,
        vegan: data.vegan,
        vegetarian: data.vegetarian,
        dishTypes: data.dishTypes,
        extendedIngredients: data.extendedIngredients,
      }));
    });
  },
});

export const { addFilter, filterUrl } = displayListSlice.actions;
export const displayListReducer = displayListSlice.reducer;
