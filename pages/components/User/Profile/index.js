import React from "react";
import styled from "styled-components";
import Widget from "../../common/user/components/Widget";
import Navbar from "../../navbar/Navbar";
import Body from "./Body";

const Profile = () => {
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

export default Profile;

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
