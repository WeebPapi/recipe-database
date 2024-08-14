import { nanoid } from "@reduxjs/toolkit";

interface FilterData {
  category: string;
  filterList: string[];
  id: string;
}
export const filtersBarData: FilterData[] = [
  {
    category: "cuisine",
    filterList: ["Italian", "Georgian", "French"],
    id: nanoid(6),
  },
  {
    category: "ingredients",
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
    category: "diet",
    filterList: ["Omnivore", "Vegan", "Vegetarian", "Keto", "Pescatarian"],
    id: nanoid(6),
  },
  {
    category: "type",
    filterList: ["Breakfast", "Brunch", "Lunch", "Supper", "Dessert", "Snack"],
    id: nanoid(6),
  },
];
