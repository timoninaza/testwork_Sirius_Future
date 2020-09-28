import styled from "@emotion/styled";
import { useSelector } from "react-redux";

const CoachesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`;

const CoachContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 15px;
  font-size: 11px;
  line-height: 16px;
`;

const ColoredCircle = styled.div`
  border-radius: 50%;
  height: 11px;
  width: 11px;
  background-color: ${(props) => props.color};
  margin-right: 5px;
`;

const Coaches = () => {
  const coaches = useSelector((store) => store.coaches);
  return (
    <CoachesContainer>
      {coaches.map((item) => {
        if (item.selected) {
          return (
            <CoachContainer key={item.id}>
              <ColoredCircle color={item.color} />
              {item.name}
            </CoachContainer>
          );
        }
        if (!item.selected) {
          return null;
        }
      })}
    </CoachesContainer>
  );
};

export default Coaches;
