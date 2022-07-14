import { combineReducers } from "redux";
import shiftsReducer from "../components/shifts/reducer";

const createReducer = () => {
  const combinedAppReducer = combineReducers({
    shiftsReducer,
  });

  const rootReducer = (state, action) => {
    return combinedAppReducer(state, action);
  };

  return rootReducer;
};

export default createReducer;
