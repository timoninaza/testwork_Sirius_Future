import styled from "@emotion/styled";
import Header from "./Header.tsx";
import Table from "./Table/Table.tsx";

const CalendarContainer = styled.div`
  background-color: white;
  border-radius: 4px;
`;

const Calendar = () => {
  return (
    <CalendarContainer>
      <Header />
      <Table />
    </CalendarContainer>
  );
};

export default Calendar;
