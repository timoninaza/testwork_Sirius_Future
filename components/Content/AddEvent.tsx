import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import Datetime from "react-datetime";
import { addEvent } from "../../store/eventAction.ts";
import Popup from "../Popup.tsx";
import getMinutes from "../../utils/getMinutes.ts";
import { END, START } from "./Calendar/Table/constants.ts";

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  input {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    outline: none;
    padding: 5px;
    margin-bottom: 10px;
  }
`;

const Select = styled.select`
  outline: none;
  border-radius: 3px;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const Header = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;
  padding-bottom: 20px;
  padding-top: 3px;
`;

const Button = styled.button`
  background: #52ad5b;
  border-radius: 25px;
  font-weight: 500;
  font-size: 13px;
  line-height: 100%;
  color: #ffffff;
  border: none;
  padding: 5px;
  margin: 5px;
  &:hover {
    background-color: #428a49;
  }
  cursor: pointer;
  &[disabled] {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const AddEvent = ({ setPopupOpened, popupRef }) => {
  const dispatch = useDispatch();
  const coaches = useSelector((store) => store.coaches);
  const [pupil, setPupil] = useState("");
  const [coach, setCoach] = useState(coaches[0].id);
  const [timeStart, settimeStart] = useState(new Date());
  const [timeEnd, settimeEnd] = useState(new Date());
  return (
    <Popup ref={popupRef}>
      <Container>
        <Header>Добавление урока</Header>
        <Select
          onChange={(e) => {
            setCoach(e.target.value);
          }}
        >
          {coaches.map((coach) => {
            return <option value={coach.id}>{coach.name}</option>;
          })}
        </Select>
        <input
          placeholder="Имя ученика"
          value={pupil}
          onChange={(e) => {
            setPupil(e.target.value);
          }}
        />
        <Datetime
          value={timeStart}
          onChange={settimeStart}
          dateFormat="YYYY-MM-DD"
          timeFormat="HH:mm"
        />
        <Datetime
          value={timeEnd}
          onChange={settimeEnd}
          dateFormat="YYYY-MM-DD"
          timeFormat="HH:mm"
        />
        <Button
          onClick={() => {
            dispatch(
              addEvent({ id: Math.random(), coach: Number(coach), pupil, timeStart, timeEnd })
            );
            setPopupOpened(false);
          }}
          disabled={
            !(coach && pupil && timeStart && timeEnd) ||
            getMinutes(timeStart) < START ||
            getMinutes(timeEnd) > END ||
            getMinutes(timeStart) > END ||
            getMinutes(timeEnd) < START ||
            getMinutes(timeStart) > getMinutes(timeEnd)
          }
        >
          Добавить
        </Button>
      </Container>
    </Popup>
  );
};

export default AddEvent;
