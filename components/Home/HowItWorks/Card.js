import React from "react";
import styled from "styled-components";

function Card() {
  return (
    <Wrapper>
      <ImageContainer>
        <img
          className="vector-image"
          src="/home/howitworks/2.svg"
          alt="universe"
        />

        <div className="backgroundVector">
          <img src="/home/howitworks/2-bg.svg" alt="" />
        </div>
      </ImageContainer>
      <h3>Search for internships</h3>
      <p>Look thorugh our carefully handpicked bunch of internships</p>
    </Wrapper>
  );
}

export default Card;

const Wrapper = styled.div`
  border: 1px solid lightgrey;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #d0d2e6;
  border-radius: 10px;
  user-select: none;
  cursor: pointer;
  h3 {
    font-weight: 600;
    font-size: 22px;
    line-height: 32px;
    font-feature-settings: "salt" on, "liga" off;
    color: #404366;
    margin-bottom: 0.6rem;
    @media (max-width: 767px) {
      margin-bottom: 0.1rem;
      font-size: 18px;
    }
  }
  p {
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    font-feature-settings: "salt" on, "liga" off;
    color: #404366;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
  &:active {
    transform: scale(0.98);
  }
`;
const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  .vector-image {
    transform: translateY(1.5rem);
    height: 12rem;
    @media (max-width: 600px) {
      height: 10rem;
    }
  }
  .backgroundVector {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    img {
      max-width: 100%;
    }
  }
`;
