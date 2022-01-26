import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "../../../utils/axios";
import jwt_decode from "jwt-decode";
import SignInModal from "./SignInModal";
import { useSelector } from "react-redux";

const Main = () => {
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);
  const { id } = router.query;
  const [showModal, setShowModal] = useState(false);
  const [internship, setInternship] = useState({});
  useEffect(() => {
    axios
      .get(`/internship/${id}`)
      .then((res) => {
        console.log(res.data);
        setInternship(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [id]);

  function convertDateTotimeago(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  return (
    <>
      <SignInModal showModal={showModal} setShowModal={setShowModal} id={id} />
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
          <p onClick={() => router.back({ scroll: false })}>Back</p>
        </BackBtn>
        <Body>
          <Head>
            <Left>
              <h1>{internship?.jobName}</h1>
              <Flex>
                <h2>{internship?.companyName}</h2>
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
                  <a href="#">{internship?.companyUrl}</a>
                </LinkContainer>
              </Flex>
              <Flex>
                <p>
                  {convertDateTotimeago(new Date(internship?.createdAt)) +
                    "  ago"}
                </p>
                <p>{`${internship?.numberOfApplicants} Applicants applied`}</p>
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
                {(() => {
                  if (internship?.compensation == true) {
                    return (
                      <>
                        <h3>
                          {internship?.minStipen} - {internship?.maxStipen} INR
                        </h3>
                      </>
                    );
                  } else if (internship?.compensation == false);
                  {
                    return (
                      <>
                        <h3>Unpaid</h3>
                      </>
                    );
                  }
                })()}
              </Wrap>
              <Wrap>
                {(() => {
                  if (internship?.internshipType == "workfromhome") {
                    return (
                      <>
                        <h5>Internship Type</h5> <h3>Work From Home</h3>
                      </>
                    );
                  } else if (internship?.internshipType == "onsite");
                  {
                    return (
                      <>
                        <h5>Internship Type</h5>{" "}
                        <h3>Onsite - {internship?.location}</h3>
                      </>
                    );
                  }
                })()}
              </Wrap>
              <Wrap>
                <h5>Number of openings</h5>
                <h3>{internship?.noOfOpening}</h3>
              </Wrap>
              <Wrap>
                <h5>Internship start date</h5>
                <h3>
                  {new Date(internship?.startDate).toLocaleDateString("en-GB")}
                </h3>
              </Wrap>
              <Wrap>
                <h5>Duration</h5>
                <h3>{internship?.internshipPeriod} Months</h3>
              </Wrap>
              <Wrap>
                <h5>Apply By</h5>
                <h3>
                  {new Date(internship?.applyBy).toLocaleDateString("en-GB")}
                </h3>
              </Wrap>
            </div>
            <div className="bottom">
              {user ? (
                <Link
                  href={{
                    pathname: `/internship/questions/[id]`,
                    query: { id: internship?.id },
                  }}
                  as={`/internship-questions/${internship?.companyName}`}
                >
                  <button>Apply Now</button>
                </Link>
              ) : (
                <button onClick={() => setShowModal(true)}>Apply Now</button>
              )}

              <ShareBtn>
                <img src="/intershipdetail/whatsapp-icon.png" alt="" />
                <p>Share</p>
              </ShareBtn>
            </div>
          </Overview>
          <Skills className="common-container">
            <h1>Skills(s) Required</h1>
            <div className="childrens">
              {internship?.skills?.map((skill, i) => (
                <p key={i}>{skill}</p>
              ))}
            </div>
          </Skills>
          <About className="common-container">
            <h1>About Skilzen</h1>
            <p>{internship?.aboutCompany}</p>
          </About>
          <JobDesc className="common-container">
            <h1>Job Description</h1>
            <p>{internship?.jobDescription}</p>
          </JobDesc>
          <Responsibility className="common-container">
            <h1>Selected interns day-to-day responsibilities include:</h1>
            <p>
              {internship?.responsibilities?.map((data, i) => {
                return (
                  <li type="1" key={i}>
                    {data}
                  </li>
                );
              })}
            </p>
          </Responsibility>
          <Eligibility className="common-container">
            <h1>Perks:</h1>
            <p>
              {internship?.perks?.map((data, i) => {
                return <li key={i}>{data}</li>;
              })}
            </p>
          </Eligibility>

          <BottomDiv>
            <Link href={`/internship/questions/${internship?.id}`}>
              <button>Apply Now</button>
            </Link>
            <a href="#">Report Spam</a>
          </BottomDiv>
        </Body>
      </Wrapper>
    </>
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
  &:active {
    opacity: 0.5;
  }
  svg {
    color: #98a8b8;
    cursor: pointer;
    height: 1.4rem;
  }
  p {
    color: #98a8b8;
    font-size: 19px;
    cursor: pointer;
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
  margin-bottom: 20px;
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
  align-items: start;
  gap: 0.5rem;
  flex-direction: column;
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
