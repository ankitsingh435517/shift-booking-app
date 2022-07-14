import React, { useState } from "react";
import Button from "./button/Button";
import Card from "./card/Card";
import styles from "./Shifts.module.css";
import ShiftsMain from "./shifts-main/ShiftsMain";

const shifts = [
  {
    id: "95a2aaca-bab8-4504-8646-f75b325ec0e7",
    booked: false,
    area: "Helsinki",
    startTime: 1523610000000,
    endTime: 1523617200000,
  },
  {
    id: "001e40e5-05dc-4b9d-bdc5-cae63f651970",
    booked: true,
    area: "Tampere",
    startTime: 1523602800000,
    endTime: 1523610000000,
  },
  {
    id: "001e40e5-05dc-4b9d-bdc5-cae63f651970",
    booked: true,
    area: "Tampere",
    startTime: 1523602800000,
    endTime: 1523610000000,
  },
  {
    id: "001e40e5-05dc-4b9d-bdc5-cae63f651970",
    booked: true,
    area: "Tampere",
    startTime: 1523603800000,
    endTime: 1523610000000,
  },
  {
    id: "001e40e5-05dc-4b9d-bdc5-cae63f651970",
    booked: true,
    area: "Tampere",
    startTime: 1525602800000,
    endTime: 1525610000000,
  },
];

const shiftsMain = new ShiftsMain(shifts);

const shiftsData = shiftsMain.shiftsInit();

const [shiftsObj, shiftsDays] = shiftsData;

// ----------------------------------------

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
      {showMyShifts && <Card title="My shifts" data={[shiftsObj, shiftsDays]} />}
      {showAvailableShifts && (
        <Card title="Available shifts" data={[shiftsObj, shiftsDays]} />
      )}
    </div>
  );
};

export default Shifts;
