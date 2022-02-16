import { combineReducers } from "redux";
import auth from "./auth";
import internship from "./internship";

export default combineReducers({
  auth,
  internship,
});
