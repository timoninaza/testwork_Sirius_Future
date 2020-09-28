import { TIMESTEP, END, START } from "./constants.ts";

type minutes = number;

type MakeListOfTimeProps = {
  startOfTime: minutes;
  step: minutes;
  endOfTime: minutes;
};

const makeListOfTime = ({
  startOfTime,
  step,
  endOfTime,
}: MakeListOfTimeProps) => {
  let list = [];
  let time = startOfTime;
  while (time <= endOfTime) {
    list.push(
      `${Math.floor(time / 60)
        .toString()
        .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`
    );
    time = time + step;
  }
  return list;
};

export const timeList = makeListOfTime({
  startOfTime: START,
  step: TIMESTEP,
  endOfTime: END,
});
