import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import styled from "@emotion/styled";
import localeDate from "../../utils/localeDate.ts";
import { setSelectedTime } from "../../store/timeAction.ts";

const RangeButton = styled.button`
  padding: 15px;
  height: 43px;
  margin-right: 10px;
  border: ${(props) =>
    props.active ? "none" : "1px solid rgba(0, 0, 0, 0.1)"};
  background-color: ${(props) => (props.active ? "#FFFFFF" : "transparent")};
  border-radius: 4px;
  font-style: bold;
  font-weight: 500;
  font-size: 13px;
  line-height: 100%;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #d9d9d9;
  }
  color: ${(props) => (props.active ? "#000000" : "rgba(0, 0, 0, 0.5)")};
`;

const RangeButtons = styled.div`
  display: flex;
`;

const setRangeWeek = (start, end, dispatch) => {
  const startOfWeek = localeDate(moment(start).startOf("week"));
  const endOfWeek = localeDate(moment(end).endOf("week"));
  dispatch(setSelectedTime(startOfWeek, endOfWeek));
};

const setOneDay = (start, dispatch) => {
  const day = localeDate(moment(start).startOf("week"));
  dispatch(setSelectedTime(day, day));
};

const RangeSwitcher = () => {
  const { start, end } = useSelector((store) => store.time);
  const dispatch = useDispatch();
  return (
    <RangeButtons>
      <RangeButton
        onClick={() => setRangeWeek(start, end, dispatch)}
        active={!start.isSame(end, "day")}
      >
        Неделя
      </RangeButton>
      <RangeButton
        onClick={() => setOneDay(start, dispatch)}
        active={start.isSame(end, "day")}
      >
        День
      </RangeButton>
    </RangeButtons>
  );
};

export default RangeSwitcher;
