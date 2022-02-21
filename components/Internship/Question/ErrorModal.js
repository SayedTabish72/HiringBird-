import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

const ErrorModal = ({ errorModal, setErrorModal, err, id }) => {
  const modalRef = useRef();
  const router = useRouter();

  useEffect(() => {
    if (errorModal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [errorModal]);
  return <Wrapper show={errorModal}></Wrapper>;
};

export default ErrorModal;
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
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
  animation: ${fadeInWrapper} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const Container = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: min(90%, 30rem);
  gap: 0.5rem;
  animation: ${fadeInWrapper} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  img {
    object-fit: contain;
    height: 5rem;
    margin-bottom: 0.7em;
  }
  h1 {
    font-weight: 500;
  }
  p {
    color: grey;
  }
  .line {
    height: 2px;
    background: #e2e2e2;
    margin: 0.5rem 0;
    width: 100%;
  }
  button {
    background: #f26a7e;
    border: none;
    color: #fff;
    padding: 1em 1.5em;
    border-radius: 0.5rem;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    letter-spacing: 0.05em;
    svg {
      float: right;
      height: 1rem;
    }
  }
`;

const Content = styled.div``;
