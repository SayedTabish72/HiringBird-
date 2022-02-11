import React from "react";
import styled from "styled-components";
import Link from "next/link";

function Card({ title, image }) {
  return (
    <Link href={`/internship/?skills=${title.toLowerCase()}`}>
      <Wrapper>
        <img src={`/home/skills/${image}.png`} alt="" />
        <h3>{title}</h3>
      </Wrapper>
    </Link>
  );
}

export default Card;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  border: 1px solid rgba(208, 210, 230, 1);
  border-radius: 4px;
  padding: 1rem 1rem;
  user-select: none;
  text-align: center;
  cursor: pointer;
  @media (max-width: 512px) {
    gap: 0.5rem;
  }
  img {
    height: 2rem;
  }

  &:hover {
    background: #fff8f8;
  }

  &:active {
    transform: scale(0.95);
  }

  h3 {
    text-align: left;
    @media (max-width: 620px) {
      font-size: 0.85rem;
    }

    @media (max-width: 1281px) {
      font-size: 1rem;
    }
    @media (max-width: 568px) {
      font-size: 0.85rem;
    }
  }
`;
