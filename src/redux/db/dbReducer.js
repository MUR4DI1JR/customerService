import dbTypes from "./dbTypes";

const initialState = {
  location: ''
};

const dbReducer = (state = initialState, action) =>{
    switch (action.type) {
        case dbTypes.LOCATION_USER:
            return {
                ...state,
                location:  action.payload
            };
        default:
            return state
    }
};

export default dbReducer;