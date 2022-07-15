import React, { useState } from "react";
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
  const [loading, setLoading] = useState(false);

  const handleOnChange = (type, shiftId) => {
    try {
      setLoading(true);
      if (type === "cancel") {
        handleMethods.cancel(shiftId);
      } else {
        handleMethods.book(shiftId);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
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
                ? () => handleOnChange("cancel", shiftId)
                : () => handleOnChange("book", shiftId)
              : null
          }
        >
          {loading ? (
            <Spinner type={type === true ? "Cancel" : "Book"} />
          ) : type === true ? (
            "Cancel"
          ) : (
            "Book"
          )}
        </button>
      </div>
    </div>
  );
};

const Spinner = ({ type }) => {
  return (
    <img
      src={
        type === "cancel"
          ? "assets/spinner_red.svg"
          : "assets/spinner_green.svg"
      }
    />
  );
};

export default CardBodyStrip;
