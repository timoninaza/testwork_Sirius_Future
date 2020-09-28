import { useState } from "react";
import styled from "@emotion/styled";
import Icon from "../Icon/Icon.tsx";

const Input = styled.input`
  background: #ffffff;
  border-radius: 67px;
  padding: 13px 36px;
  border: none;
  width: 40%;
  outline: none;
`;

const MoveIcon = styled.div`
  position: absolute;
  top: 42px;
  left: 45px;
`;

const Search = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <MoveIcon>
        <Icon icon="search" />
      </MoveIcon>
      <Input
        placeholder="Поиск клиента"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
};

export default Search;
