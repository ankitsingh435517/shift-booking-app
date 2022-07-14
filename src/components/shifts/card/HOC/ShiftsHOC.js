export default function (WrappedComponent) {
  return ({ title, data }) => {
    const [shiftsObj, shiftsDays] = data;
   
    let finalShiftsObj = shiftsObj;
   
    const deepCopy = (shiftsObj, result = {}) => {
      const keys = Object.keys(shiftsObj);
      keys.forEach((key) => {
        if (shiftsObj[key] instanceof Array) {
          result[key] = [];
          deepCopy(shiftsObj[key], result[key]);
        } else if (typeof shiftsObj[key] === "object") {
          result[key] = {};
          deepCopy(shiftsObj[key], result[key]);
        } else {
          result[key] = shiftsObj[key];
        }
      });

      return result;
    };
   
   
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

    return (
      <WrappedComponent title={title} data={[finalShiftsObj, shiftsDays]} />
    );
  };
}
