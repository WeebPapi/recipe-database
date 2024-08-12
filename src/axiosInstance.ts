import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const axiosInstance = axios.create({
  baseURL: "https://api.spoonacular.com/recipes/",
  headers: {
    "x-api-key": API_KEY,
    "Content-Type": "application/json",
  },
});
