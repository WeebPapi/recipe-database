import React from "react"
import "./FavoritesPage.css"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { RecipeCard } from "../../Components"

const FavoritesPage: React.FC = () => {
  const favoritesArray = useSelector((state: RootState) => state.favoritesList)
  return (
    <div className="favorited-recipes">
      {favoritesArray.map((item) => (
        <RecipeCard
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          readyInMinutes={item.readyInMinutes}
          extendedIngredients={item.extendedIngredients}
          vegan={item.vegan}
          vegetarian={item.vegetarian}
          dishTypes={item.dishTypes}
        />
      ))}
    </div>
  )
}

export default FavoritesPage
