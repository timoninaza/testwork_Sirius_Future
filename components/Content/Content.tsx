import styled from "@emotion/styled";
import FlexRow from "./FlexRow.tsx";
import Search from "./Search.tsx";
import Profile from "./Profile.tsx";
import RangeSwitcher from "./RangeSwitcher.tsx";
import Buttons from "./Buttons.tsx";
import Gap from "./Gap.tsx";
import Calendar from "./Calendar/Calendar.tsx";

const ContentContainer = styled.div`
  background-color: #e5e5e5;
  flex-grow: 1;
  position: relative;
  padding: 30px;
  overflow: auto;
`;

const Content = () => {
  return (
    <ContentContainer>
      <FlexRow>
        <Search />
        <Profile />
      </FlexRow>
      <Gap padding={30} vertical={false} />
      <FlexRow>
        <RangeSwitcher />
        <Buttons />
      </FlexRow>
      <Gap padding={20} vertical={false} />
      <Calendar />
    </ContentContainer>
  );
};

export default Content;
