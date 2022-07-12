import React from "react";
import styles from "../CardStrip.module.css";

const CardBodyStrip = ({ startTime, endTime, city, type, disabled }) => {
  return (
    <div className={styles["body-strip"]}>
      <div className={styles["time-city"]}>
        <p>
          {startTime} - {endTime}
        </p>
        <p>{city}</p>
      </div>
      <div>
        <h4>{type === "Booked" && type}</h4>
        <button
          className={`${styles["button"]} ${
            type === "Booked" ? styles["cancel-button"] : styles["book-button"]
          } ${disabled === "true" && styles["disabled"]}`}
        >
          {type === "Booked" ? "Cancel" : "Book"}
        </button>
      </div>
    </div>
  );
};

export default CardBodyStrip;
