import React, { useState, useEffect } from "react";
import { Container } from "../common/styles/Container.styled";
import styled from "styled-components";

function GetInTouch() {
  const [i, setI] = useState(0);
  const images = [
    "/home/getintouch/candidates.png",
    "/home/getintouch/candidates1.jpg",
    "/home/getintouch/candidates2.jpg",
  ];
  const [currImgSrc, setCurrSrc] = useState(images[i]);

  const changeImg = () => {
    if (i < images.length - 1) {
      setI(i + 1);
    } else {
      setI(0);
    }
    setCurrSrc(images[i]);
  };

  useEffect(() => {
    setTimeout(() => {
      changeImg();
    }, 3000);
  }, [i]);

  return (
    <Container style={({ marginTop: "30px" }, { marginBottom: "30px" })}>
      <SmallContainer>
        <LeftContainer>
          <img className="img" src={currImgSrc} alt="candidates" />
          <Wrap>
            <img src="/home/getintouch/img-change-signal.png" alt="" />
          </Wrap>
          <Button2 padding="11px 28px">Recruit Now</Button2>
        </LeftContainer>
        <RightContainer>
          <Box>
            <Heading>Get in touch with deserving candidates</Heading>
            <Text>
              If you are looking to connect with the best candidates you are at
              the right place. With over 200 top colleges and many success
              stories you will have access to the finest talent ! Register your
              Company and Recruit Interns with Hiring Bird today! Register your
              Company and Recruit Interns with Hiring Bird today! With over 200
              top colleges and many success stories you will have access to the
              finest talent with Hiring Bird today!{" "}
            </Text>
          </Box>
          <Button1 padding="11px 28px">Recruit Now</Button1>
        </RightContainer>
      </SmallContainer>
    </Container>
  );
}

export default GetInTouch;

const SmallContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.5em;
  background-color: #fff;
  @media (max-width: 927px) {
    flex-direction: column-reverse;
    gap: 0;
  }
`;
const LeftContainer = styled.div`
  .img {
    width: 392px;
    height: 330px;
    border-radius: 8px;
    @media (max-width: 927px) {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 927px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
  @media (max-width: 927px) {
    margin-bottom: 20px;
  }
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Box = styled.div``;
const Text = styled.p`
  margin: 5px 0;
  font-size: 16px;
  line-height: 27px;
  font-weight: normal;
  font-feature-settings: "salt" on, "liga" off;
  color: #18191f;
`;
const Heading = styled.h1`
  font-weight: 800;
  font-size: clamp(1.8rem, 1.6083rem + 0.8519vw, 2.375rem);
  color: #404366;
  width: 500px;
  @media (max-width: 1123px) {
    width: 400px;
  }
  @media (max-width: 927px) {
    width: 100%;
  }
  @media (max-width: 460px) {
    margin-bottom: 10px;
  }
`;

const Button1 = styled.button`
  padding: ${(props) => props.padding};
  cursor: pointer;
  background-color: ${(props) => props.color || "#f26a7e"};}};
  color: #fff;
  font-size: 16px;
  border: none;
  width: fit-content;
  transition: transform 0.1s ease-in-out;
  border-radius: 6px;
  user-select: none;
  &:hover {
  }
  &:active {
    transform: scale(0.9);
  }
  @media (max-width: 800px) {
    font-size: 14px;
    padding: 12px 20px;
  }
@media (max-width:927px){
    display:none;
}
`;

const Button2 = styled.button`
  padding: ${(props) => props.padding};
  cursor: pointer;
  background-color: ${(props) => props.color || "#f26a7e"};}};
  color: #fff;
  font-size: 16px;
  border: none;
  width: fit-content;
  transition: transform 0.1s ease-in-out;
  border-radius: 6px;
  user-select: none;
  &:hover {
  }
  &:active {
    transform: scale(0.9);
  }
  @media (max-width: 800px) {
    font-size: 14px;
    padding: 12px 20px;
  }
@media (min-width:927px){
    display:none;
}
`;
