import React, { useState, useEffect } from "react";
import Button from "./button/Button";
import Card from "./card/Card";
import styles from "./Shifts.module.css";
import { useShifts } from "./hooks";

const Shifts = () => {
  const [showMyShifts, setShowMyShifts] = useState(false);
  const [showAvailableShifts, setShowAvailableShifts] = useState(true);
  
  const { shifts, handleBookShift, handleCancelShift } = useShifts();

  const handleToggle = (type) => {
    if (type === "myShifts") {
      setShowMyShifts(true);
      setShowAvailableShifts(false);
    } else {
      setShowMyShifts(false);
      setShowAvailableShifts(true);
    }
  };
  return (
    <div className={styles["shifts-main-wrapper"]}>
      <div className={styles["shifts-toggle-buttons"]}>
        <Button
          title="My Shifts"
          isActive={showMyShifts}
          onClick={() => handleToggle("myShifts")}
        />
        <Button
          title="Available Shifts"
          isActive={showAvailableShifts}
          onClick={() => handleToggle("availableShifts")}
        />
      </div>
      {showMyShifts && (
        <Card
          title="My shifts"
          data={shifts}
          handleCancelShift={handleCancelShift}
        />
      )}
      {showAvailableShifts && (
        <Card
          title="Available shifts"
          data={shifts}
          handleBookShift={handleBookShift}
          handleCancelShift={handleCancelShift}
        />
      )}
    </div>
  );
};

export default Shifts;
