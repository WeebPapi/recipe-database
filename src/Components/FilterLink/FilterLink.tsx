import React, { useState } from "react";
import { useAppDispatch } from "../../store";
import {
  addFilter,
  removeFilter,
  FilterType,
} from "../../store/displayList/displayList.slice";
import { IoIosCloseCircle } from "react-icons/io";
import "./FilterLink.css";
interface FilterLinkProps {
  category: FilterType;
  name: string;
}

const FilterLink: React.FC<FilterLinkProps> = ({ category, name }) => {
  const [toggled, setToggled] = useState(false);
  const dispatch = useAppDispatch();
  const addFilterToArray = () => {
    setToggled(true);
    dispatch(addFilter({ type: category, name: name.toLowerCase() }));
  };
  const removeFilterFromArray = () => {
    setToggled(false);
    dispatch(removeFilter({ type: category, name: name.toLowerCase() }));
  };
  return (
    <div
      style={{
        backgroundColor: toggled ? "#fff" : "transparent",
        padding: "5px 8px",
        borderRadius: "15px",
        width: "min-content",
      }}
      className="filter-link"
    >
      {toggled ? (
        <span onClick={removeFilterFromArray}>
          <IoIosCloseCircle />
        </span>
      ) : null}
      <p
        style={{
          transition: "0.3s ease-in-out",
          color: toggled ? "#19A519" : "#242424",
          cursor: "pointer",
        }}
        onClick={() => {
          addFilterToArray();
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default FilterLink;
