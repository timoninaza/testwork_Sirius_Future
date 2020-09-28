import moment from "moment";
import localeDate from "../utils/localeDate.ts";

const INITIAL_VALUE = {
  start: localeDate(moment()).startOf("week"),
  end: localeDate(moment()).endOf("week"),
};

export default function timeReducer(store = INITIAL_VALUE, action) {
  switch (action.type) {
    case "SET_SELECTED_TIME":
      return {
        start: action.start,
        end: action.end,
      };
    case "DELETE_SELECTED_TIME":
      return INITIAL_VALUE;
    default:
      return store;
  }
}
