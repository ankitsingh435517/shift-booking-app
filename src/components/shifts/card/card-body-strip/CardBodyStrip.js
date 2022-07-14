import React from "react";
import styles from "../CardStrip.module.css";

const CardBodyStrip = ({
  startTime,
  endTime,
  city,
  type,
  disabled,
  shiftId,
  handleMethods,
}) => {
  return (
    <div className={styles["body-strip"]}>
      <div className={styles["time-city"]}>
        <p>
          {startTime} - {endTime}
        </p>
        <p>{city}</p>
      </div>
      <div>
        <h4>{type === true && "Booked"}</h4>
        <button
          className={`${styles["button"]} ${
            type === true ? styles["cancel-button"] : styles["book-button"]
          } ${disabled === "true" && styles["disabled"]}`}
          onClick={
            type === true
              ? () => handleMethods.cancel(shiftId)
              : () => handleMethods.book(shiftId)
          }
        >
          {type === true ? "Cancel" : "Book"}
        </button>
      </div>
    </div>
  );
};

export default CardBodyStrip;
