import React, { useRef, useContext, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { InternshipContext } from "../../../context/internship.context";
import RightFilterModel from "./RightFilterModel";

const LocationModel = ({ show }) => {
  const modalRef = useRef();
  const { setFilterModel } = useContext(InternshipContext);
  const [showDuration, setshowDuration] = useState(true);
  const [showInternshipType, setshowInternshipType] = useState(false);
  const [showStipendRange, setshowStipendRange] = useState(false);

  const handleShowDuration = () => {
    setshowDuration(true);
    setshowInternshipType(false);
    setshowStipendRange(false);
  };
  const handleShowInternshipType = () => {
    setshowDuration(false);
    setshowInternshipType(true);
    setshowStipendRange(false);
  };
  const handleShowStipendRange = () => {
    setshowDuration(false);
    setshowInternshipType(false);
    setshowStipendRange(true);
  };

  return (
    <Wrapper ref={modalRef} show={show}>
      <Container>
        <CloseBtn
          onClick={() => setFilterModel()}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </CloseBtn>
        <ModalTitle>
          <Img src="/top-bottom-pink.svg" alt="right-arrow" />
          <TitleText>Filter</TitleText>
        </ModalTitle>
        <Parent>
          <Left>
            <LeftDiv1 onClick={() => handleShowDuration()}>
              <span>Duration</span>
            </LeftDiv1>
            <LeftDiv1 onClick={() => handleShowInternshipType()}>
              <span>Internship Type </span>
            </LeftDiv1>
            <LeftDiv1 onClick={() => handleShowStipendRange()}>
              <span>Stipend Range</span>
            </LeftDiv1>
          </Left>
          <Right>
            {showDuration ? (
              <RightFilterModel
                options={[
                  "1 month",
                  "2 months",
                  "3-4 months",
                  "4-5 months",
                  "6 months",
                  "6 above",
                ]}
              />
            ) : (
              ""
            )}
            {showInternshipType ? (
              <RightFilterModel
                options={["Full time", "Part time", "Temporary", "Remote"]}
              />
            ) : (
              ""
            )}
            {showStipendRange ? (
              <RightFilterModel
                options={["2k - 4k", "4k - 6k", "6k - 8k", "8k - 10k", "10k +"]}
              />
            ) : (
              ""
            )}
          </Right>
        </Parent>
        <ButtonContainer>
          <Button>Apply</Button>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};

export default LocationModel;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  border: 1px solid #f26a7e;
  border-radius: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 15px;
  background-color: #fff;
  color: #404366;
  padding: 12px 29px;
  &:hover {
    color: #fff;
    background-color: #f26a7e;
  }
`;

const Parent = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const LeftDiv1 = styled.div`
  background: #ffffff;
  border: 1px solid #c9cbe2;
  box-sizing: border-box;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  margin-bottom: 10px;
  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #404366;
    padding: 12px 10px;
  }
`;

const ModalTitle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  margin-bottom: 20px;
`;

const Img = styled.img`
  margin-right: 10px;
`;

const TitleText = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #f26a7e;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform:translateY(-3rem);
  }

  to {
    opacity: 1;
    transform:translateY(0rem);

  }
`;

const fadeInWrapper = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 99;
  animation: ${fadeInWrapper} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  z-index: 100000;
`;

const CloseBtn = styled.svg`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  color: #c9cbe2;
`;

const Container = styled.div`
  background-color: #fff;
  position: relative;
  margin-inline: auto;
  margin: 2.5rem;
  height: fit-content;
  box-shadow: -4.14084px 80.0563px 110.423px rgba(129, 129, 129, 0.24);
  border-radius: 13.8028px;
  width: 80vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  animation: ${fadeIn} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  align-items: center;
  text-align: center;
  padding: 2.5em 3rem;
  .celebrate {
    margin-bottom: 2rem;
  }
  @media (max-width: 502px) {
    width: 89vw;
    padding: 1.9em 1.5em;
  }
`;
