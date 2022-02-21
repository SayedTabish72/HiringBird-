import InternshipType from "components/Internship/Filter/Dropdown/InternshipType";
import StipendRange from "components/Internship/Filter/Dropdown/StipendRange";
import React, { useState } from "react";
import styled from "styled-components";
import Duration from "../../../../components/Internship/Filter/Dropdown/Duration";

function FilterModal({ setShow }) {
  const tabs = ["Duration", "Internship Type", "Stipend Range"];
  const [active, setActive] = useState(tabs[0]);

  return (
    <Wrapper>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          alignSelf: "end",
          cursor: "pointer",
          marginBottom: "1.2em",
        }}
        onClick={() => setShow(false)}
      >
        <path
          d="M15 1L1 14.3258"
          stroke="#C9CBE2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 1L15 14.3258"
          stroke="#C9CBE2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <Head>
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.77778 12.2222C7.77778 12.8359 8.27524 13.3333 8.88889 13.3333H11.1111C11.7248 13.3333 12.2222 12.8359 12.2222 12.2222C12.2222 11.6086 11.7248 11.1111 11.1111 11.1111H8.88889C8.27524 11.1111 7.77778 11.6086 7.77778 12.2222ZM1.11111 0C0.497461 0 0 0.497461 0 1.11111C0 1.72476 0.497461 2.22222 1.11111 2.22222H18.8889C19.5025 2.22222 20 1.72476 20 1.11111C20 0.497461 19.5025 0 18.8889 0H1.11111ZM3.33333 6.66667C3.33333 7.28032 3.83079 7.77778 4.44444 7.77778H15.5556C16.1692 7.77778 16.6667 7.28032 16.6667 6.66667C16.6667 6.05302 16.1692 5.55556 15.5556 5.55556H4.44444C3.83079 5.55556 3.33333 6.05302 3.33333 6.66667Z"
            fill="#F26A7E"
          />
        </svg>
        <h3>FILTER</h3>
        <a href="#">Reset All</a>
      </Head>

      <Flex>
        <Left>
          {tabs.map((tab, index) => (
            <TabItem
              active={active === tab}
              onClick={() => setActive(tab)}
              key={index}
            >
              <h4>{tab}</h4>
            </TabItem>
          ))}
        </Left>
        <Right>
          {active === "Duration" && <Duration />}
          {active === "Internship Type" && <InternshipType />}
          {active === "Stipend Range" && <StipendRange />}
        </Right>
      </Flex>
    </Wrapper>
  );
}

export default FilterModal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  h3 {
    font-weight: 500;
    font-size: 18px;
    text-transform: uppercase;
    color: #f26a7e;
    flex: 1;
    margin-left: 0.8rem;
  }

  a {
    text-decoration: underline;
    font-weight: 500;
    font-size: 10px;
    color: #a9accb;
  }
`;

const Flex = styled.div`
  display: flex;
  gap: 1rem;
  & > * {
    flex-basis: 50%;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TabItem = styled.div`
  border: 1px solid #c9cbe2;
  border-radius: 8px 0 0 8px;
  padding: 0.7rem 1rem;
  cursor: pointer;

  background: ${(props) => (props.active ? "#fff" : " #F8F8F8")};

  h4 {
    white-space: nowrap;
    font-weight: 500;
    font-size: 12px;
    text-transform: capitalize;
    color: ${(props) => (props.active ? "#404366" : "#a9accb")};
  }
`;

const Right = styled.div``;
