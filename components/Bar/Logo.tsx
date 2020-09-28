import styled from "@emotion/styled";
import LogoSvg from "./Logo.svg";

const LogoContainer = styled.div`
  padding: 30px 0;
  text-align: center;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoSvg />
    </LogoContainer>
  );
};

export default Logo;
