import React from "react";
import styled from "styled-components";
import Link from "next/link";

function Card({ title, image }) {
  return (
    <Link href={`/internship/?categories=${title.toLowerCase()}`}>
      <Wrapper>
        <img src={`${image}`} alt="" />
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
    @media (max-width: 620px) {
      font-size: 0.85rem;
    }
  }
`;

const ima = styled.image`
  position: absolute;
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 0px;
  height: 0px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
`;
