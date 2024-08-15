import React, { FC, useEffect, useState } from "react";
import "./Filter.css";
import { FaCaretDown } from "react-icons/fa";
import { FilterLink } from "../";
import { FilterType } from "../../store/displayList/displayList.slice";
import { nanoid } from "@reduxjs/toolkit";

interface FilterProps {
  category: FilterType;
  filterList: string[];
}

const Filter: FC<FilterProps> = ({ category, filterList }) => {
  const [toggled, setToggled] = useState(false);
  const [filterCategory, setFilterCategory] = useState("");
  useEffect(() => {
    switch (category) {
      case "includeIngredients":
        setFilterCategory("Ingredients");
        break;
      case "cuisine":
        setFilterCategory("Cuisine");
        break;
      case "type":
        setFilterCategory("Type");
        break;
      case "diet":
        setFilterCategory("Diet");
        break;
      default:
        setFilterCategory("");
    }
  }, []);
  return (
    <div className="filter-component">
      <div
        className="filter-visible"
        onClick={() => {
          setToggled((prev) => !prev);
        }}
      >
        <p>{filterCategory}</p>
        <FaCaretDown className={toggled ? "rotateUp" : "rotateDown"} />
      </div>
      {toggled ? (
        <div className="filter-menu">
          {filterList.map((item) => (
            <FilterLink key={nanoid(5)} category={category} name={item} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default React.memo(Filter);
