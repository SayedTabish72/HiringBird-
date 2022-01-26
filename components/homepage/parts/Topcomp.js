import React from "react";
import Image from "next/image";
import paypal from "../icons/paypa.svg";
import mc from "../icons/mc.svg";
import sf from "../icons/sf.svg";
import blu from "../icons/blu.svg";
import slack from "../icons/slack.svg";
import gm from "../icons/gm.svg";
import db from "../icons/db.svg";
import topimg from "../icons/companis.png";
import respo from "../icons/respo.png";
import { Container } from "./styles/CommonComponents/Container.styled";
import {
  Slacks1,
  Homepagepurple,
  Topcomptext,
  Redfont,
  Belowred,
  Joinbut,
  Paypal1,
  Paypal2,
  Mc1,
  Mc2,
  Sf1,
  Sf2,
  Blu,
  Slack,
  Greenmonke,
  Db,
  Fade,
} from "./styles/TopComp.styled";

import styled from "styled-components";

const Topcomp = () => {
  return (
    <FounderContainer>
      <Container>
        <Split>
          <h1 className="top">Top Companies Hiring</h1>
          <Top style={{ color: "#F26A7E" }}>
            Get internships in renowned companies
          </Top>

          <Cho>Choose HiringBird for your next internship opportunity</Cho>
          <Slack>
            <Image src={topimg}></Image>
          </Slack>

          <Slacks1>
            <Image src={respo}></Image>
          </Slacks1>

          <Joinbut>Join Skilzen</Joinbut>
          <div className="desc">
            <div className="desc_right">
              <p></p>
            </div>
          </div>

          <Right></Right>
        </Split>
        <Team>
          <h2></h2>

          <div className="team_members">
            <div className="wrap"></div>

            <div className="wrap"></div>

            <div className="wrap"></div>

            <div className="wrap"></div>
          </div>
        </Team>
      </Container>
    </FounderContainer>
  );
};

export default Topcomp;
const FounderContainer = styled.div`
  background-color: #e9e9f2;
  @media (max-width: 600px) {
    background: white;
  }
`;

const Split = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  h1 {
    font-weight: 800px;
    font-size: 72px;
    color: #404366;
    grid-column: 1;
    grid-row: 1;
    margin-bottom: 2rem;
    @media (max-width: 600px) {
      grid-column: 1/3;
      font-size: 52px;
    }
  }
  .top {
    @media (max-width: 600px) {
      grid-column: 1/3;
      font-size: 42px;
      width: 52vh;
    }
  }
  .get {
    margin-top: 25vh;
    width: 40vh;
    @media (max-width: 600px) {
      grid-column: 1/3;
      font-size: 52px;
      margin-top: 12vh;
      width: 32vh;
    }
  }
  .cho {
    @media (max-width: 600px) {
      grid-column: 1/3;
      font-size: 52px;
      margin-top: 32vh;
      width: 12vh;
    }
  }
  .desc {
    display: flex;
    align-items: flex-start;
    .desc_right {
      h4 {
        font-weight: bold;
        font-size: 18px;
        color: #f26a7e;
      }
      span {
        font-weight: normal;
        font-size: 16px;
        color: #404366;
      }
    }
    img {
      object-fit: contain;
      margin-right: 2rem;
    }
    grid-column: 1;
    grid-row: 2;
    @media (max-width: 600px) {
      grid-column: 1/3;
      grid-row: 3;
    }
    p {
      font-weight: normal;
      font-size: 24px;
      line-height: 32px;
      color: #404366;
      margin-bottom: 2rem;
      @media (max-width: 600px) {
      }
      @media (max-width: 800px) {
        font-size: 22px;
      }
    }
  }
`;
const Cho = styled.h4`
  margin-top: -1vh;
  width: 82vh;
  font-size: 3vh;
  color: #404366;
  @media (max-width: 600px) {
    font-size: 19px;
    width: 42vh;
    margin-left: 6vh;
    margin-top: 30vh;
    paddin-left: 20vh;
  }
`;
const Ima = styled.div`
  /* Logo 2 */

  position: static;
  width: 59.57px;
  height: 59.57px;
  left: 119.15px;
  top: -10.29px;

  background: url(.png);
  filter: drop-shadow(0px 9.30838px 18.6168px rgba(41, 41, 42, 0.07));

  /* Inside Auto Layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 59.5736px;
`;
const Left = styled.div``;
const Right = styled.div`
  grid-column: 2;
  grid-row: 1 / 3;
  order: 3;
  margin-left: 2rem;
  @media (max-width: 600px) {
    grid-row: 2;
    grid-column: 1/3;
    margin: 2rem 0;
  }
  img {
    display: block;
    max-width: 100%;
    margin-inline: auto;
    @media (max-width: 600px) {
    }
  }
`;
const Top = styled.h1`
  margin-top: 30vh;
  width: 110vh;

  @media (max-width: 600px) {
    width: 0px;
    display: none;
    font-size: -11vh;
  }
`;
const Team = styled.div`
  display: flex;
  margin-top: 2rem;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    /* overflow-x: scroll; */
  }
  align-items: flex-end;
  .team_members {
    display: flex;
    width: 100%;
    @media (max-width: 600px) {
      overflow-x: scroll;
      margin-top: 1.5rem;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    .wrap {
      margin: 0 1.3rem;
    }
  }
  h2 {
    display: flex;
    font-weight: 400;
    font-size: 21.2442px;
    span {
      font-weight: 600;
      font-size: 21.2442px;
      margin-left: 0.3rem;
    }
  }
`;
