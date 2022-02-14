import styled from "styled-components";

export const Button = styled.button`
  padding: ${(props) => props.padding};
  cursor: pointer;
  background-color: ${(props) => props.color || "#f26a7e"};}};
  color: #fff;
  font-size: 16px;
  border: none;
  width: fit-content;
  transition: transform 0.1s ease-in-out;
  border-radius: 6px;
  user-select: none;
  &:hover {
  }
  &:active {
    transform: scale(0.9);
  }
  @media (max-width: 800px) {
    font-size: 14px;
    /* padding: 12px 20px; */
  }
`;
