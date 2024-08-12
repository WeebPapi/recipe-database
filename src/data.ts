import { nanoid } from "@reduxjs/toolkit";

interface FilterData {
  category: string;
  filterList: string[];
  id: string;
}
export const filtersBarData: FilterData[] = [
  {
    category: "Cuisine",
    filterList: ["Italian", "Georgian", "French"],
    id: nanoid(6),
  },
  {
    category: "Ingredients",
    filterList: [
      "Chicken",
      "Beef",
      "Fish",
      "Rice",
      "Pasta",
      "Tomato",
      "Potato",
    ],
    id: nanoid(6),
  },
  {
    category: "Diet",
    filterList: ["Omnivore", "Vegan", "Vegetarian", "Keto", "Pescatarian"],
    id: nanoid(6),
  },
  {
    category: "Type",
    filterList: ["Breakfast", "Brunch", "Lunch", "Supper", "Dessert", "Snack"],
    id: nanoid(6),
  },
];
