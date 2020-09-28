export const setSelectedTime = (
  selectedTimeStart: string,
  selectedTimeEnd: string
) => {
  return {
    type: "SET_SELECTED_TIME",
    start: selectedTimeStart,
    end: selectedTimeEnd,
  };
};

export const deleteSelectedTime = () => {
  return {
    type: "DELETE_SELECTED_TIME",
  };
};
