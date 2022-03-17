import { combineReducers } from "redux";
import universityReducer from "./universityReducer";

const rootReducer = combineReducers({
  university: universityReducer,
});

export default rootReducer;
