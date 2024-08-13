import React from "react";
import { Badge } from "../";
import "./RecipeCard.css";

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
  return (
    <div className="recipe-card">
      <div className="recipe-card-img">
        <img src={image} alt="recipe_image" />
      </div>
      <div className="recipe-card-info">
        <div className="recipe-card-info-top">
          <p className="recipe-card-title">{title}</p>
          <p className="recipe-card-minutes">{readyInMinutes} minutes</p>
        </div>
        <ul className="recipe-card-ingredients">
          {extendedIngredients.map((item) => (
            <li key={item + "li"}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="recipe-card-badges">
        {vegan ? <Badge type="Vegan" /> : null}
        {vegetarian ? <Badge type="Vegetarian" /> : null}
      </div>
    </div>
  );
};

export default RecipeCard;
