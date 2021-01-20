import dbTypes from "./dbTypes";

export const setLocationUser = (location) =>{
    return{
        type: dbTypes.LOCATION_USER,
        payload: location
    }
};
export const setCityUser = (city) =>{
    return{
        type: dbTypes.CITY_USER,
        payload: city
    }
};
export const setStatesUser = (states) =>{
    return{
        type: dbTypes.STATES_USER,
        payload: states
    }
};
export const setUnitUser = (unit) =>{
    return{
        type: dbTypes.UNIT_USER,
        payload: unit
    }
};
export const setCodeUser = (code) =>{
    return{
        type: dbTypes.ZIP_CODE_USER,
        payload: code
    }
};