import styled from "styled-components";

export const Button = styled.button`
  padding: ${(props) => props.padding || "10px 26px"};
  border-radius: 6px;
  border: 1px solid #f26a7e;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  background: #fff;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    background-color: #f26a7e;
    color: #fff;
  }
  &:active {
    transform: scale(0.9);
  }
  @media (max-width: 800px) {
    font-size: 14px;
    padding: 9px 16px;
  }
`;
