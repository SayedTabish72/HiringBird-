import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const dropIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    y: 30,
    opacity: 1,
  },
  exit: {
    y: 20,
    opacity: 0,
  },
};

function Location({ Ref, component }) {
  return (
    <Wrapper
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      ref={Ref}
    >
      {component}
    </Wrapper>
  );
}

export default Location;

const Wrapper = styled(motion.div)`
  padding: 1rem;
  position: absolute;
  z-index: 99;
  background: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  min-width: 11rem;
  top: 0;
  right: 0;
`;
