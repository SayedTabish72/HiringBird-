import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import Card from "./Card";
import Header from "../../../common/user/components/Header";

const Body = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Wrapper>
      <Header />

      <Navigation>
        <ul>
          <NavItem active={router.pathname === "/user/profile"}>
            <a href="#education">
              <svg
                viewBox="0 0 35 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2.29395H11.3495C13.0026 2.29395 14.588 2.95241 15.7569 4.12449C16.9258 5.29656 17.5825 6.88624 17.5825 8.54381V30.4183C17.5825 29.1752 17.09 27.9829 16.2133 27.1038C15.3366 26.2248 14.1476 25.7309 12.9078 25.7309H2V2.29395Z"
                  stroke=""
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33.1655 2.29395H23.816C22.1629 2.29395 20.5775 2.95241 19.4086 4.12449C18.2397 5.29656 17.583 6.88624 17.583 8.54381V30.4183C17.583 29.1752 18.0755 27.9829 18.9522 27.1038C19.8289 26.2248 21.0179 25.7309 22.2578 25.7309H33.1655V2.29395Z"
                  stroke=""
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </NavItem>
          <NavItem active={router.pathname === "/user/profile"}>
            <a href="#experience">
              <svg
                viewBox="0 0 37 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.6936 9.06885H5.40519C3.59035 9.06885 2.11914 10.544 2.11914 12.3638V28.8385C2.11914 30.6582 3.59035 32.1334 5.40519 32.1334H31.6936C33.5084 32.1334 34.9796 30.6582 34.9796 28.8385V12.3638C34.9796 10.544 33.5084 9.06885 31.6936 9.06885Z"
                  stroke="#404366"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.1207 32.1329V5.77345C25.1207 4.89958 24.7745 4.0615 24.1583 3.44358C23.542 2.82566 22.7062 2.47852 21.8347 2.47852H15.2626C14.3911 2.47852 13.5553 2.82566 12.939 3.44358C12.3228 4.0615 11.9766 4.89958 11.9766 5.77345V32.1329"
                  stroke="#404366"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </NavItem>
          <NavItem active={router.pathname === "/user/profile#achievement"}>
            <a href="#skill">
              <svg
                viewBox="0 0 23 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5577 21.7788C16.8729 21.7788 21.1818 17.4582 21.1818 12.1286C21.1818 6.79902 16.8729 2.47852 11.5577 2.47852C6.24244 2.47852 1.93359 6.79902 1.93359 12.1286C1.93359 17.4582 6.24244 21.7788 11.5577 21.7788Z"
                  stroke="#404366"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.34719 20.2477L4.68359 32.8066L11.5579 28.6708L18.4323 32.8066L16.7687 20.2339"
                  stroke="#404366"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </NavItem>

          <NavItem active={router.pathname === "/user/profile#achievement"}>
            <a href="#skill">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9637 2.47852H2.13623V14.338H13.9637V2.47852Z"
                  stroke="#404366"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M32.5496 2.47852H20.7222V14.338H32.5496V2.47852Z"
                  stroke="#404366"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M32.5496 21.1133H20.7222V32.9728H32.5496V21.1133Z"
                  stroke="#404366"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.9642 21.1133H2.13672V32.9728H13.9642V21.1133Z"
                  stroke="#404366"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </NavItem>

          <NavItem active={router.pathname === "/user/profile#achievement"}>
            <a href="#skill">
              <svg
                width="33"
                height="31"
                viewBox="0 0 33 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.4178 26.2898C31.4178 27.0853 31.1027 27.8483 30.5417 28.4108C29.9807 28.9733 29.2198 29.2893 28.4264 29.2893H4.4953C3.70193 29.2893 2.94106 28.9733 2.38006 28.4108C1.81907 27.8483 1.50391 27.0853 1.50391 26.2898V5.29343C1.50391 4.49792 1.81907 3.73499 2.38006 3.17247C2.94106 2.60996 3.70193 2.29395 4.4953 2.29395H11.9738L14.9652 6.79317H28.4264C29.2198 6.79317 29.9807 7.10919 30.5417 7.6717C31.1027 8.23421 31.4178 8.99714 31.4178 9.79265V26.2898Z"
                  stroke="#404366"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </NavItem>
        </ul>
      </Navigation>

      <Card svg="education" title="Education" />
      <Card svg="experience" title="Experience" />
      <Card svg="achievement" title="Achievements" />
      <Card svg="skill" title="Skills" />
    </Wrapper>
  );
};

export default Body;

const Wrapper = styled.div``;

const Navigation = styled.div`
  padding: 0.6rem 0;
  margin-bottom: 2rem;
  ul {
    list-style: none;
    display: flex;
    /* align-items: center; */
    gap: 1.5rem;
    a {
      display: flex;
    }
  }
`;

const NavItem = styled.li`
  svg {
    height: 1.5rem;
    cursor: pointer;
    stroke: ${({ active }) => (active ? "#f26a7e" : " #404366")};
  }
`;
