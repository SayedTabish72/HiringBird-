import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function CardGridComp({ internships }) {
  return (
    <>
      <CardGrid>
        {internships.map((data, index) => {
          return (
            <Card key={index}>
              <CardHead>
                <div>
                  <Img src="/wfhome.svg" style={{ marginRight: "5px" }} />
                  <Type>{data.internshipType}</Type>
                </div>
                <div>
                  <Img
                    src="/share.svg"
                    width="24px"
                    height="24px"
                    style={{ margin: "0 8px" }}
                  />
                  <Img
                    src="/whatsapp.svg"
                    width="24px"
                    height="24px"
                    style={{ margin: "0 8px" }}
                  />
                  <Img
                    src="/heart.svg"
                    fill={data.fav ? "#F26A7E" : "#C9CBE2"}
                    width="24px"
                    height="24px"
                    style={{ margin: "0 8px" }}
                  />
                </div>
              </CardHead>

              <CardComp>
                <Img src="/company-logo.svg" width="45px" height="45px" />
                <Heading>{data.companyName}</Heading>
                <Id>HB4321</Id>
                <SubHeading>{data.jobName}</SubHeading>
                <p>20 Days ago &nbsp; 150 Applicants</p>
              </CardComp>

              <CardDetails>
                <Wrap>
                  <DetailsEle>
                    <Img src="/stipend.svg" width="12px" height="12px" />
                    <p>
                      {data.minStipen}-{data.maxStipen} {data.currencyType}
                    </p>
                  </DetailsEle>
                  <DetailsEle>
                    <Img src="/calendar.svg" width="12px" height="12px" />
                    <p>{data.internshipPeriod} Months</p>
                  </DetailsEle>
                </Wrap>

                <DetailsEle>
                  <Img src="/calendar.svg" width="12px" height="12px" />
                  <p>{data.applyBy}</p>
                </DetailsEle>
              </CardDetails>

              <CardSkills>
                {data.skills.map((skill, index) => {
                  return <p key={index}>{skill}</p>;
                })}
              </CardSkills>

              <CardButtons>
                <button>Apply Now</button>
                <button>
                  View Details
                  <Img src="/right-caret.svg" style={{ margin: "0 0 0 8px" }} />
                </button>
              </CardButtons>
            </Card>
          );
        })}
      </CardGrid>
      <Pagination>
        <Link href="/" passHref>
          <LoadMore>Load More</LoadMore>
        </Link>
      </Pagination>
    </>
  );
}

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

const LoadMore = styled.span`
  cursor: pointer;
  padding-bottom: 5px;
  border-bottom: 2px solid #f26a7e;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.175px;
  text-transform: capitalize;
  color: #404366;
`;

const Wrap = styled.div`
  display: flex;
`;

const Id = styled.span`
  color: #c9cbe2;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
`;

const Img = styled.img``;

const Type = styled.p``;

const CardGrid = styled.div`
  max-width: 100%;
  padding: 48px;
  margin: 0 auto;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    padding: 24px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
  padding-top: 1rem;
  border: 1px solid #c9cbe2;
  border-radius: 10px;
  background: #ffffff;
`;

const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #404366;
  }

  div {
    display: flex;
    margin-bottom: 8px;
  }
`;

const Heading = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #404366;
  margin-bottom: 0;
  margin-top: 5px;
`;

const SubHeading = styled.h3`
  display: flex;
  align-items: center;
  color: #404366;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  margin-bottom: 5px;
  margin-top: 10px;
`;

const CardComp = styled.div`
  margin-bottom: 10px;

  p {
    ${"" /* margin-top: 4px; */}
    font-style: normal;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    color: #c9cbe2;
  }
`;

const CardDetails = styled.div`
  margin: 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const DetailsEle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #404366;
    margin: 0 12px;
  }
`;

const CardSkills = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #c9cbe2;
    margin: 8px;
  }
`;

const CardButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  button:nth-child(1) {
    background: #ffffff;
    border: 1px solid #f26a7e;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 8px 24px;
    cursor: pointer;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #404366;
  }

  button:nth-child(1):hover {
    background: #f26a7e;
    color: #ffffff;
  }

  button:nth-child(2) {
    background: #ffffff;
    cursor: pointer;
    border: none;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #c9cbe2;
    display: flex;
    align-items: center;
  }
`;
