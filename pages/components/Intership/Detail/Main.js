import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Main = () => {
  return (
    <Wrapper>
      <BackBtn>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=""
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <a href="#">Back</a>
      </BackBtn>
      <Body>
        <Head>
          <Left>
            <h1>UI/UX Design Intern</h1>
            <Flex>
              <h2>Skilzen</h2>
              <LinkContainer>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#F898A6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <a href="#">www.skilzen.com</a>
              </LinkContainer>
            </Flex>
            <Flex>
              <p>2 Days ago</p>
              <p>15 Applicants applied</p>
            </Flex>
          </Left>
          <Right>
            <Image
              width={72}
              height={70}
              objectFit="contain"
              src="/intershipdetail/skillzen.png"
              alt=""
            />
          </Right>
        </Head>
        <Overview></Overview>
        <Skills></Skills>
        <About></About>
        <JobDesc></JobDesc>
        <Responsibility></Responsibility>
        <Eligibility></Eligibility>
      </Body>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: min(95%, 75rem);
  margin-inline: auto;
`;
const BackBtn = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.6em;
  svg {
    color: #98a8b8;
    height: 1.5rem;
  }
  a {
    color: #98a8b8;
    font-size: 24px;
    text-decoration: none;
  }
`;
const Body = styled.div`
  border: 1px solid #c9cbe2;
  border-radius: 15px;
  padding: 1.5em;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #c9cbe2;
`;
const Left = styled.div`
  h1 {
    margin-bottom: 0.4em;
    font-weight: 500;
    font-size: 28px;
    color: #404366;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    height: 1.5rem;
  }
  a {
    margin-left: 0.3em;
    color: #f898a6;
    font-weight: 500;
    font-size: 16px;
  }
`;
const Right = styled.div``;

const Overview = styled.div``;
const Skills = styled.div``;
const About = styled.div``;
const JobDesc = styled.div``;
const Responsibility = styled.div``;
const Eligibility = styled.div``;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.4em;
  h2 {
    font-weight: 500;
    font-size: 20px;
    color: #404366;
  }
  p {
    color: #98a8b8;
    font-size: 16px;
  }
`;
