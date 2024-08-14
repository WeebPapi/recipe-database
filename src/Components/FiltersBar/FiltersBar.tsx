import "./FiltersBar.css";
import { Filter } from "../";
import { filtersBarData } from "../../data";

const FiltersBar = () => {
  return (
    <div className="filters-bar">
      {filtersBarData.map((item) => (
        <Filter
          key={item.id}
          category={item.category}
          filterList={item.filterList}
        />
      ))}
    </div>
  );
};

export default FiltersBar;
