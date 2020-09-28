import styled from "@emotion/styled";
import Icon from "../Icon/Icon.tsx";
import ViewSwitcher from "./ViewSwitcher.tsx";
import Filter from "./Filter.tsx";
import AddEvent from "./AddEvent.tsx";
import usePopup from "../../utils/usePopup.ts";

const AddButton = styled.button`
  padding: 15px;
  height: 43px;
  background: #52ad5b;
  border-radius: 30px;
  border: none;
  font-family: Jost;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #428a49;
  }
`;

const IconContainer = styled.div`
  padding-right: 7px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Buttons = () => {
  const [popupOpened, setPopupOpened, popupRef] = usePopup();
  return (
    <ButtonsContainer>
      <div>
        <AddButton onClick={() => setPopupOpened(true)}>
          <IconContainer>
            <Icon icon="plus" />
          </IconContainer>
          Добавить
        </AddButton>
        {popupOpened === true && (
          <AddEvent setPopupOpened={setPopupOpened} popupRef={popupRef} />
        )}
      </div>
      <Filter />
      <ViewSwitcher />
    </ButtonsContainer>
  );
};

export default Buttons;
