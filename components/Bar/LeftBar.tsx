import styled from "@emotion/styled";
import Header from "./Header.tsx";
import Menu from "./Menu.tsx";

const Container = styled.div`
  width: 210px;
  flex-shrink: 0;
`;

const LeftBar = () => {
  return (
    <Container>
      <Header />
      <Menu />
    </Container>
  );
};

export default LeftBar;
