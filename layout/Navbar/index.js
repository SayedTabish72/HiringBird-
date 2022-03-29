import { Button } from "@/common/styles/FilledBtn.styled";
import Dropdown from "@/ui/Dropdown";
import Auth from "@/ui/Dropdown/Auth";
import Home from "@/ui/Dropdown/Home";
import Notification from "@/ui/Dropdown/Notification";
import User from "@/ui/Dropdown/User";
import { AnimatePresence } from "framer-motion";
import useOutsideClick from "hooks/useOutsideClick";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import * as S from "./Navbar.styled";

const Navbar = () => {
  // refs
  const notificationRef = useRef(null);
  const avatarRef = useRef(null);
  const signinRef = useRef(null);
  const signupRef = useRef(null);
  const hamburgerRef = useRef(null);

  // states
  const [dropdowns, setDropdowns] = useState({
    notification: false,
    avatar: false,
    signin: false,
    signup: false,
    hamburger: false,
  });

  // redux
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // hooks
  useOutsideClick(notificationRef, () => {
    if (dropdowns.notification)
      setDropdowns({ ...dropdowns, notification: false });
  });

  useOutsideClick(avatarRef, () => {
    if (dropdowns.avatar) setDropdowns({ ...dropdowns, avatar: false });
  });

  useOutsideClick(signinRef, () => {
    if (dropdowns.signin) setDropdowns({ ...dropdowns, signin: false });
  });

  useOutsideClick(signupRef, () => {
    if (dropdowns.signup) setDropdowns({ ...dropdowns, signup: false });
  });

  useOutsideClick(hamburgerRef, () => {
    if (dropdowns.hamburger) setDropdowns({ ...dropdowns, hamburger: false });
  });

  return (
    <S.Wrapper>
      <S.Left>
        <Link href="/">
          <img src="/hb-logo.svg" alt="" />
        </Link>
      </S.Left>
      <S.HamBurger show={dropdowns.hamburger}>
        <div
          className="icon"
          onClick={() => {
            setDropdowns({ ...dropdowns, hamburger: !dropdowns.hamburger });
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
          {dropdowns.hamburger && <Home Ref={hamburgerRef} />}
        </AnimatePresence>
      </S.HamBurger>
      {isAuthenticated ? (
        <S.Right>
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact us</Link>
          <Link href="/internship">
            <Button padding="0.5em 1em">Find Internships</Button>
          </Link>

          <Icons>
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.8218 16.8333C24.8218 17.5111 24.5525 18.1611 24.0733 18.6404C23.594 19.1196 22.944 19.3889 22.2662 19.3889H6.93289L1.82178 24.5V4.05556C1.82178 3.37778 2.09102 2.72776 2.57028 2.2485C3.04954 1.76925 3.69956 1.5 4.37733 1.5H22.2662C22.944 1.5 23.594 1.76925 24.0733 2.2485C24.5525 2.72776 24.8218 3.37778 24.8218 4.05556V16.8333Z"
                stroke="#404366"
                strokeWidth="2.44444"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <NotificationContainer>
              <svg
                width="24"
                height="28"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() =>
                  setDropdowns({
                    ...dropdowns,
                    notification: !dropdowns.notification,
                  })
                }
              >
                <path
                  d="M22.8647 18.9861C22.3746 17.498 22.1241 15.9415 22.1227 14.3748V10.5037C22.1583 8.0508 21.2829 5.67185 19.6659 3.82708C18.0544 1.9794 15.8177 0.791391 13.3845 0.490705C12.0399 0.351205 10.672 0.490705 9.3739 0.930517C8.07578 1.34708 6.8939 2.04264 5.89803 2.97071C4.89719 3.87483 4.09947 4.98094 3.55753 6.21602C3.01289 7.45062 2.72862 8.78426 2.72246 10.1336V14.3961C2.71962 15.9564 2.46915 17.5063 1.9804 18.988L0.821777 22.4155L1.74984 23.6903H8.54078C8.54078 24.7095 8.95734 25.7053 9.67615 26.4261C10.393 27.143 11.3908 27.5615 12.4119 27.5615C13.431 27.5615 14.4269 27.1449 15.1457 26.4261C15.8645 25.7073 16.283 24.7095 16.283 23.6903H23.074L24.0001 22.4155L22.8647 18.9861ZM13.7778 25.0834C13.5996 25.2652 13.3871 25.41 13.1527 25.5094C12.9183 25.6088 12.6665 25.6609 12.4119 25.6627C12.1568 25.6609 11.9046 25.6087 11.6698 25.5089C11.435 25.4091 11.2224 25.2639 11.044 25.0815C10.8619 24.9034 10.7167 24.691 10.617 24.4566C10.5172 24.2221 10.4648 23.9703 10.4628 23.7155H14.3358C14.3439 23.9697 14.2986 24.2228 14.2028 24.4584C14.107 24.694 13.9629 24.9069 13.7798 25.0834H13.7778ZM3.09253 21.7703L3.81134 19.6119C4.37188 17.9304 4.6616 16.1705 4.66965 14.3981V10.1336C4.66965 9.04283 4.90215 7.97721 5.34196 7.00264C5.78178 6.00677 6.40759 5.12521 7.2194 4.40639C8.03121 3.66627 8.98253 3.10827 10.0017 2.78471C11.044 2.43596 12.1329 2.3197 13.1985 2.43595C15.1516 2.69276 16.9422 3.65807 18.2302 5.14846C19.5186 6.6407 20.2112 8.55579 20.1755 10.527V14.4213C20.1755 16.1825 20.4545 17.9437 21.0338 19.6351L21.7526 21.7916H3.09446V21.7683L3.09253 21.7703Z"
                  fill="#404366"
                />
              </svg>

              <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                {dropdowns.notification && (
                  <Dropdown Ref={notificationRef} top="2rem">
                    <Notification />
                  </Dropdown>
                )}
              </AnimatePresence>
            </NotificationContainer>
            <AvatarContainer>
              <div
                onClick={() => setDropdowns({ ...dropdowns, avatar: true })}
                className="avatar"
              >
                <img src="/navbar/avatar.svg" alt="avatar" />
              </div>
              <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                {dropdowns.avatar && (
                  <Dropdown Ref={avatarRef}>
                    <User />
                  </Dropdown>
                )}
              </AnimatePresence>
            </AvatarContainer>
          </Icons>
        </S.Right>
      ) : (
        <S.Right>
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact us</Link>
          <Link href="#">Post an Internship</Link>
          <Link href="/internship">Find Internships</Link>
          <SigninContainer>
            <button
              onClick={() =>
                setDropdowns({ ...dropdowns, signin: !dropdowns.signin })
              }
            >
              Sign In
            </button>
            <AnimatePresence
              initial={false}
              exitBeforeEnter={true}
              onExitComplete={() => null}
            >
              {dropdowns.signin && <Auth Ref={signinRef} url="signin" />}
            </AnimatePresence>
          </SigninContainer>
          <SignupContainer>
            <Button
              padding=".5em 1em"
              onClick={() =>
                setDropdowns({ ...dropdowns, signup: !dropdowns.signup })
              }
            >
              Sign Up
            </Button>
            <AnimatePresence
              initial={false}
              exitBeforeEnter={true}
              onExitComplete={() => null}
            >
              {dropdowns.signup && <Auth Ref={signupRef} url="signup" />}
            </AnimatePresence>
          </SignupContainer>
        </S.Right>
      )}
    </S.Wrapper>
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

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 0.5rem;

  svg {
    cursor: pointer;
  }
`;

const AvatarContainer = styled.div`
  position: relative;

  .avatar {
    border: solid 3px #F37386;
    border-left-color: #C9CBE2;
    padding: 2px;
    display: inline-block;
    border-radius: 50%;
    position: relative;
    cursor:pointer;

    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);

    img{
    display:block;
     height:32px;
      width:32px;
      padding:.2rem;
    border-radius: 50%;
    
    transform:rotate(-45deg);
    -ms-transform:rotate(-45deg);
    -webkit-transform:rotate(-45deg);
  }

  &:before,&:after{
    content:'';
    position:absolute;
    background:#fff;
    z-index:-1;
    
    transform:rotate(-45deg);
    -ms-transform:rotate(-45deg);
    -webkit-transform:rotate(-45deg);
  }

  &:before{
    height:4px;
    top:50%;
    left:2px; right:-5px;
    margin-top:-2px;
  }

  &:after{
    width:4px;
    left:50%;
    top:2px; bottom:-5px;
    margin-left:-2px;
  }
`;

const NotificationContainer = styled.div`
  position: relative;
`;
