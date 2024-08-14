import React, { useEffect, useRef, useState } from "react";
import { Badge } from "../";
import "./RecipeCard.css";
import { FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

interface RecipeCardProps {
  id: number;
  title: string;
  readyInMinutes: number;
  image: string;
  extendedIngredients: string[];
  vegan: boolean;
  vegetarian: boolean;
  dishTypes: string[];
}
type Badge = {
  type: boolean;
  text: string;
};
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
  const firstLoad = useRef(false);
  const navigate = useNavigate();
  const [badges, setBadges] = useState<Badge[]>([]);
  const [dessert, setDessert] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [brunch, setBrunch] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [snack, setSnack] = useState(false);
  useEffect(() => {
    if (!firstLoad.current) firstLoad.current = true;

    if (dishTypes.includes("dessert")) setDessert(true);
    if (dishTypes.includes("breakfast")) setBreakfast(true);
    if (dishTypes.includes("brunch")) setBrunch(true);
    if (
      dishTypes.includes("lunch") ||
      dishTypes.includes("main course") ||
      dishTypes.includes("side dish")
    )
      setLunch(true);
    if (dishTypes.includes("snack")) setSnack(true);
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
    ]);
  }, [firstLoad.current]);
  return (
    <div
      className="recipe-card"
      onClick={() => {
        navigate(`recipes/${id}`);
      }}
    >
      <div className="recipe-card-img">
        <img src={image} alt="recipe_image" />
      </div>
      <div className="recipe-card-info">
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
        {badges
          .filter((item) => item.type)
          .map((item) => (
            <Badge key={nanoid(5)} type={item.text} />
          ))}
      </div>
    </div>
  );
};

export default RecipeCard;
