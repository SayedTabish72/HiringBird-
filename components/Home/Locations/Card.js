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
  padding: 2.5rem 2rem;
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
