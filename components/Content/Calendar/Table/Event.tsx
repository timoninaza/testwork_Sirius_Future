import styled from "@emotion/styled";
import coordinates from "../../../../utils/coordinates.ts";
import Icon from "../../../Icon/Icon.tsx";

const EventContainer = styled.div`
  opacity: 1;
  background-color: white;
  width: calc(100% - 4px);
  border: 2px solid ${(props) => props.color};
  top: ${(props) => props.coordinates.top}px;
  height: ${(props) => props.coordinates.height - 2}px;
  border-left: 4px solid ${(props) => props.color};
  border-radius: 0px 3px 3px 0px;
  position: absolute;
  left: 2px;
  z-index: 50;
  font-family: Jost;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 10px;
  color: #000000;
  display: flex;
  flex-direction: column;
  padding: 5px 8px 1px 5px;
  word-break: break-all;
`;

const Event = ({ event, coach }) => {
  return (
    <EventContainer
      color={coach.color}
      coordinates={coordinates(event.timeStart, event.timeEnd)}
    >
      <div>
        <Icon icon="small pupil" />
      </div>
      {event.pupil}
    </EventContainer>
  );
};

export default Event;
