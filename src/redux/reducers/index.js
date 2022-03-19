import { combineReducers } from "redux";
import driverReducer from "./driverReducer";

const rootReducers = combineReducers({
   drivers: driverReducer,
});

export default rootReducers;
