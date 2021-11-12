import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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
        <Overview>
          <div className="grid">
            <Wrap>
              <h5>Stipend</h5>
              <h3>7500 - 10000 INR</h3>
            </Wrap>
            <Wrap>
              <h5>Internship type</h5>
              <h3>Work from Home</h3>
            </Wrap>
            <Wrap>
              <h5>Number of openings</h5>
              <h3>2</h3>
            </Wrap>
            <Wrap>
              <h5>Internship start date</h5>
              <h3>24/06/2021</h3>
            </Wrap>
            <Wrap>
              <h5>Duration</h5>
              <h3>2 Months</h3>
            </Wrap>
            <Wrap>
              <h5>Apply By</h5>
              <h3>29/05/2021</h3>
            </Wrap>
          </div>
          <div className="bottom">
            <Link href="/intership/questions">
              <button>Apply Now</button>
            </Link>
            <ShareBtn>
              <img src="/intershipdetail/whatsapp-icon.png" alt="" />
              <p>Share</p>
            </ShareBtn>
          </div>
        </Overview>
        <Skills className="common-container">
          <h1>Skills(s) Required</h1>
          <div className="childrens">
            <p>User Research</p>
            <p>Wireframing</p>
            <p>Sketch</p>
            <p>Adobe XD</p>
            <p>Figma</p>
          </div>
        </Skills>
        <About className="common-container">
          <h1>About Skilzen</h1>
          <p>
            Designers are responsible for the design of digitally-enabled
            products and services. They use their broad skillset across the
            service, interaction, and visual design domains to work on holistic
            design solutions, from early-stage idea generation until detailed
            design of service features and user stories in a digital product.
          </p>
        </About>
        <JobDesc className="common-container">
          <h1>Job Description</h1>
          <p>
            Designers are responsible for the design of digitally-enabled
            products and services. They use their broad skillset across the
            service, interaction, and visual design domains to work on holistic
            design solutions, from early-stage idea generation until detailed
            design of service features and user stories in a digital product.
          </p>
        </JobDesc>
        <Responsibility className="common-container">
          <h1>Selected intern's day-to-day responsibilities include:</h1>
          <p>
            1. Preparing and presenting designs, wireframes, and prototypes to
            internal teams and key stakeholders <br /> 2. Developing interaction
            flows, UI mockups, and low-fidelity prototypes <br /> 3. Since we
            are undergoing a website overhaul, you will contribute to designing
            our website pages <br /> 4. Developing an understanding of the
            end-users through secondary and primary researc <br /> 5. Conduct
            testing of applications, websites, and software to assess user
            experience <br /> 6. Identifying and troubleshooting UX problems{" "}
            <br /> 7. Creating infographics and other such collateral to present
            our clients.
          </p>
        </Responsibility>
        <Eligibility className="common-container">
          <h1>Who can Apply:</h1>
          <p>
            1. Have already graduated or are currently in any year of study{" "}
            <br />
            2. Have relevant skills and interests <br /> 3. Are available for a
            duration of at least 3 months <br /> 4. Are available for the work
            from home internship
          </p>
        </Eligibility>

        <BottomDiv>
          <button>Apply</button>
          <a href="#">Report Spam</a>
        </BottomDiv>
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
  .common-container {
    margin-bottom: 1em;
    h1 {
      font-weight: 600;
      font-size: 26px;
      color: #404366;
      margin-bottom: 0.5em;
    }
    p {
      font-size: 17px;
      line-height: 29px;
      color: #5c5f85;
    }
  }
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

const Overview = styled.div`
  border-bottom: 1px solid #c9cbe2;
  padding-bottom: 1rem;
  .grid {
    display: grid;
    padding: 1rem 0;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    max-width: 55rem;
    @media (max-width: 700px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    button {
      font-weight: 500;
      font-size: 16px;
      color: #404366;
      padding: 13px 22px;
      border: 1px solid #f898a6;
      margin-right: 2em;
      background-color: #fff;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;
const Skills = styled.div`
  padding: 1.5rem 0;
  h1 {
    font-weight: 600;
    font-size: 26px;
    color: #404366;
    margin-bottom: 0.5em;
  }
  .childrens {
    display: flex;
    flex-flow: row wrap;
    padding-top: 1rem;
    p {
      margin: 0 1rem;
      font-weight: 600;
      font-size: 17px;
      color: #404366;
    }
  }
`;
const About = styled.div``;
const JobDesc = styled.div``;
const Responsibility = styled.div``;
const Eligibility = styled.div``;

// common

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

const ShareBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    margin-left: 0.4rem;
  }
`;
const Wrap = styled.div`
  padding: 0.8rem 0;
  h5 {
    font-weight: 500;
    font-size: 16px;
    color: #a9accb;
    margin-bottom: 0.6em;
    @media (max-width: 818px) {
      font-size: 13px;
    }
  }
  h3 {
    font-weight: 600;
    font-size: 19px;
    color: #404366;
    @media (max-width: 818px) {
      font-size: 16px;
    }
  }
`;

const BottomDiv = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  button {
    font-weight: 500;
    font-size: 16px;
    color: #404366;
    padding: 13px 22px;
    border: 1px solid #f898a6;
    margin-right: 2em;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
  a {
    font-weight: 500;
    font-size: 18px;
    color: #404366;
  }
`;
