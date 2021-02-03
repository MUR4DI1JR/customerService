import dbTypes from "./dbTypes";

const initialState = {
    location: '',
    city: '',
    states: '',
    code: '',
    unit: '',
    next: false,
    aboutProperty: '',
    typeProperty: '',
    countUnit: '',
    investValue: '',
    homeValue: ''
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
        case dbTypes.ABOUT_PROPERTY:
            return {
                ...state,
                aboutProperty: action.payload
            };
        case dbTypes.TYPE_PROPERTY:
            return {
                ...state,
                typeProperty: action.payload
            };
        case dbTypes.COUNT_UNIT:
            return {
                ...state,
                countUnit: action.payload
            };
        case dbTypes.INVEST_VALUE:
            return {
                ...state,
                investValue: action.payload
            };
        case dbTypes.HOME_VALUE:
            return {
                ...state,
                homeValue: action.payload
            };
        case dbTypes.NEXT_CLICK:
            return {
                ...state,
                next: action.payload
            };
        case dbTypes.BACK_CLICK:
            return {
                ...state,
                next: action.payload
            };
        default:
            return state
    }
};

export default dbReducer;