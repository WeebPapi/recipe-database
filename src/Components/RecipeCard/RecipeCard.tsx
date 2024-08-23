import React, { useEffect, useRef, useState } from "react"
import { Badge } from "../"
import "./RecipeCard.css"
import { FaClock, FaHeart } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { nanoid } from "@reduxjs/toolkit"
import { RootState, useAppDispatch } from "../../store"
import {
  addFavorite,
  removeFavorite,
} from "../../store/favoritesList/favoritesList.slice"
import { useSelector } from "react-redux"

export interface RecipeCardProps {
  id: number
  title: string
  readyInMinutes: number
  image: string
  extendedIngredients: string[]
  vegan: boolean
  vegetarian: boolean
  dishTypes: string[]
}
type Badge = {
  type: boolean
  text: string
}
const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  title,
  readyInMinutes,
  image,
  extendedIngredients,
  vegan,
  vegetarian,
  dishTypes,
}) => {
  const firstLoad = useRef(false)
  const favorites = useSelector((state: RootState) => state.favoritesList)
  const navigate = useNavigate()
  const [badges, setBadges] = useState<Badge[]>([])
  const [dessert, setDessert] = useState(false)
  const [breakfast, setBreakfast] = useState(false)
  const [brunch, setBrunch] = useState(false)
  const [lunch, setLunch] = useState(false)
  const [snack, setSnack] = useState(false)
  const [favorited, setFavorited] = useState(
    favorites.filter((item) => item.id === id).length !== 0
  )

  const dispatch = useAppDispatch()

  const goToDetails = () => {
    navigate(`/recipes/${id}`)
  }
  const addToFavorites = () => {
    const newFavorited = !favorited
    setFavorited(newFavorited)
    if (newFavorited)
      dispatch(
        addFavorite({
          id,
          title,
          readyInMinutes,
          extendedIngredients,
          image,
          dishTypes,
          vegan,
          vegetarian,
        })
      )
    else if (!newFavorited) dispatch(removeFavorite(id))
  }
  useEffect(() => {
    if (!firstLoad.current) firstLoad.current = true

    if (dishTypes.includes("dessert")) setDessert(true)
    if (dishTypes.includes("breakfast")) setBreakfast(true)
    if (dishTypes.includes("brunch")) setBrunch(true)
    if (
      dishTypes.includes("lunch") ||
      dishTypes.includes("main course") ||
      dishTypes.includes("side dish")
    )
      setLunch(true)
    if (dishTypes.includes("snack")) setSnack(true)
    setBadges([
      {
        type: vegan,
        text: "Vegan",
      },
      {
        type: vegetarian,
        text: "Vegetarian",
      },
      {
        type: breakfast,
        text: "Breakfast",
      },
      {
        type: brunch,
        text: "Brunch",
      },
      {
        type: lunch,
        text: "Lunch",
      },
      {
        type: dessert,
        text: "Dessert",
      },
      {
        type: snack,
        text: "Snack",
      },
    ])
  }, [firstLoad.current])
  return (
    <div className="recipe-card">
      <div className="recipe-card-img" onClick={goToDetails}>
        <img src={image} alt="recipe_image" />
      </div>
      <div className="recipe-card-info" onClick={goToDetails}>
        <div className="recipe-card-info-top">
          <p className="recipe-card-title">{title}</p>
          <div className="recipe-card-time">
            <FaClock style={{ fill: "#ccc" }} />
            <p className="recipe-card-minutes">{readyInMinutes} minutes</p>
          </div>
        </div>
        <ul className="recipe-card-ingredients">
          {extendedIngredients.map((item, index) => (
            <li key={item + nanoid(5)}>
              <p key={item + nanoid(5)}>
                {item + (index + 1 === extendedIngredients.length ? "" : ",")}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="recipe-card-badges">
        <div className="recipe-card-diet-badges">
          {badges
            .filter((item) => item.type)
            .map((item) => (
              <Badge key={nanoid(5)} type={item.text} />
            ))}
        </div>
        <div
          className="recipe-card-heart"
          onClick={addToFavorites}
          style={{ backgroundColor: favorited ? "#ddd" : "#eee" }}
        >
          <FaHeart fill={favorited ? "#eea9b8" : "#fff"} />
        </div>
      </div>
    </div>
  )
}

export default React.memo(RecipeCard)
