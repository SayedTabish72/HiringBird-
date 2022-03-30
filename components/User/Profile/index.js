import React from "react";
import styled from "styled-components";
import Widget from "@/common/components/Widget";
import Navbar from "../../../layout/Navbar";
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
  display: grid;
  grid-template-columns: 30rem 1fr;
  gap:2.5rem;
  width:min(90%, 90rem);
  margin:0 auto;
  padding:1rem 0;
  @media (max-width: 1423px) {
    grid-template-columns: 25rem 1fr;
  }
  @media (max-width: 950px) {
    grid-template-columns: 1fr;
`;
