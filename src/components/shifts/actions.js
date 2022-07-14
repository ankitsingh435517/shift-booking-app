import api from "../../api";
import apiEndPoints from "../../api/end-points";
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

export const setShifts = (payload) => ({
  type: "SET_SHIFTS",
  payload,
});

export const structureShifts = (data, dispatch) => {
  const shiftsMain = new ShiftsMain(data);

  const shiftsData = shiftsMain.shiftsInit();

  const [shiftsObj, shiftsDays] = shiftsData;

  dispatch(setShifts({ shiftsDays, shiftsObj }));
};

export const getShifts = (params) => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getShifts);
    const { statusText, data } = response;
    if (statusText === "OK") {
      structureShifts(data, dispatch);
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};

export const cancelShift = (params) => async (dispatch) => {
  try {
    // api call to cancel by -- param.shiftId
    // if success dispatch(getShifts)
    return true;
  } catch (err) {
    return false;
  }
};

export const bookShift = (params) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.bookShift(params.id), {});
    
    return true;
  } catch (err) {
    return false;
  }
};
