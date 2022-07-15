import { combineReducers } from "redux";
import shiftsReducer from "../components/shifts/reducer";
import filtersReducer from "../components/filter/reducer";

const createReducer = () => {
  const combinedAppReducer = combineReducers({
    shiftsReducer,
    filtersReducer
  });

  const rootReducer = (state, action) => {
    return combinedAppReducer(state, action);
  };

  return rootReducer;
};

export default createReducer;
