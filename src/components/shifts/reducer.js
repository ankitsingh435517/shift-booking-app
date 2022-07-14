const initialState = {
  shiftsDays: [],
  shiftsObj: {},
};

const shiftsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SHIFTS":
      return {
        shiftsDays: action.payload.shiftsDays,
        shiftsObj: action.payload.shiftsObj,
      };
    case "BOOK":
      return state;
    case "CANCEL":
      return state;
    default:
      return state;
  }
};

export default shiftsReducer;
