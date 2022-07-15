import React from "react";

const SingleFilter = ({ title, data, handleFilter }) => {
  const options = data.map((option, idx) => (
    <li key={idx}>
      <input className={title} name={option} id={option} type="checkbox" onChange={handleFilter} />
      <label htmlFor={option}>{option}</label>
    </li>
  ));
  return (
    <div className="filter-time">
      <h4>{title}</h4>
      <ul>{options}</ul>
    </div>
  );
};

export default SingleFilter;
