import React from "react";
import { SearchContainer, InputField, InputContainer, Img } from "./styles/Search.styled";
import { Button } from "../navbar/styles/navbar.styled";

function Search() {
  return (
    <SearchContainer>
    <InputContainer>
      <InputField placeholder="e.g. UX Design or HB1234"></InputField>
      <Img src="v-line.svg" />
      <InputField placeholder="city, state or zip code"></InputField>
      </InputContainer>
      <Button>Search</Button>
    </SearchContainer>
  );
}

export default Search;
