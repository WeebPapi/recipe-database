import { RouteObject } from "react-router-dom";
import { Layout } from "./Components";
import { DetailPage, FavoritesPage, HomePage } from "./Pages";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: Layout(),
    children: [
      {
        path: "/",
        element: HomePage(),
      },
      {
        path: "/recipes/:recipeId",
        element: DetailPage(),
      },
      {
        path: "/favorites",
        element: FavoritesPage(),
      },
    ],
  },
];
