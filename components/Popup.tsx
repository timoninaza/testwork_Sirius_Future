import styled from "@emotion/styled";

const Popup = styled.div`
  position: absolute;
  margin-top: 14px;
  padding: 7px;
  width: 250px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 100;
`;

export default Popup;
