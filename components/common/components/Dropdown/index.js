import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const dropIn = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 16,
    opacity: 1,
  },
  exit: {
    y: 20,
    opacity: 0,
  },
};

function Dropdown(props) {
  return (
    <Wrapper
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      ref={props.Ref}
      style={{ top: props.top }}
    >
      {props.children}
    </Wrapper>
  );
}

export default Dropdown;

const Wrapper = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 2.5rem;

  background: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  z-index: 99;
`;
