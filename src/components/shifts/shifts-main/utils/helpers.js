import Stack from "./Stack";

export const sortShiftsByTime = (shiftsObj, shiftsDays) => {
  shiftsDays.forEach((shiftKey) => {
    shiftsObj[shiftKey].shifts = shiftsObj[shiftKey].shifts.sort(function (
      a,
      b
    ) {
      if (a.startTime.epoch === b.startTime.epoch) {
        return a.endTime.epoch < b.endTime.epoch
          ? -1
          : a.endTime.epoch > b.endTime.epoch
          ? 1
          : 0;
      }

      return a.startTime.epoch < b.startTime.epoch ? -1 : 1;
    });
  });
};

export const deepCopy = (shiftsObj, result = {}) => {
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

export const markUnavailableShifts = (shiftsObj, shiftsDays) => {
  shiftsDays.forEach((shiftKey) => {
    const stack = new Stack();
    const shifts = shiftsObj[shiftKey].shifts;
    for (let i = shifts.length - 1; i >= 0; i--) {
      const shift = shifts[i];
      const currentTime = Date.now();
      if (
        shift.startTime.epoch <= currentTime &&
        shift.endTime.epoch > currentTime
      ) {
        shift.availability.isAvailable = false;
        shift.availability.reason = "Ongoing";
      } else if (shift.endTime.epoch < currentTime) {
        shift.availability.isAvailable = false;
        shift.availability.reason = "Over";
      }

      if (shift.booked === true && shift.availability.isAvailable === true) {
        stack.push(shift);
      }
    }

    if (!stack.isEmpty()) {
      markOverlaps(shifts, stack);
    }
  });
};

const markOverlaps = (shifts, stack) => {
  let i = 0;
  while (i < shifts.length) {
    const shift = shifts[i];
    const bookedTime = stack.peek();

    const bookedStart = bookedTime.startTime.epoch;
    const bookedEnd = bookedTime.endTime.epoch;
    const shiftStart = shift.startTime.epoch;
    const shiftEnd = shift.endTime.epoch;

    if (shift.booked === false) {
      if (shiftStart < bookedEnd && shiftEnd > bookedStart) {
        shift.availability.isAvailable = false;
        shift.availability.reason = "Overlap";
        i++;
      } else {
        stack.pop();
        if (stack.isEmpty()) {
          return;
        }
      }
    } else {
      i++;
    }
  }
};
