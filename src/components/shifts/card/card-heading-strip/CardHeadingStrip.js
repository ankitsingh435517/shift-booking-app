import React from "react";
import styles from "../CardStrip.module.css";

const mapCurrentDays = (date) => {
  const today = new Date();
  const tomorrow = new Date(new Date().setDate(today.getDate() + 1));
  const todayStr = today.toString();
  const tomorrowStr = tomorrow.toString();
  if(todayStr.substr(4, 6) === date){
    return "Today";
  } else if(tomorrowStr.substr(4,6) === date){
    return "Tomorrow";
  } else {
    return date;
  }
};


const CardHeadingStrip = ({ Date, duration, shifts, borderRound }) => {
  return (
    <div
      className={`${styles["card-heading-strip"]} ${
        borderRound === "true" && styles["border-round"]
      }`}
    >
      <div className={styles["heading-strip-description"]}>
        <h3>{mapCurrentDays(Date)}</h3>
        <div>
          <span>
            {shifts} {`${shifts > 1 ? "shifts" : "shift"}`},{" "}
          </span>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default CardHeadingStrip;
