import React from "react";
interface IngredientsArr {
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
  return <div>DisplayedCards</div>;
};

export default DisplayedCards;
