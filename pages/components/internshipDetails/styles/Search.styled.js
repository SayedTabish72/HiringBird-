import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  margin: 50px auto;
  width: 74%;
  @media (max-width: 600px) {
    width: 86%;
    margin: 28px auto;
  }
`;

export const InputField1 = styled.input`
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

export const SearchBar = styled.img`
  width: 21px;
  height: 21px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  @media (min-width: 784px) {
    display: none;
  }
`;

export const InputField2 = styled.input`
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
  @media (max-width: 468px) {
    display: none;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #f26a7e;
  margin-right: 20px;
  color: #fff;
  font-size: 16px;
  border: none;
  padding: 10px 26px;
  border-radius: 2px;
  &:hover {
    background-color: #fc5b73;
    transition: all 0.3s ease;
  }
  @media (max-width: 784px) {
    display: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  border: 1px solid #c9cbe2;
  border-radius: 2px;
  @media (max-width: 784px) {
    width: 100%;
  }
`;

export const Img = styled.img`
  height: 82%;
  display: flex;
  align-items: center;
  padding-top: 6px;
`;
