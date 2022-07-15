import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShifts, bookShift, cancelShift } from "./actions";
import { getShiftsData } from "./selectors";

export const useShifts = () => {
  const dispatch = useDispatch();
  const shifts = useSelector(getShiftsData);

  useEffect(() => {
    dispatch(getShifts());
  }, [dispatch]);

  const handleCancelShift = (shiftId) => {
    dispatch(cancelShift({ id: shiftId }));
  };

  const handleBookShift = (shiftId) => {
    dispatch(bookShift({ id: shiftId }));
  };
  return {
    shifts,
    handleBookShift,
    handleCancelShift,
  };
};
