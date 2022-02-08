import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Card() {
  const skills = ["User Research", "Wireframing", "Figma"];

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
        <Img src="/company-logo.svg" width="45px" height="45px" />

        <Heading>Skilzen</Heading>
        <Id>HB4321</Id>
        <SubHeading>Frontend Developer</SubHeading>

        <ul>
          <li>30 days ago</li>
          <li>150 Applicants</li>
        </ul>
      </CardComp>

      <CardDetails>
        <Wrap>
          <DetailsEle>
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.20189 2.21428H11.8002C11.9063 2.21428 12.008 2.25943 12.083 2.3398C12.158 2.42018 12.2001 2.52918 12.2001 2.64285V5.16427H12.2501M2.20189 2.21428L1.00211 10.7557C1.00368 10.9864 1.04764 11.2146 1.1315 11.4271C1.21536 11.6397 1.33746 11.8324 1.49084 11.9944C1.64421 12.1564 1.82586 12.2844 2.0254 12.3711C2.22495 12.4579 2.43848 12.5016 2.65382 12.5M2.20189 2.21428C2.1072 2.21593 2.01502 2.18152 1.94178 2.11717C1.86855 2.05281 1.819 1.96269 1.80196 1.86285M2.20189 2.21428L1.80196 1.86285M12.2501 5.16427V5.21427H12.6001C12.7061 5.21427 12.8079 5.25942 12.8829 5.33979C12.9579 5.42016 13 5.52917 13 5.64284V9.07139C13 9.18506 12.9579 9.29407 12.8829 9.37444C12.8079 9.45481 12.7061 9.49996 12.6001 9.49996H12.2501V9.54996M12.2501 5.16427H12.6001C12.7206 5.16427 12.8354 5.21559 12.9194 5.30568C13.0034 5.39565 13.05 5.51698 13.05 5.64284V9.07139C13.05 9.19725 13.0034 9.31858 12.9194 9.40855C12.8354 9.49864 12.7206 9.54996 12.6001 9.54996H12.2501M12.2501 5.16427V2.64285C12.2501 2.517 12.2035 2.39566 12.1196 2.30569C12.0355 2.2156 11.9207 2.16428 11.8002 2.16428H2.20189V2.16427L2.20102 2.16429C2.11917 2.16572 2.03898 2.13601 1.97479 2.07961C1.91149 2.02398 1.86779 1.94588 1.85197 1.85849M12.2501 9.54996H12.2001V12.0714C12.2001 12.185 12.158 12.2941 12.083 12.3744C12.008 12.4548 11.9063 12.5 11.8002 12.5H2.65382M12.2501 9.54996V12.0714C12.2501 12.1972 12.2035 12.3186 12.1196 12.4085C12.0355 12.4986 11.9207 12.55 11.8002 12.55H2.65396M2.65382 12.5V12.55H2.65396M2.65382 12.5L2.65421 12.55C2.65413 12.55 2.65405 12.55 2.65396 12.55M2.65396 12.55C2.43165 12.5517 2.21128 12.5065 2.00547 12.417C1.7996 12.3275 1.61242 12.1955 1.45453 12.0288C1.29665 11.8621 1.17113 11.6638 1.08499 11.4455C0.998847 11.2271 0.953718 10.9929 0.952106 10.756L0.952104 10.7557L0.952105 1.94135C0.949298 1.88906 0.949298 1.83664 0.952106 1.78434M1.85197 1.85849V1.71293M1.85197 1.85849V1.86285H1.80196M1.85197 1.85849C1.85172 1.85714 1.85148 1.85579 1.85125 1.85444L1.80196 1.86285M1.85197 1.71293C1.86779 1.62554 1.91149 1.54743 1.97479 1.49181C2.03898 1.43541 2.11917 1.4057 2.20102 1.40713L2.20102 1.40714H2.20189H11.6322C11.7527 1.40714 11.8675 1.35582 11.9516 1.26573C12.0355 1.17575 12.0822 1.05442 12.0822 0.92857C12.0822 0.802718 12.0355 0.681385 11.9516 0.591412C11.8675 0.501323 11.7527 0.45 11.6322 0.45H2.20189C1.86927 0.45 1.55103 0.591629 1.31696 0.842463C1.0833 1.09286 0.952443 1.43166 0.952106 1.78434M1.85197 1.71293C1.85172 1.71427 1.85148 1.71562 1.85125 1.71698L1.80196 1.70857M1.85197 1.71293V1.70857H1.80196M0.952106 1.78434C0.95213 1.78389 0.952155 1.78344 0.95218 1.78298L1.00211 1.78571H0.952105C0.952105 1.78525 0.952106 1.7848 0.952106 1.78434ZM1.80196 1.70857V1.86285M1.80196 1.70857C1.819 1.60873 1.86855 1.51861 1.94178 1.45425C2.01502 1.3899 2.1072 1.35548 2.20189 1.35714L1.80196 1.86285M2.65382 11.5928L2.6533 11.5928C2.44519 11.595 2.24398 11.509 2.09362 11.3524C1.94325 11.1958 1.85606 10.9813 1.85197 10.7552V3.08594C1.9668 3.1148 2.08492 3.12678 2.20304 3.12142H11.3503V5.16427H8.60077C8.05601 5.16427 7.53433 5.3962 7.15025 5.80778C6.76629 6.21924 6.55112 6.77661 6.55112 7.35712C6.55112 7.93762 6.76629 8.49499 7.15025 8.90645C7.53433 9.31803 8.05601 9.54996 8.60077 9.54996H11.3503V11.5928L2.65382 11.5928ZM12.1501 8.59282H8.60077C8.29699 8.59282 8.00488 8.46354 7.78895 8.23214C7.5729 8.00062 7.45098 7.68592 7.45098 7.35712C7.45098 7.02831 7.5729 6.71361 7.78895 6.48209C8.00488 6.25069 8.29699 6.12141 8.60077 6.12141H12.1501V8.59282Z"
                fill="#EC1F28"
                stroke="#EC1F28"
                strokeWidth="0.1"
              />
              <path
                d="M9.00401 7.99958C9.33532 7.99958 9.6039 7.71176 9.6039 7.35672C9.6039 7.00168 9.33532 6.71387 9.00401 6.71387C8.6727 6.71387 8.40411 7.00168 8.40411 7.35672C8.40411 7.71176 8.6727 7.99958 9.00401 7.99958Z"
                fill="#C9CBE2"
              />
            </svg>

            <p>4000 - 8000 INR</p>
          </DetailsEle>
          <DetailsEle>
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.9284 2.21362H2.42711C1.83528 2.21362 1.3555 2.6934 1.3555 3.28524V10.7865C1.3555 11.3784 1.83528 11.8581 2.42711 11.8581H9.9284C10.5202 11.8581 11 11.3784 11 10.7865V3.28524C11 2.6934 10.5202 2.21362 9.9284 2.21362Z"
                stroke="#EC1F28"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.32034 1.14185V3.28507"
                stroke="#EC1F28"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.03519 1.14185V3.28507"
                stroke="#EC1F28"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.3555 5.42847H11"
                stroke="#EC1F28"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>2 months</p>
          </DetailsEle>
        </Wrap>

        <DetailsEle>
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.9284 2.21362H2.42711C1.83528 2.21362 1.3555 2.6934 1.3555 3.28524V10.7865C1.3555 11.3784 1.83528 11.8581 2.42711 11.8581H9.9284C10.5202 11.8581 11 11.3784 11 10.7865V3.28524C11 2.6934 10.5202 2.21362 9.9284 2.21362Z"
              stroke="#EC1F28"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.32034 1.14185V3.28507"
              stroke="#EC1F28"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.03519 1.14185V3.28507"
              stroke="#EC1F28"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.3555 5.42847H11"
              stroke="#EC1F28"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p>10/09/21</p>
        </DetailsEle>
      </CardDetails>

      <CardSkills>
        {/* join skills array with comma and map */}
        {skills
          .map((skill, index) => {
            return <p key={index}>{skill}</p>;
          })
          .reduce((prev, curr) => [prev, ",", curr])}
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
    font-weight: 600;
    font-size: 13px;
    line-height: 15px;
    color: #404366;
    margin: 8px 0;
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
  color: #ec1f28;
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

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    li {
      &:first-child {
        list-style: none;
      }
      font-size: 12px;
      color: #a3a6c4;
    }
  }
`;

const Type = styled.p``;

const Wrapper = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
  padding-top: 1rem;
  border: 2px solid #c9cbe2;
  border-radius: 10px;
  background: #ffffff;
  user-select: none;
  &:hover {
    border: 2px solid #f26a7e;
  }
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
