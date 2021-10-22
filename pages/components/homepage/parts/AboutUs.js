import React from "react";
import { Container } from "./styles/CommonComponents/Container.styled";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <Container>
      <Split>
        <Left>
          <div className="head">
            <h1>About us</h1>
            <h1>Our Mission</h1>
          </div>

          <div className="body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              deserunt vero quis unde. Vitae in impedit quo eos maxime illo
              perferendis ducimus, magni tenetur accusantium quis facere iure,
              molestiae sint!
            </p>
          </div>
        </Left>
        <Right>
          <img src="aboutus.png" alt="hello" />
        </Right>
      </Split>
    </Container>
  );
};

export default AboutUs;

const Split = styled.div`
  display: flex;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  margin-top: 3rem;
  flex-basis: 50%;
  @media (max-width: 860px) {
    margin-top: 0;
  }
  .head {
    display: flex;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
    @media (max-width: 860px) {
      margin-top: 0;
      margin-bottom: 1em;
    }
    h1 {
      font-weight: bold;
      font-size: 40px;
      color: #404366;
      text-decoration: underline;
      @media (max-width: 1000px) {
        font-size: 35px;
      }
      &:last-child {
        color: #c9cbe2;
        margin-left: 2rem;
        text-decoration: none;
      }
    }
  }
  .body {
    p {
      font-weight: normal;
      font-size: 20px;
      line-height: 32px;
      @media (max-width: 1000px) {
        font-size: 17px;
      }
    }
  }
`;
const Right = styled.div`
  flex-basis: 50%;
  margin-left: 3rem;
  @media (max-width: 1000px) {
    margin-left: 1rem;
  }
  img {
    display: block;
    max-width: 100%;
    margin-inline: auto;
  }
`;
