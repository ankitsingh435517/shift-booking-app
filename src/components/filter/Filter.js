import React from "react";
import SingleFilter from "./singleFilter/SingleFilter";
import styles from "./Filter.module.css";

const time = ["Today", "Tommorow", "Sepetember 22"];
const location = ["Helsinki", "Tampere", "Turku"];
const type = ["Booked", "Cancelled"];

const Filter = () => {
  return (
    <div className={styles["filter-main-wrapper"]}>
      <h3>Filter By</h3>
      <div className={styles["filter-wrapper"]}>
        <SingleFilter title="Time" data={time} />
        <SingleFilter title="Location" data={location} />
        <SingleFilter title="Type" data={type} />
        <div className={styles["clear"]}>
          <button>Clear All</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
