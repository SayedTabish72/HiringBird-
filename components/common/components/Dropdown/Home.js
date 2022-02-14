import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Button } from "../../styles/FilledBtn.styled";

const dropIn = {
  hidden: {
    y: 45,
    opacity: 0,
  },
  visible: {
    y: 37,
    opacity: 1,
  },
  exit: {
    y: 45,
    opacity: 0,
  },
};

function Home({ Ref }) {
  return (
    <Wrapper
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      ref={Ref}
    >
      <ul>
        <Item>
          <Link href="#">Post an Internship</Link>
        </Item>

        <Item>
          <Link href="/internship">Find Internships</Link>
        </Item>

        <Item>
          <Link href="/signin">Sign In</Link>
        </Item>

        <Item>
          <Link href="/signup">
            <Button padding=".6em 1em">Sign Up</Button>
          </Link>
        </Item>
      </ul>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled(motion.div)`
  padding: 1rem;
  position: absolute;
  z-index: 99;
  background: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  min-width: 12rem;
  /* transform: translate(-50%, 30%); */
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
  user-select: none;
  color: #a9accb;
  cursor: pointer;
  ul {
    list-style: none;
  }
  a {
    &:active {
      transform: scale(0.95);
    }
    &:hover {
      color: #f26a7e;
    }
  }
`;
