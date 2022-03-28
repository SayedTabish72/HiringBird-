import { Button } from "@/common/styles/OutlineBtn.styled";
import AuthContainer from "components/Auth/Common/AuthContainer";
import Signin from "components/Auth/Signin";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchInternshipById,
  resetInternshipById,
} from "redux/actions/internship";
import styled from "styled-components";
import withAuth from "../../../hoc/withAuth";

const Main = ({ active, width }) => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const internship = useSelector((state) => state.internship.internship);
  console.log("🚀 ~ file: Main.js ~ line 21 ~ Main ~ internship", internship);

  useEffect(() => {
    if (id || active) {
      dispatch(fetchInternshipById(id || active));
    }
  }, [id, active]);

  useEffect(() => {
    return () => {
      dispatch(resetInternshipById());
    };
  }, []);

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

  // const checkAuth = () => {
  //   if (!isAuthenticated) {
  //     router.push(`/signin?redirect=internship/detail/${id}`);
  //   } else {
  //     window.open(
  //       "https://careers.google.com/jobs/results/113751209304564422-senior-software-engineer-infrastructure-core/" ||
  //         internship.link,
  //       "_blank"
  //     );
  //   }
  // };

  return (
    <Wrapper width={width}>
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
            {internship?.internshipLink ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://careers.google.com/jobs/results/113751209304564422-senior-software-engineer-infrastructure-core/`}
              >
                <Button>Apply Now</Button>
              </a>
            ) : (
              // </a>
              <Link href={`/internship/question/${id}`}>
                <Button>Apply Now</Button>
              </Link>
            )}

            <ShareBtn>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.564 12.0232L14.5565 12.0812C12.7271 11.2333 12.5358 11.1203 12.2995 11.4499C12.1356 11.6781 11.6581 12.1957 11.5142 12.3489C11.3686 12.4998 11.2239 12.5114 10.9768 12.4069C10.7272 12.2909 9.92611 12.0472 8.97774 11.258C8.23902 10.643 7.7432 9.88867 7.59679 9.65657C7.35304 9.2651 7.863 9.2094 8.3272 8.39241C8.41039 8.22994 8.36796 8.10229 8.3064 7.98701C8.24401 7.87096 7.74736 6.73368 7.53939 6.28032C7.33973 5.8285 7.13425 5.88575 6.98035 5.88575C6.50118 5.84707 6.15095 5.85326 5.84231 6.15189C4.49962 7.52436 4.83821 8.94016 5.98706 10.4457C8.24484 13.1937 9.44777 13.6997 11.6473 14.4022C12.2413 14.5778 12.7829 14.5531 13.2113 14.4958C13.6888 14.4254 14.6812 13.938 14.8884 13.3926C15.1005 12.8471 15.1005 12.3946 15.0381 12.2901C14.9766 12.1857 14.8135 12.1276 14.564 12.0232Z"
                  fill="#404366"
                />
                <path
                  d="M17.0705 3.62279C10.674 -2.12783 0.0880593 2.04298 0.0838998 10.1556C0.0838998 11.7772 0.540613 13.3585 1.41078 14.755L-0.00012207 19.5223L5.26996 18.2442C11.8461 21.5477 19.9621 17.1611 19.9655 10.1602C19.9655 7.70307 18.9339 5.3906 17.058 3.65296L17.0705 3.62279ZM18.3033 10.1347C18.2983 16.04 11.3279 19.7281 5.81486 16.7139L5.51537 16.5483L2.39575 17.3027L3.23181 14.4827L3.03299 14.1925C-0.39777 9.11346 3.54377 2.47545 10.0426 2.47545C12.2504 2.47545 14.3227 3.27619 15.8833 4.7268C17.4432 6.16504 18.3033 8.09223 18.3033 10.1347Z"
                  fill="#404366"
                />
              </svg>

              <p>Share</p>
            </ShareBtn>
          </div>
        </Overview>
        <Skills className="common-container">
          <h2>Skills(s) Required</h2>
          <div className="childrens">
            {internship?.skills?.map((skill, i) => (
              <p key={i}>{skill}</p>
            ))}
          </div>
        </Skills>
        <About className="common-container">
          <h2>About Skilzen</h2>
          <p>{internship?.aboutCompany}</p>
        </About>
        <JobDesc className="common-container">
          <h2>Job Description</h2>
          <p>{internship?.jobDescription}</p>
        </JobDesc>
        <Responsibility className="common-container">
          <h2>Selected interns day-to-day responsibilities include:</h2>
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
          <h2>Perks</h2>
          <p>
            {internship?.perks?.map((data, i) => {
              return <li key={i}>{data}</li>;
            })}
          </p>
        </Eligibility>

        <BottomDiv>
          {internship?.internshipLink ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://careers.google.com/jobs/results/113751209304564422-senior-software-engineer-infrastructure-core/`}
            >
              <Button>Apply Now</Button>
            </a>
          ) : (
            <Link href={`/internship/question/${id}`}>
              <Button>Apply Now</Button>
            </Link>
          )}
          <a href="#">Report Spam</a>
        </BottomDiv>
      </Body>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: ${(props) => props.width && "min(90%, 90rem)"};
  margin-inline: auto;
  background-color: #fff;
`;

const Body = styled.div`
  .common-container {
    margin-bottom: 1em;
    h2 {
      font-weight: 600;
      font-size: clamp(1rem, 0.1667rem + 3.7037vw, 1.6rem);
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
    gap: 1rem;
    padding: 1rem 0;
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
  a {
    font-weight: 500;
    font-size: 18px;
    color: #404366;
  }
`;
