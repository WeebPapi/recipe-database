import { createAsyncThunk } from "@reduxjs/toolkit"
import { axiosInstance } from "../../axiosInstance"

export const getRecipes = createAsyncThunk(
  "displayList/getRecipes",
  async (payload: string, ThunkApi) => {
    try {
      const res = await axiosInstance.get(payload)
      return ThunkApi.fulfillWithValue(res)
    } catch {
      return ThunkApi.rejectWithValue("Something Went Wrong")
    }
  }
)
export const getRecipeById = createAsyncThunk(
  "displaylist/getRecipeById",
  async (payload: string, ThunkApi) => {
    try {
      const res = await axiosInstance.get(payload)
      return ThunkApi.fulfillWithValue(res)
    } catch {
      return ThunkApi.rejectWithValue("Something Went Wrong")
    }
  }
)
