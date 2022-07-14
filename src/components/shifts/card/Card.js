import React from "react";
import CardBodyStrip from "./card-body-strip/CardBodyStrip";
import CardHeadingStrip from "./card-heading-strip/CardHeadingStrip";
import styles from "./Card.module.css";
import ShiftsHOC from "./HOC/ShiftsHOC";

const Card = ({ title, data }) => {
  const [shiftsObj, shiftsDays] = data;

  return (
    <div className={styles["card-main-wrapper"]}>
      {shiftsDays.map((shiftDay) => {
        return (
          <>
            <CardHeadingStrip
              borderRound="true"
              Date={shiftDay}
              shifts={shiftsObj[shiftDay].totalShifts}
              duration={shiftsObj[shiftDay].getInHoursAndMinutes(
                shiftsObj[shiftDay].totalHours
              )}
              key={shiftDay}
            />
            {shiftsObj[shiftDay].shifts.map((shift) => {
              return (
                <CardBodyStrip
                  startTime={shift.startTime.time}
                  endTime={shift.endTime.time}
                  city={shift.area}
                  type={shift.booked}
                  disabled="false"
                  key={shift.id}
                />
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default ShiftsHOC(Card);
