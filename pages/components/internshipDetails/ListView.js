import React, { useState, useEffect, useContext } from "react";
import { InternshipContext } from "../../../context/internship.context";
import styled from "styled-components";
import ListCard from "./ListCard";
import RightDetailCard from "./RightDetailCard";

function ListView({ internships }) {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8];
  const { activeId } = useContext(InternshipContext);

  const [activeInternship, setactiveInternship] = useState();

  useEffect(() => {
    if (internships.length <= 0) return;
    if (!activeId) return;
    const temp = internships.filter((internship) => internship.id === activeId);
    setactiveInternship(temp[0]);
  }, [internships, activeId]);

  return (
    <Wrapper>
      <LeftWrap>
        <ListCard internships={internships} />
        {/* <Pagination>
          <img src="/left-arrow.svg" alt="go-left" />
          {pages.map((page) => {
            return <Number key={page}>{page}</Number>;
          })}
          <img
            src="/right-arrow.svg"
            style={{ marginLeft: "25px" }}
            alt="go-right"
          />
        </Pagination> */}
      </LeftWrap>
      <RightWrap>
        {activeInternship && (
          <RightDetailCard activeInternship={activeInternship} />
        )}
      </RightWrap>
    </Wrapper>
  );
}

export default ListView;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 60px;
  align-items: center;
  cursor: pointer;
  img {
    width: 8.42px;
    height: 13.45px;
  }
`;

const Number = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #404366;
  margin-left: 25px;
  transition: all 0.3s ease;
  &:hover {
    border-bottom: 2px solid #404366;
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 60px;
  padding-left: 3.16%;
  padding-right: 3.16%;
`;

const LeftWrap = styled.div`
  flex: 1;
  z-index: 0;
`;
const RightWrap = styled.div`
  margin-left: 65px;
  flex: 1.5;
  @media (max-width: 1077px) {
    margin-left: 20px;
  }
  @media (max-width: 868px) {
    display: none;
  }
  .content {
    border: 1px solid #c9cbe2;
    border-radius: 15px;
    padding: 2rem;
    padding-right: 4rem;
    .content_head {
      border-bottom: 1px solid #c9cbe2;
      padding-bottom: 1.2em;
      display: flex;
      justify-content: space-between;
      .right { 
        display: flex;
        flex-direction: column; 
        align-items: center;
        img {
          width: 51px;
          height: 55px;
          margin-bottom: 20px;
        }
        span {
          font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 22px;
/* identical to box height */


color: #A9ACCB;
        }
      }
      .left {
        h2 {
          color: #404366;
          font-weight: 600;
          font-size: 26px;
          margin-bottom: 0.5em;
          margin-top: 5px;
          font-family: Inter;
          font-style: normal;
          line-height: 31px;
        }
        .flex {
          margin-top: 10px;
          display: flex;
          align-items: center;
          h4 {
            font-weight: 500;
            font-size: 20px;
            color: #404366;
            margin: 0;
            font-family: Inter;
            font-style: normal;
            line-height: 24px;
            margin-right: 10px;

          }
          a {
            text-decoration: underline;
            color: #f898a6;
            margin-left: 0.6em;
            font-size: 16px;
            img {
              margin-right: 8px;
            }
          }
          
          p + p {
            margin-left: 2em;
          }
          p {
            font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: #A9ACCB;

          }
        }
      }
    }
    .content_desc {
      margin-top: -8px;
      padding-bottom: 1.5em;
      border-bottom: 1px solid #c9cbe2;
      .top {
        display: flex;
        flex-flow: row wrap;
        max-width: 60rem;
        justify-content: space-between;
        width: 100%;
        margin-top: 25px;
        .wrapContainer {
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin-top: 0px;
        }
        .wrap {
          flex-basis: 30%;
           flex-basis: 14rem;
          flex-basis: 31.3%; 
          margin: 1.8% 0;
          @media (max-width: 818px) {
          }
          @media (max-width: 600px) {
            flex-basis: 50%;
          }
          h5 {
            img {
              width: 11px;
              height: 11px;
              margin-left: 4px;
            }
            font-weight: 500;
            font-size: 16px;
            margin-bottom: 0.6em;
            @media (max-width: 818px) {
              font-size: 13px;
            }
          }
          font-family: Inter;
font-style: normal;
line-height: 19px;
color: #A9ACCB;
          h3 {
            color: #404366;
            @media (max-width: 818px) {
              font-size: 16px;
            }
            font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
margin-top: -5px;
          }
        }
      }
      .bottom {
        margin-top: 1em;
        display: flex;
        align-items: center;
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
          &:hover{
            background-color: #F26A7E;
            color: #fff;
          }
        }
        .share {
          display: flex;
          cursor: pointer;
          p {
            margin-left: 0.4rem;
          }
        }
      }
    }
    .content_detailedDesc {
      padding-top: 1.3em;
      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1em;
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
          &:hover{
            background-color: #F26A7E;
            color: #fff;
          }
        }
        a {
          font-weight: 500;
          font-size: 15px;
          line-height: 22px;
          color: #404366;
        }
      }
      .common-container {
        margin-bottom: 1em;
        .childrens {
          display: flex;
          flex-wrap: wrap;
          padding: 1em 0 0.3em 0;
          p {
            font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;
            color: #404366;
          }
          * {
            margin: 0 1em;
          }
        }
        h1 {
          font-size: 18px;
          color: #404366;
          margin-bottom: 0.5em;
          font-family: Inter;
font-style: normal;
font-weight: 600;
line-height: 22px;
        }
        p {
          font-size: 14px;
          line-height: 21px;
          color: #5c5f85;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
`;
