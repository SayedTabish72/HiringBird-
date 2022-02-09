import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Card({ title, image }) {
  return (
    <Link href={`/internship?location=${title.toLowerCase()}`}>
      <Wrapper>
        <img src={`/home/locations/${image}.svg`} alt="" />
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
  gap: 0.6rem;

  border: 1px solid rgba(75, 75, 75, 0.3);
  border-radius: 8px;
  padding: 2.5rem 1rem;
  user-select: none;
  text-align: center;
  cursor: pointer;

  @media (max-width: 800px) {
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
