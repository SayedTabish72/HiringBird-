import React from "react";
import styled from "styled-components";

function Card() {
  return (
    <Wrapper>
      <div className="flex">
        <div className="content">
          <h2>HIRING NOW</h2>
          <h3>UI/UX Design Internships</h3>
          <h5>02/01/2022-14/03/2022</h5>
        </div>
        <img src="/home/internshipCollections/hb-logo.svg" alt="" />
      </div>

      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="19"
          cy="19"
          r="17.5"
          stroke="#404366"
          strokeOpacity="0.81"
          strokeWidth="3"
        />
        <path
          d="M27.6367 19.0001L14.6822 26.4794L14.6822 11.5208L27.6367 19.0001Z"
          fill="#404366"
          fillOpacity="0.81"
        />
      </svg>

      <p>Search with Internship ID and Apply</p>
    </Wrapper>
  );
}
export default Card;

const Wrapper = styled.div`
  border: 2px solid #e4e5f0;
  border-radius: 10px;
  user-select: none;
  padding: 1rem;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  .flex {
    display: flex;
    justify-content: space-between;
  }

  img {
    height: 30px;
    object-fit: contain;
  }

  h2 {
    font-weight: bold;
    font-size: 24px;
    letter-spacing: 0.04em;
    color: #404366;
  }

  h3 {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.04em;
    color: #404366;
  }

  h5 {
    font-size: 14px;
    color: #ec1f28;
  }

  svg {
    align-self: center;
    margin: 1rem 0;

    &:active {
      transform: scale(0.9);
    }
  }

  p {
    font-size: 16px;
    color: #404366;
  }

  &:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: -5.3rem;
    z-index: -1;
    height: 16rem;
    width: 16rem;
    background: url("/home/internshipCollections/vector.svg") no-repeat center
      center / cover;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 16px;
    }
    h5 {
      font-size: 12px;
    }
    p {
      font-size: 14px;
    }
  }
`;
