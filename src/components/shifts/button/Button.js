import React from "react";
import styles from "./Button.module.css";

const Button = ({ title, onClick, isActive }) => {
  return (
    <button
      className={`${styles["button"]} ${styles["nav-buttons"]} ${
        isActive && styles["active"]
      }`}
      onClick={() => onClick()}
    >
      {title}
    </button>
  );
};

export default Button;
