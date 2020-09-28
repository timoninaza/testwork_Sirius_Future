import {
  ROW_HEIGHT,
  ROWSTEP,
  START,
} from "../components/Content/Calendar/Table/constants.ts";
import getMinutes from "./getMinutes.ts";

const coordinates = (timeStart, timeEnd) => {
  const top = (ROW_HEIGHT / ROWSTEP) * (getMinutes(timeStart) - START);
  const end = (ROW_HEIGHT / ROWSTEP) * (getMinutes(timeEnd) - START);
  return {
    top,
    height: end - top,
  };
};

export default coordinates;
