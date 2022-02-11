import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";

const dropIn = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 40,
    opacity: 0,
  },
};

function Modal({ Ref, component, setShow }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        ref={Ref}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            alignSelf: "end",
            cursor: "pointer",
          }}
          onClick={() => setShow(false)}
        >
          <path
            d="M15 1L1 14.3258"
            stroke="#C9CBE2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 1L15 14.3258"
            stroke="#C9CBE2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {component}
      </Container>
    </Wrapper>
  );
}

export default Modal;

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(74, 74, 74, 0.06);
  backdrop-filter: blur(20px);
  z-index: 99999;

  display: flex;
  align-items: center;
`;
const Container = styled(motion.div)`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background: #ffffff;
  box-shadow: 0px 30px 72px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;
