import Footer from "@/common/components/Footer";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Navbar from "../../components/common/components/Navbar";
import Search from "../common/components/Search";
import Filter from "./Filter";
import Main from "./Home";

const Internship = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <BackBtn onClick={() => router.back()}>
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 15L1 8L8 1"
            stroke="#F26A7E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back
      </BackBtn>
      <Search />
      <Filter />

      <Main />
      <Footer />
    </>
  );
};

export default Internship;

const BackBtn = styled.button`
  font-size: 17px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: 0.103059px;
  color: #c9cbe2;
  background: transparent;
  border: none;
  width: min(90%, 90rem);
  margin-inline: auto;
  margin-top: 1rem;

  @media (min-width: 962px) {
    display: none;
  }
`;
