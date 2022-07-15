import React from "react";
import styles from "../CardStrip.module.css";

const CardBodyStrip = ({
  startTime,
  endTime,
  city,
  type,
  shiftId,
  availability,
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
        <h4>
          {availability.isAvailable === true
            ? type === true
              ? "Booked"
              : ""
            : availability.reason}
        </h4>
        <button
          className={`${styles["button"]} ${
            type === true ? styles["cancel-button"] : styles["book-button"]
          } ${availability.isAvailable === false && styles["disabled"]}`}
          onClick={
            availability.isAvailable === true
              ? type === true
                ? () => handleMethods.cancel(shiftId)
                : () => handleMethods.book(shiftId)
              : ""
          }
        >
          {type === true ? "Cancel" : "Book"}
        </button>
      </div>
    </div>
  );
};

export default CardBodyStrip;
