import React from "react";
import styled from "styled-components";
import { Container } from "../../Home/common/styles/Container.styled";

function Achievements() {
  return (
    <Container>
      <SmallContainer>
        <Achievement>
          <LeftText>
            <Heading>
              Our 3 years of <br /> achievements
            </Heading>
            <Para>With our super powers we have reached this</Para>
          </LeftText>
          <RightRecord>
            <RightTop>
              <Box>
                <Left>
                  <Icon src="/about/achievements/4.svg" alt="one" />
                </Left>
                <Right>
                  <CountBig>10,000+</CountBig>
                  <CountSmall>Sessions per day</CountSmall>
                </Right>
              </Box>
              <Box>
                <Left>
                  <Icon src="/about/achievements/1.svg" alt="one" />
                </Left>
                <Right>
                  <CountBig>2 Million</CountBig>
                  <CountSmall>Users</CountSmall>
                </Right>
              </Box>
            </RightTop>
            <RightBottom>
              <Box>
                <Left>
                  <Icon src="/about/achievements/2.svg" alt="one" />
                </Left>
                <Right>
                  <CountBig>500+</CountBig>
                  <CountSmall>Clients</CountSmall>
                </Right>
              </Box>
              <Box>
                <Left>
                  <Icon src="/about/achievements/3.svg" alt="one" />
                </Left>
                <Right>
                  <CountBig>140</CountBig>
                  <CountSmall>Countries</CountSmall>
                </Right>
              </Box>
            </RightBottom>
          </RightRecord>
        </Achievement>
        <Timeline>
          <Heading>Our Timeline</Heading>
          <Wrap>
            <Div>
              <Top>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12.7784"
                    cy="12.7784"
                    r="12.7784"
                    fill="#F26A7E"
                  />
                </svg>

                <svg
                  width="195"
                  height="3"
                  viewBox="0 0 195 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    opacity="0.4"
                    x1="1.17815"
                    y1="1.71346"
                    x2="193.919"
                    y2="1.71346"
                    stroke="#F26A7E"
                    strokeWidth="2.12973"
                    strokeLinecap="round"
                    strokeDasharray="2.13 8.52"
                  />
                </svg>
              </Top>
              <Bottom>
                <Year>Started 2013</Year>
                <Text>Turn your idea from concept to MVP</Text>
              </Bottom>
            </Div>
            <Div>
              <Top>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12.7784"
                    cy="12.7784"
                    r="12.7784"
                    fill="#F26A7E"
                  />
                </svg>
                <svg
                  width="195"
                  height="3"
                  viewBox="0 0 195 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    opacity="0.4"
                    x1="1.17815"
                    y1="1.71346"
                    x2="193.919"
                    y2="1.71346"
                    stroke="#F26A7E"
                    strokeWidth="2.12973"
                    strokeLinecap="round"
                    strokeDasharray="2.13 8.52"
                  />
                </svg>
              </Top>
              <Bottom>
                <Year>2015</Year>
                <Text>Sketch out the product to align the user needs</Text>
              </Bottom>
            </Div>
            <Div>
              <Top>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12.7784"
                    cy="12.7784"
                    r="12.7784"
                    fill="#F26A7E"
                  />
                </svg>
                <svg
                  width="195"
                  height="3"
                  viewBox="0 0 195 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    opacity="0.4"
                    x1="1.17815"
                    y1="1.71346"
                    x2="193.919"
                    y2="1.71346"
                    stroke="#F26A7E"
                    strokeWidth="2.12973"
                    strokeLinecap="round"
                    strokeDasharray="2.13 8.52"
                  />
                </svg>
              </Top>
              <Bottom>
                <Year>2016</Year>
                <Text>Convert the designs into a live application</Text>
              </Bottom>
            </Div>
            <Div>
              <Top>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12.7784"
                    cy="12.7784"
                    r="12.7784"
                    fill="#F26A7E"
                  />
                </svg>
                <svg
                  width="195"
                  height="3"
                  viewBox="0 0 195 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    opacity="0.4"
                    x1="1.17815"
                    y1="1.71346"
                    x2="193.919"
                    y2="1.71346"
                    stroke="#F26A7E"
                    strokeWidth="2.12973"
                    strokeLinecap="round"
                    strokeDasharray="2.13 8.52"
                  />
                </svg>
              </Top>
              <Bottom>
                <Year>2021</Year>
                <Text>Launching the application to the market</Text>
              </Bottom>
            </Div>
            <Div>
              <Top>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12.7784"
                    cy="12.7784"
                    r="12.7784"
                    fill="#F26A7E"
                  />
                </svg>
                {/* <LineIndicator src="line-indicator.svg" alt="line-indicator" /> */}
              </Top>
              <Bottom>
                <Year>2022</Year>
                <Text>Launching the application to the market</Text>
              </Bottom>
            </Div>
          </Wrap>
        </Timeline>
      </SmallContainer>
    </Container>
  );
}

export default Achievements;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Achievement = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 1046px) {
    flex-direction: column;
  }
`;

export const Timeline = styled.div``;

export const LeftText = styled.div`
  flex: 1;
`;

export const RightRecord = styled.div`
  flex: 1;
`;

export const Heading = styled.h1`
  font-weight: 900;
  font-size: clamp(1.8rem, 1.6083rem + 0.8519vw, 2.375rem);
  font-feature-settings: "salt" on, "liga" off;
  color: #404366;
  @media (max-width: 444px) {
    font-size: 40px;
    line-height: 50px;
  }
`;

export const Para = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 21.2442px;
  line-height: 38px;
  font-feature-settings: "salt" on, "liga" off;
  color: #f26a7e;
`;

export const RightTop = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media (max-width: 484px) {
    gap: 2rem;
  }
`;

export const RightBottom = styled.div`
  display: flex;
  @media (max-width: 484px) {
    gap: 2rem;
  }
`;

export const Box = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
`;

export const Left = styled.div``;

export const Right = styled.div`
  flex: 1;
`;

export const CountBig = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 33.0465px;
  line-height: 47px;
  font-feature-settings: "salt" on, "liga" off;
  color: #404366;
  @media (max-width: 442px) {
    font-size: 25px;
  }
`;
export const CountSmall = styled.h3`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18.8837px;
  line-height: 31px;
  font-feature-settings: "salt" on, "liga" off;
  color: #404366;
  @media (max-width: 442px) {
    font-size: 20px;
  }
`;
export const Icon = styled.img`
  @media (max-width: 442px) {
    width: 27px;
    height: 27px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  margin: 30px 0;
  gap: 1.5rem;
  @media (max-width: 1417px) {
    flex-wrap: wrap;
  }
  @media (max-width: 627px) {
    gap: 0;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 627px) {
    flex-direction: row;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 627px) {
    flex-direction: column;
    gap: 0;
    align-items: flex-start;
  }
`;

export const Bottom = styled.div``;

export const Circle = styled.img``;

export const LineIndicator = styled.img`
  width: 200px;
  @media (max-width: 626px) {
    display: none;
  }
`;

export const VerticalLine = styled.img`
  height: 200px;
  margin-left: 12px;
  @media (min-width: 627px) {
    display: none;
  }
  @media (max-width: 450px) {
    height: 100px;
  }
`;

export const Year = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 23.427px;
  line-height: 32px;
  font-feature-settings: "salt" on, "liga" off;
  color: #f26a7e;
`;

export const Text = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 17.0378px;
  line-height: 28px;
  font-feature-settings: "salt" on, "liga" off;
  color: #404366;
  max-width: 270px;
`;
