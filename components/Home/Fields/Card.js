import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Card({ title, image }) {
  return (
    <Link href={`/internship?industry=${title.toLowerCase()}`}>
      <Wrapper>
        <img src={`/home/industries/${image}.svg`} alt="" />
        <h3>{title}</h3>
      </Wrapper>
    </Link>
  );
}

export default Card;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  border: 1px solid rgba(75, 75, 75, 0.3);
  border-radius: 8px;
  padding: 2.5rem 2rem;
  user-select: none;
  cursor: pointer;
  h3 {
    font-size: 16px;
  }
  img {
    height: 3rem;
  }
  @media (max-width: 800px) {
    padding: 2rem 1rem;
    img {
      height: 3rem;
    }
    h3 {
      font-size: 14px;
    }
  }
  @media (max-width: 1036px) {
    
    h3 {
      font-size: 15px;
    }
  }
  @media (max-width: 872px) {
    padding: 2rem 1rem;
    img {
      height: 3rem;
    }
    h3 {
      font-size: 14px;
    }
  }
  &:hover {
    background: #fff8f8;
  }

  &:active {
    transform: scale(0.95);
  }
`;
