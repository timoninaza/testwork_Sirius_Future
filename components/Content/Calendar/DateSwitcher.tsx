import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import styled from "@emotion/styled";
import {
  setSelectedTime,
  deleteSelectedTime,
} from "../../../store/timeAction.ts";
import Icon from "../../Icon/Icon.tsx";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 20px;
  top: 25px;
`;

const Date = styled.div`
  padding: 0 10px;
  font-size: 11px;
  line-height: 16px;
  cursor: pointer;
  font-weight: 500;
  text-decoration-line: underline;
  text-transform: uppercase;
  color: #979797;
`;

const IconContainer = styled.div`
  cursor: pointer;
`;

const time = (start, end, subtract: boolean) => {
  const diff = start.isSame(end, "day") ? 1 : 7;
  let resStart;
  let resEnd;
  if (subtract) {
    resStart = moment(start).subtract(diff, "day");
    resEnd = moment(end).subtract(diff, "day");
  } else {
    resStart = moment(start).add(diff, "day");
    resEnd = moment(end).add(diff, "day");
  }
  return [resStart, resEnd];
};

const DateSwitcher = () => {
  const dispatch = useDispatch();
  const { start, end } = useSelector((store) => store.time);
  return (
    <Container>
      <IconContainer
        onClick={() => dispatch(setSelectedTime(...time(start, end, true)))}
      >
        <Icon icon="leftArrow" />
      </IconContainer>
      <Date onClick={() => dispatch(deleteSelectedTime())}>Сегодня</Date>
      <IconContainer
        onClick={() => dispatch(setSelectedTime(...time(start, end, false)))}
      >
        <Icon icon="rightArrow" />
      </IconContainer>
    </Container>
  );
};

export default DateSwitcher;
