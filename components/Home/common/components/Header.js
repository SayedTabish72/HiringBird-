import React from "react";
import styled from "styled-components";

function Header({ title, prevRef, nextRef }) {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <Icons>
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={prevRef}
        >
          <circle
            cx="19"
            cy="19"
            r="18"
            fill="white"
            stroke="#F26A7E"
            strokeWidth="2"
          />
          <path d="M21 13L15 19L21 25" fill="white" />
          <path
            d="M21 13L15 19L21 25"
            stroke="#F26A7E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={nextRef}
        >
          <circle
            cx="19"
            cy="19"
            r="18"
            transform="rotate(180 19 19)"
            fill="white"
            stroke="#F26A7E"
            strokeWidth="2"
          />
          <path d="M17 25L23 19L17 13" fill="white" />
          <path
            d="M17 25L23 19L17 13"
            stroke="#F26A7E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Icons>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  alignitems: "center";
  user-select: none;
  margin-bottom: 1.5rem;

  h1 {
    font-weight: 800;
    font-size: clamp(1.8rem, 1.6083rem + 0.8519vw, 2.375rem);
    color: #404366;
  }

  @media (max-width: 866px) {
    margin-bottom: 1rem;
    flex-direction: column;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 0.5rem;
  svg {
    cursor: pointer;
    &:active {
      transform: scale(0.9);
    }
  }
  @media (max-width: 866px) {
    display: none;
  }
`;
