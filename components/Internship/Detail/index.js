import React from "react";
import Main from "./Main";
import Search from "@/common/components/Search";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import styled from "styled-components";
import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <Search />
      <BackBtn>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=""
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <p onClick={() => router.back({ scroll: false })}>Back</p>
      </BackBtn>
      <Main width={true} />
      <Footer />
    </div>
  );
};

export default Detail;

const BackBtn = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.6em;
  width: min(90%, 90rem);
  margin-inline: auto;
  &:active {
    opacity: 0.5;
  }
  svg {
    color: #98a8b8;
    cursor: pointer;
    height: 1.4rem;
  }
  p {
    color: #98a8b8;
    font-size: 19px;
    cursor: pointer;
    text-decoration: none;
  }
`;
