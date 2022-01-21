import React from "react";
import Header from "../../../common/user/components/Header";
import Card from "./Card";
import styled from "styled-components";

const Body = () => {
  return (
    <div>
      <Header />
      <CardHeader>
        <p>10 results for Saved Internships</p>
      </CardHeader>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Body;

const CardHeader = styled.div`
  margin-top: 4rem;
  margin-bottom: 1rem;
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #a9accb;
  }
`;
