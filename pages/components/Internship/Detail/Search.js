import React from "react";
import styled from "styled-components";

const Search = () => {
  return (
    <Wrapper>
      <InputContainer>
        <InputField placeholder="e.g. UX Design or HB1234"></InputField>
        <Img src="/intershipdetail/line.svg" />
        <InputField placeholder="city, state or zip code"></InputField>
      </InputContainer>
      <Button>Search</Button>
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  display: flex;
  margin: 45px auto;
  width: min(95%, 50rem);
  @media (max-width: 600px) {
    display: none;
  }
`;
const InputContainer = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  border: 1px solid #c9cbe2;
  border-radius: 2px;
`;

const Img = styled.img`
  height: 82%;
  display: flex;
  align-items: center;
  padding-top: 6px;
`;
const InputField = styled.input`
  border: none;
  width: 100%;
  outline: none;
  padding: 0 20px;
  color: #404366;
  &::placeholder {
    font-size: 13px;
    font-weight: 500;
    color: #c9cbe2;
  }
`;

const Button = styled.button`
  background-color: #f26a7e;
  border-radius: 6px;
  padding: 17px 35px;
  border: none;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  margin-left: 0.6em;
`;
