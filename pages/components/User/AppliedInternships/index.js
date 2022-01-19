import React from "react";
import Widget from "../../common/user/components/Widget";
import styled from "styled-components";
import Body from "./Body";
import Navbar from "../../navbar/Navbar";

const AppliedInternships = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Widget />
        <Body />
      </Wrapper>
    </>
  );
};

export default AppliedInternships;

const Wrapper = styled.div`
  background: #fcfcfc;
  display: grid;
  grid-template-columns: 30rem 1fr;
  @media (max-width: 1423px) {
    grid-template-columns: 25rem 1fr;
  }
  @media (max-width: 950px) {
    grid-template-columns: 1fr;
`;
