import { useAppDispatch } from "../../store";
import { getRecipes } from "../../store/displayList/displayList.thunks";
import "./FiltersBar.css";
import { Filter } from "../";
import { filtersBarData } from "../../data";

const FiltersBar = () => {
  const dispatch = useAppDispatch();
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
          dispatch(getRecipes("716429/information"));
        }}
      >
        Click
      </button>
    </div>
  );
};

export default FiltersBar;
