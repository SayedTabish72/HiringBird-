import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "redux/actions/auth";
import styled from "styled-components";

function User() {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Wrapper>
      <li>
        <Link href="/user/profile">My Profile</Link>
      </li>

      <li>
        <Link href="/user/appliedInternships">Applied Internships</Link>
      </li>

      <li>
        <Link href="/user/savedInternships">Saved Internships</Link>
      </li>

      <li>
        <a href="#" onClick={() => dispatch(logout())}>
          Log out
        </a>
      </li>
    </Wrapper>
  );
}

export default User;

const Wrapper = styled(motion.ul)`
  list-style: none;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    white-space: nowrap;
    font-weight: 500;
    font-size: 16px;
    color: #a9accb;
  }
`;
