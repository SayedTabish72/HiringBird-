import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Main from "../../Detail/Main";
import Card from "./Card";

function ListView() {
  const numbers = [1, 2, 3, 4, 5];
  const [active, setActive] = useState(numbers[0]);

  return (
    <Wrapper>
      <Left>
        {numbers.map((number, i) => (
          <div key={i} onClick={() => setActive(number)}>
            <Card id={number} active={active} />
          </div>
        ))}
      </Left>
      <Right>
        <Main active={active} />
      </Right>
    </Wrapper>
  );
}

export default ListView;

const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: 28rem 1fr;
  height: 97vh;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: scroll;
  padding: 0 0.5rem;
  /* hide scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Right = styled.div`
  @media (max-width: 1122px) {
    display: none;
  }
`;
