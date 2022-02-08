import React from "react";
import styled from "styled-components";

function Card({ title, image }) {
  return (
   
      <Wrapper>
        <img src={`/home/skills/${image}.svg`} alt="" />
        <h3>{title}</h3>
      </Wrapper>
    
  );
}

export default Card;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.9rem;
width:270px;


  border: 1px solid rgba(208, 210, 230, 1);
  border-radius: 4px;
  padding: 1rem 1rem;
  user-select: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: #fff8f8;
  }

  &:active {
    transform: scale(0.95);
  }
`;

