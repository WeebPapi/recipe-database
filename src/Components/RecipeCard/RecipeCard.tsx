import React from "react";
import "./RecipeCard.css";

interface RecipeCardProps {
  id: number;
  title: string;
  readyInMinutes: number;
  image: string;
  extendedIngredients: string[];
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  title,
  readyInMinutes,
  image,
  extendedIngredients,
}) => {
  return (
    <div className="recipe-card">
      <div className="recipe-card-img">
        <img src={image} alt="recipe_image" />
      </div>
      <div className="recipe-card-info">
        <p>{title}</p>
        <ul className="recipe-card-ingredients">
          {extendedIngredients.map((item) => (
            <li key={item + "li"}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;
