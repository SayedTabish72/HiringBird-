import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const Header = () => {
  const router = useRouter();
  return (
    <Head>
      <ul>
        <NavLink active={router.pathname === "/user/profile"}>
          <Link href="/user/profile">Profile</Link>
        </NavLink>
        <NavLink active={router.pathname === "/user/appliedInternships"}>
          <Link href="/user/appliedInternships">Applied Internships</Link>
        </NavLink>{" "}
        <NavLink active={router.pathname === "/user/savedInternships"}>
          <Link href="/user/savedInternships">Saved Internships</Link>
        </NavLink>{" "}
        <NavLink active={router.pathname === "/user/resume"}>
          <Link href="/user/resume">Resume</Link>
        </NavLink>
      </ul>
    </Head>
  );
};

export default Header;

const Head = styled.div`
  margin-bottom: 1rem;
  ul {
    list-style: none;

    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`;

const NavLink = styled.li`
  ${({ active }) =>
    active &&
    css`
      &:before {
        content: "";
        height: 4px;
        border-radius: 20px;
        background: #f26a7e;
        right: 0;
        left: 0;
        position: absolute;
        bottom: -8px;
      }
    `}
  position: relative;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: calc(100% - 20%);
  }
`;
