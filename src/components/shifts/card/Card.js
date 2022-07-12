import React from "react";
import CardBodyStrip from "./card-body-strip/CardBodyStrip";
import CardHeadingStrip from "./card-heading-strip/CardHeadingStrip";
import styles from "./Card.module.css";

const Card = ({ title }) => {
  return (
    <div className={styles["card-main-wrapper"]}>
      <CardHeadingStrip
        borderRound="true"
        Date="Today"
        shifts="2 shifts"
        duration="2 h"
      />
      <CardBodyStrip
        startTime="12:00"
        endTime="14:00"
        city="Helsinki"
        type="UnBooked"
        disabled="true"
      />
      <CardBodyStrip
        startTime="12:00"
        endTime="14:00"
        city="Helsinki"
        type="Booked"
        disabled="true"
      />
      <CardBodyStrip
        startTime="12:00"
        endTime="14:00"
        city="Helsinki"
        type="Booked"
        disabled="false"
      />

      <CardHeadingStrip Date="Tomorrow" shifts="1 shift" duration="4 h" />
      <CardBodyStrip
        startTime="12:00"
        endTime="14:00"
        city="Helsinki"
        type="Booked"
        disabled="false"
      />
    </div>
  );
};

export default Card;
