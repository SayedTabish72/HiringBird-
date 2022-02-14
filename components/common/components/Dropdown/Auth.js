import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const dropIn = {
  hidden: {
    y: 20,
    x: -40,
    opacity: 0,
  },
  visible: {
    x: -40,
    y: 16,
    opacity: 1,
  },
  exit: {
    y: 20,
    opacity: 0,
  },
};

function Auth({ Ref, url }) {
  return (
    <Wrapper
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      ref={Ref}
    >
      <ul>
        <Link href={url}>
          <Item>
            <svg
              viewBox="0 0 32 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 34.2424V30.8032C30 28.979 29.2625 27.2294 27.9497 25.9395C26.637 24.6495 24.8565 23.9248 23 23.9248H9C7.14348 23.9248 5.36301 24.6495 4.05025 25.9395C2.7375 27.2294 2 28.979 2 30.8032V34.2424M22.3636 9.09333C22.3636 13.0109 19.2296 16.1867 15.3636 16.1867C11.4976 16.1867 8.36364 13.0109 8.36364 9.09333C8.36364 5.17579 11.4976 2 15.3636 2C19.2296 2 22.3636 5.17579 22.3636 9.09333Z"
                stroke=""
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Student</p>
          </Item>
        </Link>

        <Link href="/signin">
          <Item>
            <svg
              viewBox="0 0 32 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.2 8H4.8C3.2536 8 2 9.27919 2 10.8571V25.1429C2 26.7208 3.2536 28 4.8 28H27.2C28.7464 28 30 26.7208 30 25.1429V10.8571C30 9.27919 28.7464 8 27.2 8Z"
                stroke=""
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 28V4.88889C22 4.12271 21.6839 3.38791 21.1213 2.84614C20.5587 2.30436 19.7956 2 19 2H13C12.2044 2 11.4413 2.30436 10.8787 2.84614C10.3161 3.38791 10 4.12271 10 4.88889V28"
                stroke=""
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>Recruiter</p>
          </Item>
        </Link>
      </ul>
    </Wrapper>
  );
}

export default Auth;

const Wrapper = styled(motion.div)`
  padding: 1rem;
  position: absolute;
  z-index: 99;
  background: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  /* transform: translate(-50%, 30%); */
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.6rem 0;
  user-select: none;
  cursor: pointer;
  ul {
    list-style: none;
  }
  svg {
    height: 1.5rem;
    width: 1.5rem;
    stroke: #404366;
  }
  &:hover {
    svg {
      stroke: #f26a7e;
    }
    color: #f26a7e;
  }
`;
