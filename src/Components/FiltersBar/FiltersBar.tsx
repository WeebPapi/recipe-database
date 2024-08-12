import React from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../store/displayList/displayList.thunks";
import "./FiltersBar.css";
import { Filter } from "../";
import { filtersBarData } from "../../data";
import { AsyncThunkAction, GetThunkAPI } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

const FiltersBar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {filtersBarData.map((item) => (
        <Filter
          key={item.id}
          category={item.category}
          filterList={item.filterList}
        />
      ))}
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(getRecipes());
        }}
      >
        Click
      </button>
    </div>
  );
};

export default FiltersBar;
