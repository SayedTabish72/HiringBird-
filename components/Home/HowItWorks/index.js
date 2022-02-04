import React from "react";
import styled from "styled-components";
import Button from "../common/components/Button";
import { Container } from "../common/styles/Container.styled";

const HowItWorks = () => {
  return (
    <Container>
      <Top>
        <Left>
          <h1 data-testid="heading">
            How does it <br /> work?
          </h1>
        </Left>
        <Right>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque
            nihil labore repudiandae eligendi, animi accusamus facere.
            Perferendis et quaerat eos magni veritatis, itaque unde, quis quas a
            maiores facere.
          </p>
          <Button title="Apply Now" padding="10px 26px" />
        </Right>
      </Top>
      <Bottom>
        <Wrap>
          <ImageContainer>
            <img
              data-testid="svg"
              className="vector-image"
              src="/home/howitworks/1.svg"
              alt="universe"
            />

            <div className="backgroundVector">
              <img src="/home/howitworks/1-bg.svg" alt="" />
            </div>
          </ImageContainer>
          <h3>Sign In</h3>
          <p>Create an account to get started</p>
        </Wrap>

        <Wrap>
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
        </Wrap>

        <Wrap>
          <ImageContainer>
            <img
              className="vector-image"
              src="/home/howitworks/3.svg"
              alt="universe"
            />
            <div className="backgroundVector">
              <img src="/home/howitworks/3-bg.svg" alt="" />
            </div>
          </ImageContainer>
          <h3>Apply and follow procedure</h3>
          <p>Now sit back and wait for the call back and follow simple steps</p>
        </Wrap>
      </Bottom>
    </Container>
  );
};

export default HowItWorks;

const Top = styled.div`
  display: flex;
  margin-bottom: 3rem;
  @media (max-width: 945px) {
    margin-bottom: 1.5rem;
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex-basis: 50%;
  h1 {
    font-weight: 800;
    font-size: clamp(2rem, 1.5rem + 2.2222vw, 3.5rem);
    color: #404366;
    margin-bottom: 1rem;
  }
`;
const Right = styled.div`
  flex-basis: 50%;
  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: #18191f;
    margin-bottom: 1em;
    @media (max-width: 600px) {
      line-height: 27px;
      font-size: 18px;
    }
  }
  button {
    background: #f26a7e;
    border-radius: 4px;
    padding: 10px 26px;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

const Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3%;
  width: min(100%, 75rem);
  margin-inline: auto;
  @media (max-width: 1274px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 700px) {
    gap: 2%;
    grid-template-columns: 1fr;
  }
`;

const Wrap = styled.div`
  border: 1px solid lightgrey;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #d0d2e6;
  border-radius: 10px;
  h3 {
    font-weight: 600;
    font-size: 22px;
    line-height: 32px;
    font-feature-settings: "salt" on, "liga" off;
    color: #404366;
    margin-bottom: 0.3em;
  }
  p {
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    font-feature-settings: "salt" on, "liga" off;
    color: #404366;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  .vector-image {
    transform: translateY(1.5rem);
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
