import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../../Home/common/styles/Container.styled";

const AboutUs = () => {
  const tabs = ["About Us", "Contact Us"];
  const [active, setActive] = useState(tabs[0]);
  return (
    <Container>
      <Split>
        <Left>
          <TabsHeader>
            {tabs.map((t, i) => (
              <TabItem
                active={active === t}
                onClick={() => setActive(t)}
                key={i}
              >
                {t}
              </TabItem>
            ))}
          </TabsHeader>

          <TabsBody>
            {active === "About Us" && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                numquam perferendis totam iure esse alias beatae magnam, odit
                saepe repudiandae unde sed qui quae. Earum nisi numquam ex
                quaerat exercitationem?
              </p>
            )}

            {active === "Contact Us" && (
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus, cupiditate!
              </p>
            )}
          </TabsBody>
        </Left>
        <Right>
          {active === "About Us" && (
            <img src="/about/aboutus/vector.png" alt="hello" />
          )}
          {active === "Contact Us" && (
            <img src="/about/aboutus/vector2.svg" alt="hello" />
          )}
        </Right>
      </Split>
    </Container>
  );
};

export default AboutUs;

const Split = styled.div`
  display: flex;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
`;
const Right = styled.div`
  flex-basis: 50%;
  margin-left: 3rem;
  @media (max-width: 1000px) {
    margin-left: 1rem;
  }
  img {
    display: block;
    max-width: 100%;
    margin-inline: auto;
  }
`;

const TabsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 1.5rem;
  margin-top: 4rem;

  @media (max-width: 40em) {
    margin-bottom: 0.7em;
    gap: 1.5rem;
    margin-top: 0;
  }
`;
const TabsBody = styled.div`
  padding: 1rem 0;
  font-size: 18px;
  line-height: 32px;
  color: #18191f;
`;
const TabItem = styled.div`
  padding: 0.4rem 0;
  cursor: pointer;
  font-size: 32px;
  font-weight: bold;
  color: ${({ active }) => (active ? "#404366" : "#c9cbe2")};
  border-bottom: 3px solid
    ${(props) => (props.active ? "#F26A7E" : "transparent")};

  @media (max-width: 40em) {
    font-size: 24px;
  }
`;
