import styled from "@emotion/styled";
import Placeholder from "../../components/Placeholder.tsx";

import LeftBar from "../../components/Bar/LeftBar.tsx";
import Content from "../../components/Content/Content.tsx";

const Page = styled.div`
  display: flex;
  height: 100vh;
`;

export default function Home() {
  return (
    <Page>
      <LeftBar />
      <Placeholder />
    </Page>
  );
}
