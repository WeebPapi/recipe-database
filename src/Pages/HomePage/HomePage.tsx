import React from "react";
import "./HomePage.css";
import { DisplayedCards, FiltersBar } from "../../Components";

const HomePage = () => {
  return (
    <div>
      <FiltersBar />
      <DisplayedCards />
    </div>
  );
};

export default HomePage;
