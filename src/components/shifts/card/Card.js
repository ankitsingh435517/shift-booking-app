import React from "react";
import CardBodyStrip from "./card-body-strip/CardBodyStrip";
import CardHeadingStrip from "./card-heading-strip/CardHeadingStrip";
import styles from "./Card.module.css";
import ShiftsHOC from "./HOC/ShiftsHOC";

const Card = (props) => {
  const { title, data } = props;
  const { shiftsObj, shiftsDays } = data;

  let handleShiftMethods = {};
  if (title === "My shifts") {
    handleShiftMethods.cancel = props.handleCancelShift;
  } else {
    handleShiftMethods.cancel = props.handleCancelShift;
    handleShiftMethods.book = props.handleBookShift;
  }

  return (
    <div className={styles["card-main-wrapper"]}>
      {shiftsDays.map((shiftDay) => {
        return (
          <>
            <CardHeadingStrip
              borderRound="true"
              Date={shiftsObj[shiftDay].date}
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
                  key={shift.id}
                  shiftId={shift.id}
                  availability={shift.availability}
                  handleMethods={handleShiftMethods}
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
