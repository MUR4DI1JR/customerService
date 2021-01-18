import {combineReducers} from 'redux';
import authReducer from "./auth/authReducer";
import dbReducer from "./db/dbReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    location: dbReducer
});

export default rootReducer;