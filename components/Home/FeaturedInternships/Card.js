import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Card() {
  const skills = ["React"];

  return ( 
    <Wrapper>
      <CardHead>
        <div>
          <Img src="/wfhome.svg" style={{ marginRight: "5px" }} />

          <Type>Work from home</Type>
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
            fill="#F26A7E"
            width="24px"
            height="24px"
            style={{ margin: "0 8px" }}
          />
        </div>
      </CardHead>

      <CardComp>
        <Img src="/home/featuredinternship/skilzen.svg" />

        <Heading>Skilzen</Heading>
        <Id>HB4321</Id>
        <SubHeading>UI/UX Design Intern</SubHeading>

        <p>30 days ago</p>
      </CardComp>

      <CardDetails>
        <Wrap>
          <DetailsEle>
            <Img src="/stipend.png" width="12px" height="12px" />

            <p>7,500 - 10,000 INR</p>
          </DetailsEle>
          <DetailsEle>
            <Img src="/calendar.svg" width="12px" height="12px"    />

            <p>2 months</p>
          </DetailsEle>
        </Wrap>

        <DetailsEle>
          <Img src="/calendar.svg" width="12px" height="12px" />

          <p>2 June 2021</p>
        </DetailsEle>
      </CardDetails>

      <CardSkills>
        {skills.map((skill, index) => {
          return <p> User Research, Wireframing, Figma, Sketch  
           {/* key={index}>{skill} */}
           </p>;
        })}
      </CardSkills>

      <CardButtons>
        <Link href="/internship/questions/dsfaldfj">
          <button>Apply Now</button>
        </Link>

        <Link href="/internship/detail/dfldjjf">
          <button>
            View Details
            <Img src="/right-caret.svg" style={{ margin: "0 0 0 8px" }} />
          </button>
        </Link>
      </CardButtons>
    </Wrapper>
  );
}

export default Card;

const Img = styled.img``;

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
    color: #a3a6c3;
    display: flex;
    align-items: center;
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
    color: #404366;
    margin: 8px;
  }
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

const Wrap = styled.div`
  display: flex;
`;

const CardDetails = styled.div`
  margin: 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const Id = styled.span`
  color:rgba(236, 31, 40, 1);
  
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px; 
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
    color: #a3a6c3;
  }
`;

const Type = styled.p``;

const Wrapper = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
  padding-top: 1rem;
  border: 2px solid #E4E5F0;
  border-radius: 10px;
  background: #ffffff;
  user-select: none;
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
