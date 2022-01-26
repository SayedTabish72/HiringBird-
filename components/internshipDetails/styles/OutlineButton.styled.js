import styled from "styled-components";

export const OutButton = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  border: 2px solid #f26a7e;
  padding: 13px 39px;
  border-radius: 12px;
  background-color: #fafafa;
  color: #a9accb;
  width: 160px;
  @media (max-width: 961px) {
    display: none;
  }
`;
