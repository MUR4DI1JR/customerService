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
export const setAboutProperty = (about) =>{
    return{
        type: dbTypes.ABOUT_PROPERTY,
        payload: about
    }
};
export const setTypeProperty = (type) =>{
    return{
        type: dbTypes.TYPE_PROPERTY,
        payload: type
    }
};
export const setCountUnit = (count) =>{
    return{
        type: dbTypes.COUNT_UNIT,
        payload: count
    }
};
export const setInvestValue = (invest) =>{
    return{
        type: dbTypes.INVEST_VALUE,
        payload: invest
    }
};
export const setHomeValue = (homeValue) =>{
    return{
        type: dbTypes.HOME_VALUE,
        payload: homeValue
    }
};

export const nextClick = (next) =>{
    return{
       type: dbTypes.NEXT_CLICK,
       payload: next
    }
};
export const backClick = (next) =>{
    return{
        type: dbTypes.BACK_CLICK,
        payload: next
    }
};