import React from "react";
import styled from "styled-components";
import { Container } from "../common/styles/Container.styled";

const TopCompanies = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Top Companies Hiring</h1>
        <Split>
          <Left>
            <h2>
              Get internships in <br /> renowned companies
            </h2>
            <h5>Choose HiringBird for your next internship opportunity</h5>
            <button>Join Skilzen</button>
          </Left>
          <Right>
            <img src="/home/topcompanies/vector.svg" alt="" />
          </Right>
        </Split>
      </Container>
    </Wrapper>
  );
};

export default TopCompanies;

const Wrapper = styled.div`
  @media (min-width: 800px) {
    background: #c9cbe2;
  }
  h1 {
    font-weight: 800;
    font-size: clamp(2.413rem, 2.2507rem + 2.4993vw, 4.5rem);
    color: #404366;
    margin-bottom: 1.5rem;
    /* @media (max-width: 600px) {
      font-size: 45px;
    } */
  }
`;
const Split = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-basis: 50%;
  gap: 0.8rem;
  h2 {
    font-weight: 800;
    font-size: 36px;
    line-height: 41px;
    color: #f26a7e;
    @media (max-width: 800px) {
      display: none;
    }
  }
  h5 {
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #404366;
    margin-bottom: 2.5rem;
    @media (max-width: 800px) {
      margin-bottom: 1rem;
    }
  }
  button {
    padding: 15px 31px;
    background: #f26a7e;
    border-radius: 6px;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    order: 2;
    flex-basis: 100%;
    text-align: center;
    align-items: center;
  }
`;
const Right = styled.div`
  flex-basis: 50%;
  img {
    display: block;
    margin-inline: auto;
    max-width: 100%;
  }
  @media (max-width: 800px) {
    flex-basis: 100%;
    order: 1;
    position: relative;
    &:before {
      content: "";
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        #ffffff 88.48%
      );
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`;
