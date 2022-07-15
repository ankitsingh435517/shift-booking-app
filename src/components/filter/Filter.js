import React from "react";
import SingleFilter from "./singleFilter/SingleFilter";
import styles from "./Filter.module.css";
import { useFilters } from "./hooks";

const time = ["Today", "Tommorow", "Sepetember 22"];
const location = ["Helsinki", "Tampere", "Turku"];

const Filter = () => {
  const {  handleFilter } = useFilters();
  return (
    <div className={styles["filter-main-wrapper"]}>
      <h3>Filter By</h3>
      <div className={styles["filter-wrapper"]}>
        <SingleFilter title="Time" data={time} handleFilter={handleFilter} />
        <SingleFilter
          title="Location"
          data={location}
          handleFilter={handleFilter}
        />
        <div className={styles["clear"]}>
          <button>Clear All</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
