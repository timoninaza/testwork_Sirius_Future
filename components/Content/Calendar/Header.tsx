import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import Coaches from "./Coaches.tsx";
import DateSwitcher from "./DateSwitcher.tsx";
import localeDate from "../../../utils/localeDate.ts";

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  position: relative;
`;
const Date = styled.div`
  font-size: 18px;
  line-height: 26px;
`;
const fullDate = "D MMMM YYYY г.";

const formatDate = (start, end) => {
  let left;
  if (start.isSame(end, "day")) {
    return start.format(fullDate);
  }
  if (start.isSame(end, "year")) {
    left = "D MMMM";
  } else {
    left = fullDate;
  }
  return `${start.format(left)} – ${end.format(fullDate)}`;
};

const Header = () => {
  const { start, end } = useSelector((store) => store.time);
  return (
    <HeaderContainer>
      <Date>{formatDate(...localeDate(start, end))}</Date>
      <Coaches />
      <DateSwitcher />
    </HeaderContainer>
  );
};

export default Header;
