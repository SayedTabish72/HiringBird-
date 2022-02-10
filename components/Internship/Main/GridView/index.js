import React from "react";
import styled from "styled-components";
import Card from "./Card";

function GridView() {
  return (
    <>
      <Wrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Wrapper>
      <Pagination>
        <LoadMore>Load More</LoadMore>
      </Pagination>
    </>
  );
}

export default GridView;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 60px;
`;

const LoadMore = styled.span`
  cursor: pointer;
  padding-bottom: 5px;
  border-bottom: 2px solid #f26a7e;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.175px;
  text-transform: capitalize;
  color: #404366;
`;

const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 1.5rem;

  @media (max-width: 1170px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 830px) {
    padding: 1rem 0;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
