import { createSlice } from "@reduxjs/toolkit";
import { getRecipes } from "./displayList.thunks";

const initialState = {
  displayList: [],
  filters: [],
};

const displayListSlice = createSlice({
  name: "displayList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getRecipes.fulfilled, (_, action) => {
      console.log(action);
    });
  },
});

export const displayListReducer = displayListSlice.reducer;
