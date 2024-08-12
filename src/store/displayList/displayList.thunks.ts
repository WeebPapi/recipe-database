import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axiosInstance";

export const getRecipes = createAsyncThunk(
  "displayList/getRecipes",
  async (_, ThunkApi) => {
    try {
      const res = await axiosInstance.get("1003464");
      return ThunkApi.fulfillWithValue(res);
    } catch {
      return ThunkApi.rejectWithValue("Something Went Wrong");
    }
  }
);
