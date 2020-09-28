import styled from "@emotion/styled";
import TimeColumn from "./TimeColumn.tsx";
import Content from "./Content.tsx";
import Timeline from "./Timeline.tsx";

const TableContainer = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  position: relative;
`;

const Table = () => {
  return (
    <TableContainer>
      <TimeColumn />
      <Content />
      <Timeline />
    </TableContainer>
  );
};

export default Table;
