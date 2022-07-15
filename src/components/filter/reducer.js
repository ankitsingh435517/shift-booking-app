const initialState = {
    
        time: [],
        location: []
     
};
  
  const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_FILTERS":
        {
            const _state = {...state};
            if(action.payload.type === 'Time'){
                _state.time = [..._state.time, action.payload.filter]
            }else{
                _state.location = [..._state.location, action.payload.filter]
            }
            return _state;
        }
        case "REMOVE_FILTERS":
        {
            const _state = {...state};
            if(action.payload.type === 'Time'){
                _state.time = _state.time.filter((t) => t !== action.payload.filter);
            }else{
                _state.location = _state.location.filter((l) => l !== action.payload.filter);
            }
            return _state;
        }
      default:
        return state;
    }
  };
  
  export default filtersReducer;
  