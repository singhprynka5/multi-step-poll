import { combineReducers } from "redux";
import optionsDataReducer from "./optionsDataReducer";

const rootReducer = combineReducers({
  optionsData: optionsDataReducer,
});

export default rootReducer;
