import React, { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { RecipeCard } from "../";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { getRecipes } from "../../store/displayList/displayList.thunks";
import "./DisplayedCards.css";
export interface Ingredients {
  aisle: string;
  amount: number;
  consistency: string;
  id: number;
  image: string;
  measures: {
    metric: {
      amount: number;
      unitLong: string;
      unitShort: string;
    };
    us: {
      amount: number;
      unitLong: string;
      unitShort: string;
    };
  };
  meta: [];
  name: string;
  original: string;
  originalName: string;
  unit: string;
}

const DisplayedCards = () => {
  const dispatch = useAppDispatch();
  const list = useSelector((state: RootState) => state.displayList.displayList);
  const filters = useSelector((state: RootState) => state.displayList.filters);
  useEffect(() => {
    dispatch(getRecipes("random?number=5"));
  }, []);
  return (
    <div className="displayed-cards">
      {list.map((item) => (
        <RecipeCard
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          readyInMinutes={item.readyInMinutes}
          extendedIngredients={item.extendedIngredients.map(
            (item) => item.name
          )}
          vegan={item.vegan}
          vegetarian={item.vegetarian}
          dishTypes={item.dishTypes}
        />
      ))}
    </div>
  );
};

export default DisplayedCards;
