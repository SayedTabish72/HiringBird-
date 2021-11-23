import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";

const SignInModal = ({ showModal, setShowModal, id }) => {
  return (
    <Wrapper show={showModal}>
      <Container>
        <img src="/intershipdetail/warning.png" alt="" />
        <h1>Warning</h1>
        <p>You need to be Logged in</p>
        <div className="line" />
        <Link
          href={{
            pathname: "/signin",
            query: { id },
          }}
        >
          <button onClick={() => setShowModal(false)}>SIGN IN</button>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default SignInModal;

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
    background: #ee5354;
    border: none;
    color: #fff;
    padding: 1em 1.5em;
    border-radius: 0.5rem;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    cursor: pointer;
  }
`;
