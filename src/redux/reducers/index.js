import { combineReducers } from "redux";
import driverReducer from "./driverReducer";

const rootReducers = combineReducers({
   driver: driverReducer,
});

export default rootReducers;
