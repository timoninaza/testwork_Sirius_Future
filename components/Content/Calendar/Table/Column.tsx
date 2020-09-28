import { useSelector } from "react-redux";
import moment from "moment";
import styled from "@emotion/styled";
import { TABLE_HEADER_HEIGHT } from "./constants.ts";
import localeDate from "../../../../utils/localeDate.ts";
import Event from "./Event.tsx";
import CoachWorkHours from "./CoachWorkHours.tsx";

const ColumnContainer = styled.div`
  background-color: ${(props) => (props.today ? "#f4f6f9" : "#ffffff")};
  position: relative;
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const TimeColumn = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 100%;
  div:last-child > & {
    border-right: none;
  }
  display: flex;
  flex-direction: row;
`;

const Header = styled.div`
  height: ${TABLE_HEADER_HEIGHT}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Date = styled.div`
  font-size: 12px;
  line-height: 110%;
  text-align: center;
  color: #000000;
`;

const Weekday = styled.div`
  color: rgba(0, 0, 0, 0.5);
  text-transform: capitalize;
`;

const InnerColumn = styled.div`
  width: ${(props) => (1 / props.count) * 100}%;
  height: 100%;
  position: relative;
`;

const Column = ({ date }) => {
  const events = useSelector((store) => store.event);
  const workHours = useSelector((store) => store.workHours);
  const allCoaches = useSelector((store) => store.coaches);
  const coaches = new Set();
  const eventsOfDate = events.filter((item) => {
    if (date.isSame(item.timeStart, "day")) {
      coaches.add(item.coach);
      return true;
    }
  });
  const workHoursOfDay = workHours.filter((item) => {
    if (date.isSame(item.timeStart, "day")) {
      coaches.add(item.coach);
      return true;
    }
  });
  const coachesArray = [...coaches]
    .map((coachId) => allCoaches.find((item) => item.id == coachId))
    .filter((item) => item.selected);
  return (
    <ColumnContainer today={date.isSame(moment(), "days")}>
      <Header>
        <Date>{date.format("DD.MM")},</Date>
        <Weekday>{localeDate(date).format("dddd")}</Weekday>
      </Header>
      <TimeColumn>
        {coachesArray.map((coach) => {
          return (
            <InnerColumn key={coach.id} count={coachesArray.length}>
              {eventsOfDate
                .filter((item) => item.coach === coach.id)
                .map((item) => {
                  return <Event key={item.id} event={item} coach={coach} />;
                })}
              {workHoursOfDay
                .filter((item) => item.coach == coach.id)
                .map((item, index) => {
                  return (
                    <CoachWorkHours
                      key={index}
                      workHours={item}
                      coach={coach}
                    />
                  );
                })}
            </InnerColumn>
          );
        })}
      </TimeColumn>
    </ColumnContainer>
  );
};

export default Column;
