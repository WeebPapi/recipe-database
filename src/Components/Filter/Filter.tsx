import { FC, useState } from "react";
import "./Filter.css";
import { FaCaretDown } from "react-icons/fa";
import { FilterLink } from "../";

interface FilterProps {
  category: "cuisine" | "type" | "ingredients" | "diet";
  filterList: string[];
}

const Filter: FC<FilterProps> = ({ category, filterList }) => {
  const [toggled, setToggled] = useState(false);
  return (
    <div className="filter-component">
      <div
        className="filter-visible"
        onClick={() => {
          setToggled((prev) => !prev);
        }}
      >
        <p>{category}</p>
        <FaCaretDown className={toggled ? "rotateUp" : "rotateDown"} />
      </div>
      {toggled ? (
        <div className="filter-menu">
          {filterList.map((item) => (
            <FilterLink category={category} name={item} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Filter;
