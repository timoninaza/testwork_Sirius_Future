import { useState } from "react";
import styled from "@emotion/styled";
import Icon from "../Icon/Icon.tsx";

const SwitcherContainer = styled.div`
  background: #ffffff;
  border-radius: 33px;
  display: flex;
  flex-direction: row;
  height: 43px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 33px;
  width: 42px;
  height: 43px;
  border: none;
  padding: 14px;
  cursor: pointer;
  outline: none;
  &:hover {
    color: #000000;
    path {
      fill: #000000;
    }
  }
  path {
    fill: rgba(0, 0, 0, 0.5);
  }
  background-color: ${(props) => (props.active ? "#2E71F3" : "transparent")};
  ${(props) =>
    props.active &&
    `
        &,&:hover {
        color: #FFFFFF;
        path {
          fill: #FFFFFF;
          fill-opacity: 1;
        };
  }
  `}
`;

const IconContainer = styled.div`
  padding: 3px 1px 1px 1px;
`;

const ViewSwitcher = () => {
  const [view, setView] = useState("book");
  return (
    <SwitcherContainer>
      <Button active={view === "items"} onClick={() => setView("items")}>
        <IconContainer>
          <Icon icon="items" />
        </IconContainer>
      </Button>
      <Button
        active={view === "emptyCalendar"}
        onClick={() => setView("emptyCalendar")}
      >
        <IconContainer>
          <Icon icon="emptyCalendar" />
        </IconContainer>
      </Button>
      <Button active={view === "book"} onClick={() => setView("book")}>
        <IconContainer>
          <Icon icon="book" />
        </IconContainer>
      </Button>
    </SwitcherContainer>
  );
};

export default ViewSwitcher;
