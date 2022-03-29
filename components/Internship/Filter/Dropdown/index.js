import Filter from "@/ui/Dropdown/Filter";
import { AnimatePresence } from "framer-motion";
import useOutsideClick from "hooks/useOutsideClick";
import React, { useRef, useState } from "react";
import styled from "styled-components";

function Dropdown({ title, component }) {
  const filterRef = useRef(null);
  const [filterDropdown, setFilterDropdown] = useState(false);

  useOutsideClick(filterRef, () => {
    if (filterDropdown) setFilterDropdown(false);
  });

  return (
    <Wrapper>
      <Item
        active={filterDropdown}
        onClick={() => setFilterDropdown(!filterDropdown)}
      >
        <h4>{title.toUpperCase()}</h4>
        <svg
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 1.1001L9 8.07568L1 1.1001"
            stroke="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Item>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {filterDropdown && <Filter Ref={filterRef} component={component} />}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Dropdown;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;

  h4 {
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
    color: #a9accb;
    ${({ active }) =>
      active &&
      `
      color:#404366;
    `}
    @media (max-width:1024px) {
      font-size: 14px;
    }
  }

  svg {
    transition: transform 0.1s ease-in-out;
    path {
      stroke: #a9accb;
    }
    ${({ active }) =>
      active &&
      `
      path {
        stroke:#404366;

    }
      transform: rotate(180deg);
    `}
  }
`;
