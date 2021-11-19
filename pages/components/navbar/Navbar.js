import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import jwt_decode from "jwt-decode";
import Link from "next/link";

const Navbar = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      const payload = jwt_decode(access_token);
      if (Date.now() >= payload.exp * 1000) {
        localStorage.removeItem("access_token");
        setUser(null);
      } else {
        setUser(payload);
      }
    }
  }, []);
  return (
    <Wrapper>
      <Left>
        <Link href="/">
          <Image
            height={61}
            objectFit="contain"
            layout="fixed"
            width={177}
            src="/intershipdetail/hiringbird-logo.png"
            alt=""
          />
        </Link>
      </Left>
      <HamBurger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=""
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </HamBurger>
      {user ? (
        <Right>
          <SLink href="#">About Us</SLink>
          <SLink href="#">Contact Us</SLink>
          {/* <Link href="/internship/home"> */}
          <SBtn>Find Interships</SBtn>
          {/* </Link> */}
          <Icons>
            <svg
              className="icon"
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.8217 16.8333C24.8217 17.5111 24.5525 18.1611 24.0732 18.6404C23.594 19.1196 22.9439 19.3889 22.2662 19.3889H6.93283L1.82172 24.5V4.05556C1.82172 3.37778 2.09096 2.72776 2.57022 2.2485C3.04948 1.76925 3.6995 1.5 4.37727 1.5H22.2662C22.9439 1.5 23.594 1.76925 24.0732 2.2485C24.5525 2.72776 24.8217 3.37778 24.8217 4.05556V16.8333Z"
                stroke="#404366"
                strokeWidth="2.44444"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="24"
              className="icon"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.8647 18.9858C22.3745 17.4978 22.124 15.9413 22.1226 14.3746V10.5035C22.1583 8.05056 21.2829 5.6716 19.6658 3.82684C18.0543 1.97916 15.8177 0.791147 13.3845 0.490461C12.0398 0.350961 10.672 0.490461 9.37384 0.930273C8.07572 1.34684 6.89384 2.0424 5.89797 2.97046C4.89712 3.87459 4.09941 4.98069 3.55747 6.21577C3.01283 7.45038 2.72856 8.78401 2.7224 10.1334V14.3959C2.71956 15.9561 2.46909 17.5061 1.98034 18.9878L0.821716 22.4152L1.74978 23.6901H8.54072C8.54072 24.7092 8.95728 25.7051 9.67609 26.4258C10.393 27.1427 11.3908 27.5612 12.4118 27.5612C13.431 27.5612 14.4268 27.1446 15.1457 26.4258C15.8645 25.707 16.283 24.7092 16.283 23.6901H23.0739L24 22.4152L22.8647 18.9858V18.9858ZM13.7778 25.0831C13.5995 25.265 13.3871 25.4098 13.1526 25.5092C12.9182 25.6086 12.6665 25.6607 12.4118 25.6625C12.1568 25.6607 11.9045 25.6084 11.6698 25.5087C11.435 25.4089 11.2223 25.2636 11.044 25.0812C10.8618 24.9031 10.7166 24.6907 10.6169 24.4563C10.5171 24.2219 10.4647 23.97 10.4627 23.7153H14.3358C14.3439 23.9695 14.2985 24.2226 14.2028 24.4582C14.107 24.6938 13.9629 24.9067 13.7797 25.0831H13.7778ZM3.09247 21.77L3.81128 19.6116C4.37182 17.9302 4.66154 16.1703 4.66959 14.3978V10.1334C4.66959 9.04259 4.90209 7.97696 5.3419 7.0024C5.78172 6.00652 6.40753 5.12496 7.21934 4.40615C8.03115 3.66602 8.98247 3.10802 10.0016 2.78446C11.044 2.43571 12.1328 2.31946 13.1985 2.43571C15.1515 2.69252 16.9421 3.65782 18.2302 5.14821C19.5186 6.64046 20.2112 8.55555 20.1754 10.5267V14.4211C20.1754 16.1823 20.4544 17.9435 21.0337 19.6349L21.7525 21.7913H3.0944V21.7681L3.09247 21.77Z"
                fill="#404366"
              />
            </svg>
            <Avatar
              onClick={() => {
                localStorage.removeItem("access_token");
                setUser(null);
              }}
              className="icon"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 13C10.5376 13 13 10.5376 13 7.5C13 4.46243 10.5376 2 7.5 2C4.46243 2 2 4.46243 2 7.5C2 10.5376 4.46243 13 7.5 13Z"
                  stroke="#C9CBE2"
                  strokeWidth="2.17391"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="26"
                height="12"
                viewBox="0 0 26 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 10V7.33333C24 5.91885 23.4205 4.56229 22.3891 3.5621C21.3576 2.5619 19.9587 2 18.5 2H7.5C6.04131 2 4.64236 2.5619 3.61091 3.5621C2.57946 4.56229 2 5.91885 2 7.33333V10"
                  stroke="#C9CBE2"
                  strokeWidth="2.17391"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Avatar>
          </Icons>
        </Right>
      ) : (
        <Menus>
          <a href="#">Post an Internship</a>
          <Link href="/internship/home">Find Internships</Link>
          <Link href="/signin">
            <button className="secondary_btn">Sign In</button>
          </Link>
          <Link href="/signup">
            <button className="primary_btn">Sign Up</button>
          </Link>
        </Menus>
      )}
    </Wrapper>
  );
};

