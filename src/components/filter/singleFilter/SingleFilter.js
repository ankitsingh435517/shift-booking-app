import React from "react";

const SingleFilter = ({ title, data }) => {
  const options = data.map((option) => (
    <li>
      <input id={option} type="checkbox" />
      <label for={option}>{option}</label>
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
