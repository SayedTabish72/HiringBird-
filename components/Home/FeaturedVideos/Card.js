import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Card() {
  return (
    <Wrapper>
      <CardHead>
        <Img src="/hblogo.svg" />
      </CardHead>
      <CardComp>
        <Heading>HIRING NOW</Heading>
        <SubHeading>UI/UX Design Internships</SubHeading>
        <Id>02/01/2022-14/03/2022</Id>
      </CardComp>
    </Wrapper>
  );
}
export default Card;

const Img = styled.img``;

const Wrapper = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
  padding-top: 1rem;
  border: 2px solid #e4e5f0;
  border-radius: 10px;
  background: #ffffff;
  user-select: none;
`;

const CardHead = styled.div`
  display: flex;
  justify-content: end;
`;

const Heading = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #404366;
  margin-bottom: 0;
  margin-top: 25px;
`;

const CardComp = styled.div`
  margin-bottom: 10px;
`;

const SubHeading = styled.h3`
  display: flex;
  align-items: center;
  color: #404366;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  margin-bottom: 5px;
  margin-top: 10px;
`;

const Id = styled.span`
  color: rgba(236, 31, 40, 1);

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
`;
