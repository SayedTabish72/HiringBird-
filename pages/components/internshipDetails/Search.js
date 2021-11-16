import React from "react";
import {
  SearchContainer,
  InputField1,
  InputField2,
  InputContainer,
  Img,
  Button,
  SearchBar,
  SearchBarContainer,
} from "./styles/Search.styled";

function Search() {
  return (
    <SearchContainer>
      <InputContainer>
        <SearchBarContainer>
          <SearchBar src="/searchbar.svg" />
        </SearchBarContainer>
        <InputField1 placeholder="e.g. UX Design or HB1234"></InputField1>
        <Img src="/line.svg" />
        <InputField2 placeholder="city, state or zip code"></InputField2>
      </InputContainer>
      <Button>Search</Button>
    </SearchContainer>
  );
}

export default Search;
