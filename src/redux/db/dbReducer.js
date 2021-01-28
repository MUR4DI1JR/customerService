import dbTypes from "./dbTypes";

const initialState = {
    location: '',
    city: '',
    states: '',
    code: '',
    unit: '',
    next: false
};

const dbReducer = (state = initialState, action) =>{
    switch (action.type) {
        case dbTypes.LOCATION_USER:
            return {
                ...state,
                location:  action.payload
            };
        case dbTypes.CITY_USER:
            return {
                ...state,
                city: action.payload
            };
        case dbTypes.STATES_USER:
            return {
                ...state,
                states: action.payload
            };
        case dbTypes.UNIT_USER:
            return {
                ...state,
                unit: action.payload
            };
        case dbTypes.ZIP_CODE_USER:
            return {
                ...state,
                code: action.payload
            };
        case dbTypes.NEXT_CLICK:
            return {
                ...state,
                next: action.payload
            };
        default:
            return state
    }
};

export default dbReducer;