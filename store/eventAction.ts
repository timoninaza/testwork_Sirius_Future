import { event } from "../store/eventReducer";

export const addEvent = (eventObj: event) => {
  return {
    type: "ADD_EVENT",
    ...eventObj,
  };
};
