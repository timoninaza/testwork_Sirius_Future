import styled from "@emotion/styled";

const PlaceholderContainer = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Jost;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
`;

const Placeholder = () => {
  return (
    <PlaceholderContainer>
      У меня не было дизайна, но эта страница тут для того, чтобы
      продемонстрировать роутинг.
    </PlaceholderContainer>
  );
};

export default Placeholder;
