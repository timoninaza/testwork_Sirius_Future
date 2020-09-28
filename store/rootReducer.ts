import { combineReducers } from "redux";
import coaches from "./coachesReducer.ts";
import event from "./eventReducer.ts";
import time from "./timeReducer.ts";
import workHours from "./workHoursResucer.ts";

export default combineReducers({
  coaches,
  event,
  time,
  workHours,
});
