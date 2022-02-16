import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Card({
  id,
  title,
  internshipType,
  company,
  skills,
  createdAt,
  applicantsCount,
}) {
  return (
    <Wrapper layout>
      <CardHead>
        <div style={{ display: "flex", alignItems: "center", gap: ".4rem" }}>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.549864 6.59681H1.64988V10.4496C1.64988 10.5956 1.70783 10.7356 1.81097 10.8388C1.91412 10.942 2.05402 11 2.19989 11H8.79998C8.94585 11 9.08575 10.942 9.18889 10.8388C9.29204 10.7356 9.34999 10.5956 9.34999 10.4496V6.59681H10.45C10.5563 6.5969 10.6603 6.56611 10.7495 6.50817C10.8386 6.45023 10.909 6.36764 10.9522 6.27042C10.9956 6.17325 11.0099 6.06555 10.9933 5.96041C10.9767 5.85527 10.9299 5.75723 10.8587 5.67819L5.90859 0.174201C5.70013 -0.0580671 5.29973 -0.0580671 5.09128 0.174201L0.141208 5.67819C0.0700871 5.75726 0.0233896 5.85527 0.00676614 5.96034C-0.00985734 6.06542 0.00430559 6.17306 0.0475412 6.27025C0.0907769 6.36744 0.161232 6.45001 0.250382 6.50797C0.339531 6.56592 0.443554 6.59678 0.549864 6.59681ZM3.65906 5.29842C3.88799 5.07224 4.19674 4.94542 4.51844 4.94542C4.84015 4.94542 5.1489 5.07224 5.37783 5.29842L5.50103 5.4195L5.62368 5.29842C5.85271 5.0722 6.16155 4.94537 6.48335 4.94537C6.80514 4.94537 7.11398 5.0722 7.34301 5.29842C7.45663 5.4078 7.54701 5.53901 7.60876 5.68418C7.6705 5.82935 7.70232 5.9855 7.70232 6.14328C7.70232 6.30105 7.6705 6.4572 7.60876 6.60238C7.54701 6.74755 7.45663 6.87876 7.34301 6.98814L5.50103 8.7984L3.65906 6.98814C3.54544 6.87876 3.45505 6.74755 3.39331 6.60238C3.33157 6.4572 3.29974 6.30105 3.29974 6.14328C3.29974 5.9855 3.33157 5.82935 3.39331 5.68418C3.45505 5.53901 3.54544 5.4078 3.65906 5.29842Z"
              fill="#F26A7E"
            />
          </svg>

          <Type>{internshipType}</Type>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: ".8rem" }}>
          <svg
            width="21"
            height="23"
            viewBox="0 0 21 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3577 14.7949C15.7825 14.798 15.2153 14.939 14.6979 15.2074C14.1805 15.4758 13.7261 15.8648 13.3683 16.3457L7.75067 12.596C7.95541 11.8905 7.95541 11.1353 7.75067 10.4298L13.3683 6.68012C13.9385 7.43393 14.7402 7.94795 15.6313 8.13111C16.5225 8.31427 17.4456 8.15476 18.2371 7.68083C19.0286 7.2069 19.6375 6.44914 19.9559 5.54179C20.2743 4.63443 20.2816 3.63605 19.9765 2.7235C19.6715 1.81094 19.0737 1.04312 18.2892 0.556045C17.5047 0.0689678 16.5841 -0.105924 15.6904 0.0623505C14.7966 0.230625 13.9875 0.731204 13.4064 1.47541C12.8253 2.21962 12.5096 3.15943 12.5153 4.12834C12.5189 4.49526 12.5707 4.85982 12.669 5.21141L7.05134 8.96113C6.55539 8.29453 5.87751 7.80918 5.11164 7.57233C4.34577 7.33549 3.52987 7.3589 2.77702 7.6393C2.02416 7.91971 1.37166 8.44323 0.909951 9.13729C0.448241 9.83136 0.200195 10.6616 0.200195 11.5129C0.200195 12.3642 0.448241 13.1945 0.909951 13.8885C1.37166 14.5826 2.02416 15.1061 2.77702 15.3865C3.52987 15.6669 4.34577 15.6903 5.11164 15.4535C5.87751 15.2166 6.55539 14.7313 7.05134 14.0647L12.669 17.8144C12.5707 18.166 12.5189 18.5306 12.5153 18.8975C12.5153 19.7089 12.7407 20.5021 13.1629 21.1767C13.5851 21.8514 14.1852 22.3772 14.8873 22.6877C15.5894 22.9982 16.362 23.0795 17.1074 22.9212C17.8527 22.7629 18.5374 22.3721 19.0748 21.7984C19.6121 21.2246 19.9781 20.4936 20.1264 19.6978C20.2746 18.902 20.1985 18.0771 19.9077 17.3275C19.6169 16.5779 19.1244 15.9371 18.4925 15.4863C17.8606 15.0355 17.1177 14.7949 16.3577 14.7949V14.7949ZM16.3577 1.66682C16.8137 1.66682 17.2595 1.81119 17.6386 2.08166C18.0177 2.35214 18.3132 2.73658 18.4877 3.18636C18.6622 3.63614 18.7079 4.13107 18.6189 4.60856C18.53 5.08605 18.3104 5.52465 17.988 5.8689C17.6655 6.21315 17.2547 6.44759 16.8075 6.54257C16.3603 6.63754 15.8968 6.5888 15.4755 6.40249C15.0542 6.21618 14.6941 5.90068 14.4408 5.49589C14.1875 5.09109 14.0523 4.61519 14.0523 4.12834C14.0523 3.47551 14.2952 2.84941 14.7275 2.38778C15.1599 1.92616 15.7463 1.66682 16.3577 1.66682V1.66682ZM4.06192 13.9744C3.60594 13.9744 3.1602 13.8301 2.78107 13.5596C2.40194 13.2891 2.10644 12.9047 1.93195 12.4549C1.75745 12.0051 1.71179 11.5102 1.80075 11.0327C1.88971 10.5552 2.10928 10.1166 2.43171 9.77235C2.75413 9.4281 3.16493 9.19366 3.61215 9.09868C4.05936 9.0037 4.52291 9.05245 4.94418 9.23876C5.36545 9.42506 5.72552 9.74056 5.97885 10.1454C6.23217 10.5502 6.36739 11.0261 6.36739 11.5129C6.36739 12.1657 6.12449 12.7918 5.69213 13.2535C5.25977 13.7151 4.67337 13.9744 4.06192 13.9744ZM16.3577 21.359C15.9018 21.359 15.456 21.2146 15.0769 20.9441C14.6978 20.6737 14.4023 20.2892 14.2278 19.8394C14.0533 19.3897 14.0076 18.8947 14.0966 18.4172C14.1855 17.9398 14.4051 17.5012 14.7275 17.1569C15.05 16.8127 15.4608 16.5782 15.908 16.4832C16.3552 16.3883 16.8187 16.437 17.24 16.6233C17.6613 16.8096 18.0213 17.1251 18.2747 17.5299C18.528 17.9347 18.6632 18.4106 18.6632 18.8975C18.6632 19.5503 18.4203 20.1764 17.988 20.638C17.5556 21.0996 16.9692 21.359 16.3577 21.359V21.359Z"
              fill="#C9CBE2"
            />
          </svg>

          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9777 13.1149L16.9691 13.1837C14.8617 12.179 14.6413 12.0452 14.3692 12.4357C14.1804 12.7061 13.6303 13.3193 13.4645 13.5008C13.2968 13.6796 13.13 13.6933 12.8454 13.5696C12.5579 13.4321 11.635 13.1433 10.5425 12.2083C9.69153 11.4796 9.12036 10.5859 8.9517 10.3109C8.6709 9.84706 9.25836 9.78106 9.79311 8.81308C9.88895 8.62058 9.84007 8.46933 9.76915 8.33275C9.69728 8.19525 9.12515 6.84778 8.88557 6.31062C8.65557 5.7753 8.41886 5.84313 8.24157 5.84313C7.68957 5.7973 7.28611 5.80463 6.93057 6.15846C5.38382 7.7846 5.77386 9.46206 7.09732 11.2459C9.69824 14.5018 11.084 15.1013 13.6178 15.9336C14.3021 16.1417 14.9259 16.1124 15.4195 16.0445C15.9696 15.9611 17.1129 15.3836 17.3515 14.7374C17.5959 14.0911 17.5959 13.5549 17.524 13.4312C17.4531 13.3074 17.2652 13.2387 16.9777 13.1149Z"
              fill="#7AD192"
            />
            <path
              d="M19.8652 3.16192C12.4966 -3.65154 0.301779 1.29012 0.296987 10.9021C0.296987 12.8234 0.823112 14.697 1.82553 16.3516L0.200195 22L6.27124 20.4857C13.8469 24.3998 23.1964 19.2024 23.2002 10.9076C23.2002 7.99634 22.0119 5.25647 19.8508 3.19767L19.8652 3.16192ZM21.2854 10.8774C21.2797 17.8742 13.2498 22.2438 6.89894 18.6726L6.55394 18.4764L2.9602 19.3701L3.92332 16.0289L3.69428 15.6852C-0.257888 9.66739 4.2827 1.80253 11.7692 1.80253C14.3126 1.80253 16.6998 2.75126 18.4977 4.46998C20.2945 6.17404 21.2854 8.45741 21.2854 10.8774Z"
              fill="#7AD192"
            />
          </svg>

          <svg
            width="25"
            height="23"
            viewBox="0 0 25 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5843 3.90022C12.8366 3.56213 13.0548 3.24364 13.3022 2.94475C14.3208 1.71978 15.5238 0.749607 17.0614 0.289019C19.6176 -0.47046 22.5425 0.27432 24.0316 3.31224C25.317 5.93367 25.2879 8.61879 24.1528 11.2941C23.3913 13.0826 22.2369 14.6015 20.8933 15.9784C18.5165 18.4185 15.7808 20.3785 12.7978 21.9856C12.6426 22.0689 12.5213 22.064 12.3709 21.9856C9.93111 20.6676 7.65136 19.1143 5.58989 17.2475C4.00862 15.8118 2.57287 14.2438 1.53486 12.3476C0.137905 9.78986 -0.211333 7.11453 0.719967 4.32161C1.16137 2.99375 1.88409 1.83248 3.05307 1.0338C4.88657 -0.215667 6.85103 -0.284265 8.84944 0.568312C10.3677 1.21509 11.5075 2.34206 12.4388 3.68953C12.4825 3.74833 12.5261 3.80712 12.5843 3.90022Z"
              fill="#C9CBE2"
            />
          </svg>
        </div>
      </CardHead>

      <CardComp>
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.8853 18.8278H39.375V18.75H22.5V26.25H33.0966C31.5506 30.6159 27.3966 33.75 22.5 33.75C16.2872 33.75 11.25 28.7128 11.25 22.5C11.25 16.2872 16.2872 11.25 22.5 11.25C25.3678 11.25 27.9769 12.3319 29.9634 14.0991L35.2669 8.79562C31.9181 5.67469 27.4387 3.75 22.5 3.75C12.1453 3.75 3.75 12.1453 3.75 22.5C3.75 32.8547 12.1453 41.25 22.5 41.25C32.8547 41.25 41.25 32.8547 41.25 22.5C41.25 21.2428 41.1206 20.0156 40.8853 18.8278Z"
            fill="#FFC107"
          />
          <path
            d="M5.91211 13.7728L12.0724 18.2906C13.7393 14.1638 17.7762 11.25 22.5002 11.25C25.368 11.25 27.9771 12.3319 29.9637 14.0991L35.2671 8.79563C31.9184 5.67469 27.439 3.75 22.5002 3.75C15.2984 3.75 9.05273 7.81594 5.91211 13.7728Z"
            fill="#FF3D00"
          />
          <path
            d="M22.5003 41.2502C27.3434 41.2502 31.744 39.3967 35.0712 36.3827L29.2681 31.472C27.3224 32.9518 24.9448 33.7521 22.5003 33.7502C17.6234 33.7502 13.4825 30.6405 11.9225 26.3008L5.80811 31.0117C8.91123 37.0839 15.2131 41.2502 22.5003 41.2502Z"
            fill="#4CAF50"
          />
          <path
            d="M40.8853 18.8278H39.375V18.75H22.5V26.25H33.0966C32.3571 28.3279 31.025 30.1436 29.265 31.4728L29.2678 31.4709L35.0709 36.3816C34.6603 36.7547 41.25 31.875 41.25 22.5C41.25 21.2428 41.1206 20.0156 40.8853 18.8278Z"
            fill="#1976D2"
          />
        </svg>

        <Heading>{company}</Heading>
        <Id>HB4321</Id>
        <SubHeading>{title}</SubHeading>

        <ul>
          <li>30 days ago</li>
          <li>{applicantsCount} Applicants</li>
        </ul>
      </CardComp>

      <CardDetails>
        <Wrap>
          <DetailsEle>
            <img src="/internship/card/stipend.png" alt="" />

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

        <Link href={`/internship/detail/${id}`}>
          <button
            style={{ display: "flex", alignItems: "center", gap: ".4rem" }}
          >
            View Details
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 12.7231L7 7.00007L0.999999 1.27699"
                stroke="#F26A7E"
                strokeWidth="1.90769"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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

const Wrapper = styled(motion.div)`
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
