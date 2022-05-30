import { combineReducers } from "redux";
import upcomingReducer from "./reducers/upcomingReducer";

const rootReducer = combineReducers({
    upcomingReducer
});

export default rootReducer;