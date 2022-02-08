import React from "react";
import styled from "styled-components";
import Header from "@/common/components/Header";
import Card from "./Card";

const Body = () => {
  return (
    <Wrapper>
      <Header />

      <CardHeader>
        <h4>8 results for applied Internships</h4>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <SelectALl>
            <input type="checkbox" name="" id="select" />
            <label htmlFor="select">Select All</label>
          </SelectALl>
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.2974 4.0625L14.9494 19.4231H5.06711L3.71942 4.0625L2.01172 4.21219L3.38402 19.8513C3.45624 20.5722 4.08169 21.1373 4.80827 21.1373H15.2083C15.9346 21.1373 16.5603 20.5724 16.6337 19.841L18.0051 4.21219L16.2974 4.0625Z"
              fill="#C9CBE2"
            />
            <path
              d="M13.144 0H6.85827C6.07054 0 5.42969 0.640851 5.42969 1.42859V4.14288H7.14395V1.71426H12.8582V4.14284H14.5725V1.42854C14.5726 0.640851 13.9317 0 13.144 0Z"
              fill="#C9CBE2"
            />
            <path
              d="M19.1428 3.28125H0.857152C0.383709 3.28125 0 3.66496 0 4.1384C0 4.61184 0.383709 4.99555 0.857152 4.99555H19.1428C19.6163 4.99555 20 4.61184 20 4.1384C20 3.66496 19.6162 3.28125 19.1428 3.28125Z"
              fill="#C9CBE2"
            />
          </svg>
        </div>
      </CardHeader>

      <Card />
      <Card />
      <Card />
    </Wrapper>
  );
};

export default Body;

const Wrapper = styled.div``;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  margin-bottom: 1rem;
  h4 {
    font-weight: 500;
    font-size: 18px;
    color: #a9accb;
  }
`;
const SelectALl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;
