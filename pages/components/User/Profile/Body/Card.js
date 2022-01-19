import React from "react";
import styled from "styled-components";

const Card = ({ svg, title }) => {
  return (
    <Wrapper id="skill">
      <Head>
        <img src={`/user/profile/${svg}.svg`} alt="" /> <h3>{title}</h3>
      </Head>
      <Wrap>
        <img src="" alt="" />
        <Content>
          {/* needs to be changed */}
          <p>Graduation</p>
          <h4>Pearl Academy</h4>
          <p>Lorem ipsum dolor sit.</p>
          <p>2018</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </Content>
      </Wrap>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  padding: 1rem;
  border: 2px solid #c9cbe2;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 1rem;
`;

const Head = styled.div``;
const Wrap = styled.div``;
const Content = styled.div``;