export default Navbar;

const Menus = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  @media (max-width: 720px) {
    gap: 1rem;
  }
  @media (max-width: 666px) {
    display: none;
  }
  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #404366;
    text-decoration: none;
    @media (max-width: 720px) {
      font-size: 14px;
    }
  }
  .secondary_btn {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #404366;
    cursor: pointer;
    background: none;
    border: none;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:active {
      transform: scale(0.95);
    }
    @media (max-width: 720px) {
      font-size: 16px;
    }
  }
  .primary_btn {
    background: #f26a7e;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    padding: 10px 26px;
    border: none;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:active {
      transform: scale(0.95);
    }
    @media (max-width: 720px) {
      font-size: 12px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: min(98%, 90rem);
  margin-inline: auto;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  .icon {
    margin-right: 1rem;
  }
  @media (max-width: 736px) {
    /* display: none; */
    a {
      margin-right: 1em;
      font-size: 14px;
    }
    button {
      margin-right: 1.2em;
      font-size: 13px;
    }
  }
  @media (max-width: 666px) {
    display: none;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
    /* margin-right: 1rem; */
  }
`;
const SLink = styled.a`
  margin-right: 2em;
  font-weight: 500;
  font-size: 16px;
  color: #404366;
  text-decoration: none;
`;
const SBtn = styled.button`
  margin-right: 1.6em;
  background-color: #f26a7e;
  padding: 10px 26px;
  color: #fff;
  border: none;
  font-weight: 600;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
`;

const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 6px;
  border: 2.5px solid #f37386;
  height: 2.5rem;
  width: 2.5rem;
  svg {
    &:last-child {
      margin-top: 1px;
    }
  }
`;

const HamBurger = styled.div`
  @media (min-width: 666px) {
    display: none;
  }
  svg {
    height: 2rem;
    cursor: pointer;
  }
`;

// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Links,
//   StyledLink,
//   Button,
//   Image,
//   ImageContainer,
//   LinkContainer,
//   Menu,
//   Avatar,
// } from "./styles/Navbar.styled";
// import { useSession, signIn, signOut, getSession } from "next-auth/react";
// import Link from "next/link";

// function Navbar() {
//   const { data: session, status } = useSession();
//   console.log({ session, status });
//   const [user, setUser] = useState(null);
//   const [click, setClick] = useState(false);
//   console.log(user);
//   useEffect(() => {
//     setUser(localStorage.getItem("access_token"));
//   }, []);

//   const handleClick = () => {
//     setClick(!click);
//   };

//   return (
//     <Container>
//       <ImageContainer>
//         <Image src="/logo.svg" />
//       </ImageContainer>
//       <LinkContainer>
//         <Menu src="/menubar.svg" onClick={handleClick}></Menu>

//         <Links onClick={handleClick} click={click}>
//           {user ? (
//             <>
//               <StyledLink>About Us</StyledLink>
//               <StyledLink>Contact Us</StyledLink>
//               <Button>Find internships</Button>
//             </>
//           ) : (
//             <>
//               <StyledLink>Post an Internship</StyledLink>
//               <StyledLink>Find Internships</StyledLink>

//               <Link href="/signin">
//                 <StyledLink>Sign In</StyledLink>
//               </Link>
//               <Link href="/signup">
//                 <Button>Sign Up</Button>
//               </Link>
//             </>
//           )}
//         </Links>
//       </LinkContainer>
//     </Container>
//   );
// }

// export default Navbar;
