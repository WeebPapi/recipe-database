import { nanoid } from "@reduxjs/toolkit"
import { FilterType } from "./store/displayList/displayList.slice"

interface FilterData {
  category: FilterType
  filterList: string[]
  id: string
}
export const filtersBarData: FilterData[] = [
  {
    category: "cuisine",
    filterList: [
      "Eastern European",
      "Italian",
      "Greek",
      "French",
      "Asian",
      "American",
      "Mexican",
      "Indian",
      "Chinese",
      "Japanese",
      "Thai",
      "Korean",
    ],
    id: nanoid(6),
  },
  {
    category: "includeIngredients",
    filterList: [
      "Beef",
      "Fish",
      "Rice",
      "Pasta",
      "Tomato",
      "Potato",
      "Cheese",
      "Eggs",
      "Cucumber",
      "Flour",
    ],
    id: nanoid(6),
  },
  {
    category: "diet",
    filterList: [
      "Gluten Free",
      "Vegan",
      "Vegetarian",
      "Ketogenic",
      "Pescetarian",
      "Paleo",
    ],
    id: nanoid(6),
  },
  {
    category: "type",
    filterList: ["Breakfast", "Brunch", "Lunch", "Supper", "Dessert", "Snack"],
    id: nanoid(6),
  },
]
