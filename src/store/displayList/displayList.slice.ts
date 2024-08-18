import { createSlice } from "@reduxjs/toolkit"
import { getRecipeById, getRecipes } from "./displayList.thunks"
import { Ingredients } from "../../Components/DisplayedCards/DisplayedCards"
import { RecipeType } from "../../recipeType"

interface DisplayListElement {
  id: number
  image?: string
  readyInMinutes: number
  dishTypes: string[]
  title: string
  vegan: boolean
  vegetarian: boolean
  extendedIngredients: Ingredients[]
}

export interface DetailedRecipe extends DisplayListElement {
  analyzedInstructions: RecipeType["analyzedInstructions"]
  instructions: string
  summary: string
  sourceUrl: string
  servings: number
  preparationMinutes: number
  cookingMinutes: number
}

interface FilterActionInterface {
  payload: {
    type: FilterType
    name: string
  }
  type: string
}

const initialState: {
  displayList: DisplayListElement[]
  filters: {
    cuisine: string[]
    type: string[]
    includeIngredients: string[]
    diet: string[]
  }
  currentUrl: string
  detailedRecipe?: DetailedRecipe | {}
} = {
  displayList: [],
  filters: {
    cuisine: [],
    type: [],
    includeIngredients: [],
    diet: [],
  },
  detailedRecipe: {},
  currentUrl: "random?number=5&",
}

export type FilterType = "cuisine" | "type" | "includeIngredients" | "diet"

const displayListSlice = createSlice({
  name: "displayList",
  initialState,
  reducers: {
    addFilter: (state, action: FilterActionInterface) => {
      if (!state.filters[action.payload.type].includes(action.payload.name))
        state.filters[action.payload.type].push(action.payload.name)
    },
    removeFilter: (state, action: FilterActionInterface) => {
      if (state.filters[action.payload.type].includes(action.payload.name)) {
        const list = state.filters[action.payload.type]
        state.filters[action.payload.type] = list.filter(
          (item) => item !== action.payload.name
        )
      }
    },
    filterUrl: (state, action: { payload: string }) => {
      if (
        state.currentUrl !==
        "complexSearch?addRecipeInformation=true&fillIngredients=true&" +
          action.payload +
          "&number=5"
      )
        state.currentUrl =
          "complexSearch?addRecipeInformation=true&fillIngredients=true&" +
          action.payload +
          "&number=5"
    },
    resetUrl: (state) => {
      state.currentUrl = "random?number=5&"
    },
  },
  extraReducers(builder) {
    builder.addCase(getRecipes.fulfilled, (state, action) => {
      let recipes
      if (action.payload.data.recipes) recipes = action.payload.data.recipes
      if (action.payload.data.results) recipes = action.payload.data.results

      state.displayList = recipes.map((data: RecipeType) => ({
        id: data.id,
        image: data.image,
        readyInMinutes: data.readyInMinutes,
        title: data.title,
        vegan: data.vegan,
        vegetarian: data.vegetarian,
        dishTypes: data.dishTypes,
        extendedIngredients: data.extendedIngredients,
      }))
    })
    builder.addCase(getRecipeById.fulfilled, (state, action) => {
      const recipe: RecipeType = action.payload.data
      state.detailedRecipe = {
        id: recipe.id,
        image: recipe.image,
        readyInMinutes: recipe.readyInMinutes,
        preparationMinutes: recipe.preparationMinutes,
        cookingMinutes: recipe.cookingMinutes,
        title: recipe.title,
        vegan: recipe.vegan,
        vegetarian: recipe.vegetarian,
        dishTypes: recipe.dishTypes,
        extendedIngredients: recipe.extendedIngredients,
        analyzedInstructions: recipe.analyzedInstructions,
        instructions: recipe.instructions,
        summary: recipe.summary,
        sourceUrl: recipe.sourceUrl,
        servings: recipe.servings,
      }
    })
  },
})

export const { addFilter, filterUrl, removeFilter, resetUrl } =
  displayListSlice.actions
export const displayListReducer = displayListSlice.reducer
