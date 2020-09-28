import { baseEvent } from "./workHoursResucer";

export type event = baseEvent & {
  id: number;
  pupil: string;
};

const INITIAL_VALUE: event[] = [
  {
    id: 1,
    coach: 1,
    pupil: "Тельнова Злата",
    timeStart: "2020-09-28 08:00:00",
    timeEnd: "2020-09-28 08:45:00",
  },
  {
    id: 2,
    coach: 1,
    pupil: "Ксюша Диденко 7 лет",
    timeStart: "2020-09-28 09:30:00",
    timeEnd: "2020-09-28 10:15:00",
  },
  {
    id: 3,
    coach: 1,
    pupil: "Эрик 6 лет",
    timeStart: "2020-09-28 11:00:00",
    timeEnd: "2020-09-28 11:45:00",
  },
  {
    id: 4,
    coach: 2,
    pupil: "Тельнова Злата",
    timeStart: "2020-09-29 08:45:00",
    timeEnd: "2020-09-28 09:30:00",
  },
  {
    id: 5,
    coach: 2,
    pupil: "Ксения Аскерова, 9 лет",
    timeStart: "2020-09-29 09:30:00",
    timeEnd: "2020-09-28 10:15:00",
  },
  {
    id: 6,
    coach: 3,
    pupil: "Тельнова Злата",
    timeStart: "2020-10-01 08:00:00",
    timeEnd: "2020-10-01 08:45:00",
  },
  {
    id: 7,
    coach: 3,
    pupil: "Тельнова Злата",
    timeStart: "2020-10-01 08:45:00",
    timeEnd: "2020-10-01 09:30:00",
  },
  {
    id: 8,
    coach: 3,
    pupil: "Эрик 6 лет",
    timeStart: "2020-10-01 11:00:00",
    timeEnd: "2020-10-01 11:45:00",
  },
  {
    id: 9,
    coach: 4,
    pupil: "Соколов Александр",
    timeStart: "2020-10-01 09:15:00",
    timeEnd: "2020-10-01 10:00:00",
  },
  {
    id: 10,
    coach: 1,
    pupil: "Тельнова Злата",
    timeStart: "2020-10-01 08:00:00",
    timeEnd: "2020-10-01 08:45:00",
  },
  {
    id: 11,
    coach: 1,
    pupil: "Эрик 6 лет",
    timeStart: "2020-10-01 11:00:00",
    timeEnd: "2020-10-01 11:45:00",
  },
  {
    id: 12,
    coach: 5,
    pupil: "Тельнова Злата",
    timeStart: "2020-10-02 09:00:00",
    timeEnd: "2020-10-02 09:45:00",
  },
  {
    id: 13,
    coach: 5,
    pupil: "Ксения Аскерова, 9 лет",
    timeStart: "2020-10-02 10:00:00",
    timeEnd: "2020-10-02 10:45:00",
  },
];

export default function eventReducer(store = INITIAL_VALUE, action) {
  switch (action.type) {
    case "ADD_EVENT":
      return [
        ...store,
        {
          id: action.id,
          coach: action.coach,
          pupil: action.pupil,
          timeStart: action.timeStart,
          timeEnd: action.timeEnd,
        },
      ];
    default:
      return store;
  }
}
