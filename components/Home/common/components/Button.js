import React from "react";
import styled from "styled-components";

const Button = ({ title, padding }) => {
  return <Wrapper padding={padding}>{title}</Wrapper>;
};

export default Button;

const Wrapper = styled.div`
  padding: ${(props) => props.padding};
  cursor: pointer;
  background-color: #f26a7e;
  color: #fff;
  font-size: 16px;
  border: none;
  width: fit-content;
  transition: transform 0.1s ease-in-out;
  border-radius: 6px;
  user-select: none;
  &:hover {
    background-color: #fc5b73;
  }
  &:active {
    transform: scale(0.9);
  }
  @media (max-width: 800px) {
    font-size: 14px;
    padding: 12px 20px;
  }
`;
