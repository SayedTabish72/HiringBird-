import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Notification() {
  return (
    <Wrapper>
      <li>
        <Link href="#">Adobe Just Posted a Job</Link>
        <p>45m</p>
      </li>

      <li>
        <Link href="#">12 Jobs Posted for UX designer</Link>
        <p>45m</p>
      </li>

      <li>
        <Link href="#">LonelyWhale is looking for Graphic Designers</Link>
        <p>45m</p>
      </li>

      <li>
        <Link href="#">One24 is looking for UI Designers</Link>
        <p>45m</p>
      </li>
    </Wrapper>
  );
}

export default Notification;

const Wrapper = styled(motion.ul)`
  list-style: none;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  min-width: 16rem;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 12px;
      color: #9092a9;
    }
  }

  a {
    font-weight: 500;
    font-size: 16px;
    color: #a9accb;
  }
`;
