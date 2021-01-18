import dbTypes from "./dbTypes";

export const setLocationUser = (location) =>{
    return{
        type: dbTypes.LOCATION_USER,
        payload: location
    }
};