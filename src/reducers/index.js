import { combineReducers } from "redux";
import logReducer from "./logReducer";
import techReducer from "./techReducer";

//Takes in all available reducers as objects
export default combineReducers({
  log: logReducer,
  tech: techReducer,
});
