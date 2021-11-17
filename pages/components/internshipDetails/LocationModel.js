import React, { useRef, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { InternshipContext } from "../../../context/internship.context";

const LocationModel = ({ show }) => {
  const modalRef = useRef();
  const { setLocationModel } = useContext(InternshipContext);

  const cities = [
    "Delhi NCR",
    "Mumbai",
    "Navi Mumbai",
    "Hyderabad",
    "Chennai",
    "Bangalore",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Chandigarh",
    "Pune",
    "Dehradun",
  ];

  return (
    <Wrapper ref={modalRef} show={show}>
      <Container>
        <CloseBtn
          onClick={() => setLocationModel()}
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
          <Img src="/arrow-right.svg" alt="right-arrow" />
          <TitleText>Location</TitleText>
        </ModalTitle>
        <ModalSearch>
          <SearchImg src="/pink-search.svg" alt="search" />
          <Input placeholder="e.g. Pune" type="text" />
        </ModalSearch>
        <ModalCities>
          <CitiesTitle>Top Cities</CitiesTitle>
          <Cities>
            {cities.map((city, index) => {
              return <City key={index}>{city}</City>;
            })}
          </Cities>
        </ModalCities>
        <ButtonContainer>
          <Button>Apply</Button>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};

export default LocationModel;

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

const ModalSearch = styled.div`
  background: #ffffff;
  border: 1px solid #c9cbe2;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  display: flex;
  padding: 10px;
`;

const SearchImg = styled.img`
  width: 18px;
  height: 18px;
`;

const Input = styled.input`
  flex: 1;
  margin-left: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #404366;
  border: none;
  outline: none;
  &:placeholder {
    color: #c9cbe2;
  }
`;

const ModalCities = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const CitiesTitle = styled.h3`
  text-align: left;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #404366;
`;

const Cities = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  margin: 1rem 0;
  @media (max-width: 772px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 631px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 413px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const City = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  width: fit-content;
  color: #a9accb;
  @media (max-width: 428px) {
    width: 90px;
  }
  &:hover {
    color: #404366;
  }
`;

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
