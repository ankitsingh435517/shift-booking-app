import React, { useState } from "react";
import Button from "./button/Button";
import Card from "./card/Card";
import styles from "./Shifts.module.css";

const Shifts = () => {
  const [showMyShifts, setShowMyShifts] = useState(true);
  const [showAvailableShifts, setShowAvailableShifts] = useState(false);

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
      {showMyShifts && <Card title="My shifts" />}
      {showAvailableShifts && <Card title="Available shifts" />}
    </div>
  );
};

export default Shifts;
