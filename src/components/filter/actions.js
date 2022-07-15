
import { setShifts } from "../shifts/actions";

export const setFilters = (payload) => ({
    type: 'SET_FILTERS',
    payload
})

export const removeFilters = (payload) => ({
    type: 'REMOVE_FILTERS',
    payload
})

export const setfilteredShiftsData = (shifts) => async (dispatch) => {
    try{
        dispatch(setShifts(shifts));
    }catch(err){
        return false;
    }
}