import { sortShiftsByTime, deepCopy, markUnavailableShifts } from '../../shifts-main/utils/helpers';

export default function (WrappedComponent) {
  return (props) => {
    const { title, data } = props;
    const { shiftsObj, shiftsDays } = data;

    // sorts the data by start-time and endtime
    sortShiftsByTime(shiftsObj, shiftsDays);
    
    // marks all shifts as unavailable if found out of spec
    markUnavailableShifts(shiftsObj, shiftsDays);

    let finalShiftsObj = shiftsObj;

    if (title === "My shifts") {
      const myShifts = deepCopy(shiftsObj);

      shiftsDays.forEach((shiftKey) => {
        const allShifts = myShifts[shiftKey].shifts;
        myShifts[shiftKey].shifts = allShifts.filter((shift) => {
          if (shift.booked === false) {
            myShifts[shiftKey].totalHours -= shift.hours;
            myShifts[shiftKey].totalShifts -= 1;
            return false;
          } else {
            return true;
          }
        });
      });

      finalShiftsObj = myShifts;
    }

    const shifts = { shiftsObj: finalShiftsObj, shiftsDays };

    return <WrappedComponent {...props} title={title} data={shifts} />;
  };
}
