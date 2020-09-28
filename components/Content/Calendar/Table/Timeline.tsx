import { useState, useEffect } from "react";
import moment from "moment";
import styled from "@emotion/styled";
import {
  ROW_HEIGHT,
  ROWSTEP,
  START,
  END,
  TABLE_HEADER_HEIGHT,
} from "./constants.ts";

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: ${(props) => props.top}px;
  width: calc(100% - 80px);
  left: calc(20px + 20px);
  transition: top 0.5s;
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: #ed0f48;
`;

const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: #ed0f48;
`;

export default function Timeline() {
  const [time, setTime] = useState(
    () => moment().hours() * 60 + moment().minutes()
  );
  useEffect(() => {
    const id = setInterval(() => {
      setTime(moment().hours() * 60 + moment().minutes());
    }, 60000);
    return () => clearInterval(id);
  }, []);
  if (START > time || time > END) return null;
  const top = (ROW_HEIGHT / ROWSTEP) * (time - START) + TABLE_HEADER_HEIGHT;
  return (
    <TimelineContainer top={top}>
      <Circle />
      <Line />
    </TimelineContainer>
  );
}
