import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../store";
import { RecipeCard } from "../";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { getRecipes } from "../../store/displayList/displayList.thunks";
import "./DisplayedCards.css";
import { filterUrl } from "../../store/displayList/displayList.slice";
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
  const currentUrl = useSelector(
    (state: RootState) => state.displayList.currentUrl
  );
  useEffect(() => {
    dispatch(getRecipes(currentUrl));
  }, [currentUrl]);
  useEffect(() => {
    const filteredParams = Object.fromEntries(
      Object.entries(filters).filter(([key, value]) => value.length > 0)
    );

    const queryString = new URLSearchParams(
      Object.entries(filteredParams).reduce(
        (acc: { [key: string]: string }, [key, value]) => {
          acc[key] = value.join(",");
          return acc;
        },
        {}
      )
    ).toString();
    dispatch(filterUrl(queryString));
  }, [filters]);

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
