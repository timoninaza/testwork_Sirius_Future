import styled from "@emotion/styled";

const Div = styled.div`
  height: ${(props) => (props.vertical ? 0 : props.padding)}px;
  width: ${(props) => (props.vertical ? props.padding : 0)}px;
`;

type GapProps = {
  padding: number;
  vertical: boolean;
};

const Gap = ({ padding, vertical }: GapProps) => {
  return <Div padding={padding} />;
};

export default Gap;
