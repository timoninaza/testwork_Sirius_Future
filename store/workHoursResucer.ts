type coachId = number;

export type baseEvent = {
  coach: coachId;
  timeStart: string;
  timeEnd: string;
};

const INITIAL_VALUE: baseEvent[] = [
  {
    coach: 1,
    timeStart: "2020-09-28 08:00:00",
    timeEnd: "2020-09-28 13:30:00",
  },
  {
    coach: 2,
    timeStart: "2020-09-29 08:45:00",
    timeEnd: "2020-09-29 10:15:00",
  },
  {
    coach: 3,
    timeStart: "2020-09-29 08:45:00",
    timeEnd: "2020-09-29 10:15:00",
  },
  {
    coach: 3,
    timeStart: "2020-10-01 08:00:00",
    timeEnd: "2020-10-01 11:45:00",
  },
  {
    coach: 4,
    timeStart: "2020-10-01 08:00:00",
    timeEnd: "2020-10-01 10:00:00",
  },
  {
    coach: 1,
    timeStart: "2020-10-01 08:00:00",
    timeEnd: "2020-10-01 11:45:00",
  },
  {
    coach: 2,
    timeStart: "2020-10-02 08:45:00",
    timeEnd: "2020-10-02 10:25:00",
  },
  {
    coach: 5,
    timeStart: "2020-10-02 08:45:00",
    timeEnd: "2020-10-02 11:00:00",
  },
];

export default function eventReducer(store = INITIAL_VALUE, action) {
  switch (action.type) {
    default:
      return store;
  }
}
