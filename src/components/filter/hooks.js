import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShiftsData } from "../shifts/selectors";
import { getFiltersData } from "./selectors";
import { getShifts } from "../shifts/actions";
import { setFilters, removeFilters, setfilteredShiftsData } from "./actions";

export const useFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getFiltersData);
  const shifts = useSelector(getShiftsData);

  useEffect(() => {
    if (filters) {
      // dispatch(getShifts());
      filterShifts(shifts, filters);
      dispatch(setfilteredShiftsData(shifts));
    }
  }, [dispatch, filters]);

  const filterShifts = (shifts, filters) => {
    const { shiftsDays, shiftsObj } = shifts;

    const timeFilters = filters.time;
    const locationFilters = filters.location;

    shiftsDays.filter((shiftDay) => {
      if (timeFilters.includes(shiftDay)) {
        return true;
      } else {
        return false;
      }
    });

    shiftsDays.forEach((shiftDay) => {
      shiftsObj[shiftDay].shifts = shiftsObj[shiftDay].shifts.filter(
        (shift) => {
          if (locationFilters.includes(shift.area)) {
            return true;
          } else if (locationFilters.length === 0) {
            return true;
          } else {
            return false;
          }
        }
      );
    });
  };

  const handleFilter = (e) => {
    const { className, name, checked } = e.target;

    if (checked) {
      dispatch(setFilters({ type: className, filter: name }));
    } else {
      dispatch(removeFilters({ type: className, filter: name }));
    }
  };

  return {
    filters,
    handleFilter,
  };
};
