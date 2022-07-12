import React from "react";
import styles from "../CardStrip.module.css";

const CardHeadingStrip = ({ Date, duration, shifts, borderRound }) => {
  return (
    <div className={`${styles["card-heading-strip"]} ${borderRound === "true" && styles["border-round"]}`}>
      <div className={styles["heading-strip-description"]}>
        <h3>{Date}</h3>
        <div>
          <span>{shifts}, </span>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default CardHeadingStrip;
