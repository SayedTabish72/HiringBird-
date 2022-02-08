import { Button } from "@/common/styles/FilledBtn.styled";
import { AnimatePresence, motion } from "framer-motion";
import jwt_decode from "jwt-decode";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import useOutsideClick from "../../../../hooks/useOutsideClick";
import { logout } from "../../../../redux/actions/auth";
import Auth from "../Dropdown/Auth";
import Dropdown from "../Dropdown/Auth";
import Home from "../Dropdown/Home";
import {
  Avatar,
  DropdownSelect,
  HamBurger,
  Icons,
  Img,
  Left,
  Menus,
  Option,
  Options,
  OptionTitle,
  Right,
  SBtn,
  SigninOptions,
  SLink,
  Wrapper,
} from "./styles/Navbar.styled";

const dropIn = {
  hidden: {
    y: "20px",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
  },
  exit: {
    y: "20px",
    opacity: 0,
  },
};

const Navbar = () => {
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // signin
  const signinRef = useRef(null);
  const [signinDropdown, setSigninDropdown] = useState(false);

  // signup
  const signupRef = useRef(null);
  const [signupDropdown, setSignupDropdown] = useState(false);

  // redux
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.isAuthenticated);

  // hooks
  useOutsideClick(dropdownRef, () => {
    if (showDropdown) setShowDropdown(false);
  });

  useOutsideClick(signinRef, () => {
    if (signinDropdown) setSigninDropdown(false);
  });

  useOutsideClick(signupRef, () => {
    if (signupDropdown) setSignupDropdown(false);
  });

  return (
    <Wrapper>
      <Left>
        <Link href="/">
          <img src="/footer/hb-logo.svg" alt="" />
        </Link>
      </Left>
      <HamBurger show={showDropdown}>
        <div
          className="icon"
          onClick={() => {
            setShowDropdown(true);
          }}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {showDropdown && <Home Ref={dropdownRef} />}
        </AnimatePresence>
      </HamBurger>

      {user ? (
        <></>
      ) : (
        <Right>
          <Link href="#">Post an Internship</Link>
          <Link href="/internship">Find Internships</Link>
          <SigninContainer>
            <button onClick={() => setSigninDropdown(!signinDropdown)}>
              Sign In
            </button>
            <AnimatePresence
              initial={false}
              exitBeforeEnter={true}
              onExitComplete={() => null}
            >
              {signinDropdown && <Auth Ref={signinRef} />}
            </AnimatePresence>
          </SigninContainer>
          <SignupContainer>
            <Button
              onClick={() => setSignupDropdown(!signupDropdown)}
              padding=".5rem"
            >
              Sign Up
            </Button>
            <AnimatePresence
              initial={false}
              exitBeforeEnter={true}
              onExitComplete={() => null}
            >
              {signupDropdown && <Auth Ref={signupRef} />}
            </AnimatePresence>
          </SignupContainer>
        </Right>
      )}
    </Wrapper>
  );
};

export default Navbar;

const SigninContainer = styled.div`
  position: relative;
  button {
    border: none;
    background: none;
    font-size: 1rem;
    font-weight: 400;
    transition: transform 0.1s ease-in-out;
    cursor: pointer;
    &:active {
      transform: scale(0.9);
    }
  }
`;

const SignupContainer = styled.div`
  position: relative;
`;
