import React from "react";

const SingleFilter = ({ title, data }) => {
  const options = data.map((option, idx) => (
    <li key={idx}>
      <input id={option} type="checkbox" />
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
