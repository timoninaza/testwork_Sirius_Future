import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import Icon from "../Icon/Icon.tsx";
import { setCoachesSelected } from "../../store/coachesActions.ts";
import Popup from "../Popup.tsx";
import usePopup from "../../utils/usePopup.ts";

const FilterButton = styled.button`
  padding: 15px;
  height: 43px;
  background: #ffffff;
  border-radius: 30px;
  border: none;
  font-family: Jost;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 100%;
  color: #000000;
  display: flex;
  align-items: center;
  margin-right: 10px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #d9d9d9;
  }
`;

const IconContainer = styled.div`
  padding-right: 7px;
`;

const Header = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;
  padding: 7px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 11px;
  line-height: 16px;
  padding: 3px;
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
`;

const Input = styled.input`
  cursor: pointer;
`;

const Label = styled.label`
  cursor: pointer;
`;

const Filter = () => {
  const [popupOpened, setPopupOpened, popupRef] = usePopup();
  const dispatch = useDispatch();
  const allCoaches = useSelector((store) => store.coaches);
  const [selected, setSelected] = useState(allCoaches);
  useEffect(() => {
    if (!popupOpened) {
      setSelected(allCoaches);
    }
  }, [allCoaches, popupOpened]);

  return (
    <div>
      <FilterButton onClick={() => setPopupOpened(true)}>
        <IconContainer>
          <Icon icon="filter" />
        </IconContainer>
        Фильтр
      </FilterButton>
      {popupOpened && (
        <Popup ref={popupRef}>
          <Header>Выберите тренеров</Header>
          {selected.map((item, index) => {
            return (
              <CheckboxContainer key={item.id}>
                <Input
                  type="checkbox"
                  id={item.id}
                  onChange={(e) => {
                    const newSelected = [...selected];
                    newSelected[index] = {
                      ...newSelected[index],
                      selected: e.target.checked,
                    };
                    setSelected(newSelected);
                  }}
                  checked={item.selected}
                />
                <Label for={item.id}>{item.name}</Label>
              </CheckboxContainer>
            );
          })}
          <Button
            onClick={() => {
              dispatch(setCoachesSelected(selected));
              setPopupOpened(false);
            }}
          >
            Применить
          </Button>
        </Popup>
      )}
    </div>
  );
};

export default Filter;
