import { useSelector } from "react-redux";
import moment from "moment";
import styled from "@emotion/styled";
import {
  TABLE_HEADER_HEIGHT,
  ROW_HEIGHT,
  ROWSTEP,
  END,
  START,
} from "./constants.ts";
import Column from "./Column.tsx";

const Table = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
`;

const Row = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 100%;
  top: ${(props) => props.position}px;
  z-index: 10;
`;

const rows = () => {
  let rows = [];
  let time = START;
  let counter = 0;
  while (time <= END) {
    rows.push(
      <Row
        key={counter}
        position={ROW_HEIGHT * counter + TABLE_HEADER_HEIGHT}
      />
    );
    time = time + ROWSTEP;
    counter++;
  }
  return rows;
};

const rowsarray = rows();

const Content = () => {
  const { start, end } = useSelector((store) => store.time);
  let columnArray = [];
  if (start.isSame(end, "day")) {
    columnArray.push(<Column key={start} date={start} />);
  } else {
    for (let i = 0; i < 7; i += 1) {
      columnArray.push(<Column key={i} date={moment(start).add(i, "days")} />);
    }
  }
  return (
    <Table>
      {rowsarray}
      {columnArray}
    </Table>
  );
};

export default Content;
