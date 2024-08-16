import React from "react"
import { Layout } from "./Components"
import { DetailPage, FavoritesPage, HomePage } from "./Pages"

export const routes = [
  {
    path: "/",
    element: React.createElement(Layout),
    children: [
      {
        path: "/",
        element: React.createElement(HomePage),
      },
      {
        path: "/recipes/:recipeId",
        element: React.createElement(DetailPage),
      },
      {
        path: "/favorites",
        element: React.createElement(FavoritesPage),
      },
    ],
  },
]
