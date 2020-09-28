const INITIAL_VALUE = [
  {
    id: 1,
    name: "Высоцкая Элеонора",
    color: "#DF1B7D",
    selected: true,
  },
  {
    id: 2,
    name: "Гайсина Гузель",
    color: "#52AD5B",
    selected: true,
  },
  {
    id: 3,
    name: "Гиголо Анна",
    color: "#FE8900",
    selected: true,
  },
  {
    id: 4,
    name: "Горбукова Юлия",
    color: "#00459B",
    selected: true,
  },
  {
    id: 5,
    name: "Марков Руслан",
    color: "#2E71F3",
    selected: true,
  },
];

export default function coachesReducer(store = INITIAL_VALUE, action) {
  switch (action.type) {
    case "ADD_COACH":
      return [
        ...store,
        {
          name: action.name,
          color: action.color,
        },
      ];
    case "SET_COACHES_SELECTED":
      return [...action.coaches];
    default:
      return store;
  }
}
