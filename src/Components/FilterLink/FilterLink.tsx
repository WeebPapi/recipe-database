import React from "react";
import { useAppDispatch } from "../../store";
import { addFilter } from "../../store/displayList/displayList.slice";
interface FilterLinkProps {
  category: "cuisine" | "type" | "ingredients" | "diet";
  name: string;
}

const FilterLink: React.FC<FilterLinkProps> = ({ category, name }) => {
  const dispatch = useAppDispatch();
  const addFilterToArray = () => {
    dispatch(addFilter({ type: category, name: name.toLowerCase() }));
  };
  return (
    <div
      className="filter-link"
      onClick={() => {
        addFilterToArray();
      }}
    >
      <p>{name}</p>
    </div>
  );
};

export default FilterLink;
