class ShiftsMain {
  shifts = {};
  shiftsDays = [];
  constructor(data) {
    this.shifts = this.transformShifts(data);
    this.shiftsDays = this.uniqueEpochDays(this.shifts);
  }

  dateConverter = (epoch) => {
    const date = new Date(epoch).toString();
    const dateArr = date.split(" ");
    const dateObj = {};
    dateObj.day = dateArr[0];
    dateObj.month = dateArr[1];
    dateObj.date = dateArr[2];
    dateObj.year = dateArr[3];
    dateObj.time = dateArr[4].substr(0,5);
    dateObj.epoch = epoch;

    return dateObj;
  };

  getHours = (startTime, endTime) => {
    return +((endTime - startTime) / 1000 / 60 / 60).toFixed(2);
  };

  getInHoursAndMinutes = (hours) => {
    hours += "";
    let hour = null;
    let min = null;
    if (hours.includes(".")) {
      const hoursArr = hours.split(".");
      hour = hoursArr[0];
      min = ((+hoursArr[1] / 100) * 60).toFixed(0);
    } else {
      hour = hours;
    }

    let time = "";
    if (hour) {
      time += hour + " h ";
    }

    if (min) {
      time += min + " m ";
    }

    return time;
  };

  transformShifts = (shifts) => {
    shifts.forEach((shift) => {
      this.transformShift(shift);
    });
    return shifts;
  };

  transformShift = (shift) => {
    const epochStart = shift.startTime;
    const startDateObj = this.dateConverter(epochStart);
    shift.startTime = startDateObj;

    const epochEnd = shift.endTime;
    const endDateObj = this.dateConverter(epochEnd);
    shift.endTime = endDateObj;

    shift.hours = this.getHours(shift.startTime.epoch, shift.endTime.epoch);
  };

  uniqueEpochDays = (shifts) => {
    const uniqueDays = [];
    shifts.forEach((shift) => {
      const epoch = shift.startTime.epoch;
      const dateObj = this.dateConverter(epoch);
      const date = dateObj.month + " " + dateObj.date;
      if (!uniqueDays.includes(date)) {
        uniqueDays.push(date);
      }
    });

    return uniqueDays;
  };


  // initializer method------>

  shiftsInit() {
    const shiftsObj = this.createShiftsObj(this.shifts, this.shiftsDays);

    return [shiftsObj, this.shiftsDays];
  }

  createShiftsObj = (shifts, shiftsDays) => {
    const shiftsObj = {};
    shiftsDays.forEach((shiftKey) => {
      shiftsObj[shiftKey] = {};
    });

    shifts.forEach((shift) => {
      const epoch = shift.startTime.epoch;
      const dateObj = this.dateConverter(epoch);
      const date = dateObj.month + " " + dateObj.date;

      if (!shiftsObj[date].date) {
        shiftsObj[date].date = date;
      }

      if (!shiftsObj[date].totalHours && shiftsObj[date].totalHours !== 0) {
        shiftsObj[date].totalHours = 0;
      }
      shiftsObj[date].totalHours += shift.hours;

      if (!shiftsObj[date].totalShifts && shiftsObj[date].totalShifts !== 0) {
        shiftsObj[date].totalShifts = 0;
      }

      shiftsObj[date].totalShifts += 1;

      if (!shiftsObj[date].shifts) {
        shiftsObj[date].shifts = [];
      }

      shiftsObj[date].shifts.push(shift);

    });

    shiftsDays.forEach((shiftKey) => {
      shiftsObj[shiftKey].getInHoursAndMinutes = this.getInHoursAndMinutes;
    })

    return shiftsObj;
  };

}

export default ShiftsMain;



// ---------------------------------
// look of myshifts

// const shiftsObj = {
//   "may 06": {
//     date: "may 06",
//     totalHours: 4,
//     totalShifts: 3,
//     shifts: [
//       {
//         id: "001e40e5-05dc-4b9d-bdc5-cae63f651970",
//         area: "Tampere",
//         booked: true,
//         endTime: {
//           day: "Sun",
//           month: "May",
//           date: "06",
//           year: "2018",
//           time: "18:03:20",
//         },
//         startTime: {
//           day: "Sun",
//           month: "May",
//           date: "06",
//           year: "2018",
//           time: "16:03:20",
//         },
//       },
//     ],
//   },
// };
