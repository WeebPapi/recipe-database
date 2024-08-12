import { FC, useState } from "react";
import "./Filter.css";
import { FaCaretDown } from "react-icons/fa";

interface FilterProps {
  category: string;
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
            <div className="filter-menu-item">{item}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Filter;
