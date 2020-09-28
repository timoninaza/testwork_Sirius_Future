import styled from "@emotion/styled";
import coordinates from "../../../../utils/coordinates.ts";

const WorkHours = styled.div`
  background-color: ${(props) => props.color}1A;
  top: ${(props) => props.coordinates.top}px;
  height: ${(props) => props.coordinates.height - 2}px;
  width: calc(100% - 4px);
  position: absolute;
  left: 2px;
  z-index: 10;
  border-left: 4px solid ${(props) => props.color};
`;

const CoachWorkHours = ({ workHours, coach }) => {
  return (
    <WorkHours
      color={coach.color}
      coordinates={coordinates(workHours.timeStart, workHours.timeEnd)}
    />
  );
};

export default CoachWorkHours;
