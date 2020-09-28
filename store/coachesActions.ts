export const addCoach = (name: string, color: string) => {
  return {
    type: "ADD_COACH",
    name,
    color,
  };
};

export const setCoachesSelected = (coaches) => {
  return {
    type: "SET_COACHES_SELECTED",
    coaches,
  };
};
