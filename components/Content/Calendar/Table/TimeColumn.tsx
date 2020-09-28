import styled from "@emotion/styled";
import {
  TABLE_HEADER_HEIGHT,
  ROW_HEIGHT,
  TIMESTEP,
  ROWSTEP,
} from "./constants.ts";
import Icon from "../../../Icon/Icon.tsx";
import { timeList } from "./listOfTime.ts";

const Column = styled.div`
  width: 48px;
  height: ${timeList.length * ROW_HEIGHT * (TIMESTEP / ROWSTEP) +
  TABLE_HEADER_HEIGHT}px;
  padding-top: 15px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
`;
const IconContainer = styled.div`
  padding-left: 9px;
`;

const Item = styled.div`
  font-size: 12px;
  line-height: 17px;
  color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: ${(props) =>
    props.number * ROW_HEIGHT * (TIMESTEP / ROWSTEP) +
    TABLE_HEADER_HEIGHT -
    8.5}px;
`;

const TimeColumn = () => {
  return (
    <Column>
      <IconContainer>
        <Icon icon="alarm" />
      </IconContainer>
      {timeList.map((item, index) => {
        return (
          <Item key={item} number={index}>
            {item}
          </Item>
        );
      })}
    </Column>
  );
};

export default TimeColumn;
