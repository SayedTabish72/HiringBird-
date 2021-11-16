import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const ErrorModal = ({ errorModal, setErrorModal, err, id }) => {
  const modalRef = useRef();
  const router = useRouter();

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setErrorModal(false);
    }
  };
  return (
    <Wrapper ref={modalRef} onClick={closeModal} show={errorModal}>
      <Container>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <Content>
          <h1>Error</h1>
          <p>{err}</p>
        </Content>

        <button
          onClick={() => {
            router.push(`/internship/questions/${id}`);
            setErrorModal(false);
          }}
        >
          Retry
        </button>
      </Container>
    </Wrapper>
  );
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
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 99;
  animation: ${fadeInWrapper} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const Container = styled.div`
  background-color: #fff;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  border-radius: 0.4rem;
  border-left: 0.7rem solid red;
  svg {
    height: 3rem;
    color: red;
  }
  button {
    background-color: #fff;
    border: none;
    font-size: 1em;
    color: red;
    padding: 0.7em 0.7em;
    font-weight: 500;
    font-family: Inter, sans-serif;
    cursor: pointer;
    border-radius: 0.5em;
    &:hover {
      background-color: #f5f5f5;
    }
    &:active {
      transform: scale(0.95);
    }
  }
`;

const Content = styled.div`
  h1 {
  }
  p {
    color: grey;
  }
`;
