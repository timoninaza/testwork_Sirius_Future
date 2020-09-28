import Logo from "./Logo.tsx";
import Icon from "../Icon/Icon.tsx";
import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  margin-bottom: 45px;
`;

const IconContainer = styled.div`
  position: absolute;
  cursor: pointer;
  right: 20px;
  top: 30px;
  path {
    fill: rgba(0, 0, 0, 0.5);
  }
  &:hover {
    color: #000000;
    path {
      fill: #000000;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <IconContainer>
        <Icon icon="hideBar" />
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
