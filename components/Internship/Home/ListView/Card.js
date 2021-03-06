import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@/common/styles/OutlineBtn.styled";

function Card({ id, active, svg, title, skills }) {
  return (
    <Wrapper active={active === id}>
      <div style={{ alignSelf: "end", display: "flex", gap: ".8rem" }}>
        <svg
          width="21"
          height="23"
          viewBox="0 0 21 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3576 14.7949C15.7823 14.798 15.2151 14.939 14.6977 15.2074C14.1803 15.4758 13.7259 15.8648 13.3681 16.3457L7.75048 12.596C7.95522 11.8905 7.95522 11.1353 7.75048 10.4298L13.3681 6.68012C13.9383 7.43393 14.74 7.94795 15.6311 8.13111C16.5223 8.31427 17.4454 8.15476 18.2369 7.68083C19.0285 7.2069 19.6373 6.44914 19.9557 5.54179C20.2741 4.63443 20.2814 3.63605 19.9763 2.7235C19.6713 1.81094 19.0736 1.04312 18.2891 0.556045C17.5045 0.0689678 16.5839 -0.105924 15.6902 0.0623505C14.7965 0.230625 13.9874 0.731204 13.4062 1.47541C12.8251 2.21962 12.5094 3.15943 12.5151 4.12834C12.5187 4.49526 12.5705 4.85982 12.6688 5.21141L7.05116 8.96113C6.55521 8.29453 5.87732 7.80918 5.11146 7.57233C4.34559 7.33549 3.52968 7.3589 2.77683 7.6393C2.02398 7.91971 1.37148 8.44323 0.909768 9.13729C0.448058 9.83136 0.200012 10.6616 0.200012 11.5129C0.200012 12.3642 0.448058 13.1945 0.909768 13.8885C1.37148 14.5826 2.02398 15.1061 2.77683 15.3865C3.52968 15.6669 4.34559 15.6903 5.11146 15.4535C5.87732 15.2166 6.55521 14.7313 7.05116 14.0647L12.6688 17.8144C12.5705 18.166 12.5187 18.5306 12.5151 18.8975C12.5151 19.7089 12.7405 20.5021 13.1627 21.1767C13.5849 21.8514 14.185 22.3772 14.8871 22.6877C15.5892 22.9982 16.3618 23.0795 17.1072 22.9212C17.8525 22.7629 18.5372 22.3721 19.0746 21.7984C19.612 21.2246 19.9779 20.4936 20.1262 19.6978C20.2744 18.902 20.1983 18.0771 19.9075 17.3275C19.6167 16.5779 19.1242 15.9371 18.4923 15.4863C17.8604 15.0355 17.1175 14.7949 16.3576 14.7949ZM16.3576 1.66682C16.8135 1.66682 17.2593 1.81119 17.6384 2.08166C18.0175 2.35214 18.313 2.73658 18.4875 3.18636C18.662 3.63614 18.7077 4.13107 18.6187 4.60856C18.5298 5.08605 18.3102 5.52465 17.9878 5.8689C17.6653 6.21315 17.2546 6.44759 16.8073 6.54257C16.3601 6.63754 15.8966 6.5888 15.4753 6.40249C15.054 6.21618 14.694 5.90068 14.4406 5.49589C14.1873 5.09109 14.0521 4.61519 14.0521 4.12834C14.0521 3.47551 14.295 2.84941 14.7274 2.38778C15.1597 1.92616 15.7461 1.66682 16.3576 1.66682ZM4.06174 13.9744C3.60576 13.9744 3.16002 13.8301 2.78089 13.5596C2.40176 13.2891 2.10626 12.9047 1.93176 12.4549C1.75727 12.0051 1.71161 11.5102 1.80057 11.0327C1.88953 10.5552 2.1091 10.1166 2.43152 9.77235C2.75395 9.4281 3.16475 9.19366 3.61196 9.09868C4.05918 9.0037 4.52273 9.05245 4.944 9.23876C5.36527 9.42506 5.72533 9.74056 5.97866 10.1454C6.23199 10.5502 6.3672 11.0261 6.3672 11.5129C6.3672 12.1657 6.12431 12.7918 5.69195 13.2535C5.25959 13.7151 4.67318 13.9744 4.06174 13.9744ZM16.3576 21.359C15.9016 21.359 15.4558 21.2146 15.0767 20.9441C14.6976 20.6737 14.4021 20.2892 14.2276 19.8394C14.0531 19.3897 14.0074 18.8947 14.0964 18.4172C14.1854 17.9398 14.4049 17.5012 14.7274 17.1569C15.0498 16.8127 15.4606 16.5782 15.9078 16.4832C16.355 16.3883 16.8186 16.437 17.2398 16.6233C17.6611 16.8096 18.0212 17.1251 18.2745 17.5299C18.5278 17.9347 18.663 18.4106 18.663 18.8975C18.663 19.5503 18.4201 20.1764 17.9878 20.638C17.5554 21.0996 16.969 21.359 16.3576 21.359Z"
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
            d="M16.9776 13.1149L16.9689 13.1837C14.8616 12.179 14.6411 12.0452 14.369 12.4357C14.1802 12.7061 13.6301 13.3193 13.4643 13.5008C13.2966 13.6796 13.1298 13.6933 12.8452 13.5696C12.5577 13.4321 11.6348 13.1433 10.5423 12.2083C9.69135 11.4796 9.12018 10.5859 8.95151 10.3109C8.67072 9.84706 9.25818 9.78106 9.79293 8.81308C9.88876 8.62058 9.83989 8.46933 9.76897 8.33275C9.6971 8.19525 9.12497 6.84778 8.88539 6.31062C8.65539 5.7753 8.41868 5.84313 8.24139 5.84313C7.68939 5.7973 7.28593 5.80463 6.93039 6.15846C5.38364 7.7846 5.77368 9.46206 7.09714 11.2459C9.69805 14.5018 11.0838 15.1013 13.6176 15.9336C14.3019 16.1417 14.9258 16.1124 15.4193 16.0445C15.9694 15.9611 17.1127 15.3836 17.3513 14.7374C17.5957 14.0911 17.5957 13.5549 17.5238 13.4312C17.4529 13.3074 17.2651 13.2387 16.9776 13.1149Z"
            fill="#7AD192"
          />
          <path
            d="M19.865 3.16192C12.4964 -3.65154 0.301596 1.29012 0.296804 10.9021C0.296804 12.8234 0.822929 14.697 1.82535 16.3516L0.200012 22L6.27105 20.4857C13.8467 24.3998 23.1962 19.2024 23.2 10.9076C23.2 7.99634 22.0117 5.25647 19.8506 3.19767L19.865 3.16192ZM21.2853 10.8774C21.2795 17.8742 13.2496 22.2438 6.89876 18.6726L6.55376 18.4764L2.96001 19.3701L3.92314 16.0289L3.6941 15.6852C-0.258071 9.66739 4.28251 1.80253 11.769 1.80253C14.3124 1.80253 16.6996 2.75126 18.4975 4.46998C20.2943 6.17404 21.2853 8.45741 21.2853 10.8774Z"
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
            d="M12.5842 3.90022C12.8364 3.56213 13.0547 3.24364 13.302 2.94475C14.3207 1.71978 15.5236 0.749607 17.0612 0.289019C19.6174 -0.47046 22.5423 0.27432 24.0314 3.31224C25.3168 5.93367 25.2877 8.61879 24.1527 11.2941C23.3911 13.0826 22.2367 14.6015 20.8931 15.9784C18.5164 18.4185 15.7807 20.3785 12.7976 21.9856C12.6424 22.0689 12.5211 22.064 12.3707 21.9856C9.93093 20.6676 7.65118 19.1143 5.58971 17.2475C4.00844 15.8118 2.57268 14.2438 1.53467 12.3476C0.137722 9.78986 -0.211516 7.11453 0.719784 4.32161C1.16118 2.99375 1.88391 1.83248 3.05289 1.0338C4.88638 -0.215667 6.85084 -0.284265 8.84926 0.568312C10.3675 1.21509 11.5073 2.34206 12.4386 3.68953C12.4823 3.74833 12.526 3.80712 12.5842 3.90022Z"
            fill="#C9CBE2"
          />
        </svg>
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <svg
          width="46"
          height="48"
          viewBox="0 0 46 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.8853 21.8278H40.375V21.75H23.5V29.25H34.0966C32.5506 33.6159 28.3966 36.75 23.5 36.75C17.2872 36.75 12.25 31.7128 12.25 25.5C12.25 19.2872 17.2872 14.25 23.5 14.25C26.3678 14.25 28.9769 15.3319 30.9634 17.0991L36.2669 11.7956C32.9181 8.67469 28.4387 6.75 23.5 6.75C13.1453 6.75 4.75 15.1453 4.75 25.5C4.75 35.8547 13.1453 44.25 23.5 44.25C33.8547 44.25 42.25 35.8547 42.25 25.5C42.25 24.2428 42.1206 23.0156 41.8853 21.8278Z"
            fill="#FFC107"
          />
          <path
            d="M6.91187 16.7728L13.0722 21.2906C14.7391 17.1638 18.7759 14.25 23.5 14.25C26.3678 14.25 28.9769 15.3319 30.9634 17.0991L36.2669 11.7956C32.9181 8.67469 28.4387 6.75 23.5 6.75C16.2981 6.75 10.0525 10.8159 6.91187 16.7728Z"
            fill="#FF3D00"
          />
          <path
            d="M23.5 44.25C28.3432 44.25 32.7438 42.3966 36.071 39.3825L30.2679 34.4719C28.3221 35.9516 25.9445 36.752 23.5 36.75C18.6232 36.75 14.4822 33.6403 12.9222 29.3007L6.80786 34.0116C9.91099 40.0838 16.2129 44.25 23.5 44.25Z"
            fill="#4CAF50"
          />
          <path
            d="M41.8853 21.8278H40.375V21.75H23.5V29.25H34.0966C33.3571 31.3279 32.025 33.1436 30.265 34.4728L30.2678 34.4709L36.0709 39.3816C35.6603 39.7547 42.25 34.875 42.25 25.5C42.25 24.2428 42.1206 23.0156 41.8853 21.8278Z"
            fill="#1976D2"
          />
        </svg>

        <Content>
          <h1>{title}</h1>
          <h3>
            Skilzen{" "}
            <span style={{ fontSize: "12px", color: "#EC1F28" }}>HB4321</span>{" "}
          </h3>

          <ul>
            <li>
              <img src="/internship/card/stipend.png" alt="" />
              <p>7,500 - 10,000 INR</p>
            </li>

            <li>
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

              <p>2 Months</p>
            </li>

            <li>
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

              <p>2 June 2021</p>
            </li>
          </ul>

          <Skills>
            {skills.map((s, i) => {
              return (
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "12px",
                    color: "#404366",
                  }}
                  key={i}
                >
                  {s}
                </p>
              );
            })}
          </Skills>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: ".5rem" }}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.649839 7.79623H1.94986V12.3495C1.94986 12.522 2.01834 12.6875 2.14024 12.8095C2.26214 12.9315 2.42747 13 2.59987 13H10.4C10.5724 13 10.7377 12.9315 10.8596 12.8095C10.9815 12.6875 11.05 12.522 11.05 12.3495V7.79623H12.35C12.4756 7.79634 12.5986 7.75995 12.7039 7.69147C12.8093 7.623 12.8925 7.52539 12.9435 7.4105C12.9948 7.29566 13.0117 7.16838 12.9921 7.04413C12.9724 6.91987 12.9172 6.804 12.833 6.71059L6.98288 0.205874C6.73652 -0.0686247 6.26332 -0.0686247 6.01696 0.205874L0.166882 6.71059C0.0828302 6.80404 0.0276423 6.91986 0.00799635 7.04404C-0.0116496 7.16822 0.00508843 7.29544 0.0561851 7.4103C0.107282 7.52516 0.190547 7.62274 0.295906 7.69123C0.401264 7.75973 0.524201 7.79619 0.649839 7.79623ZM4.32434 6.26176C4.59489 5.99446 4.95978 5.84458 5.33998 5.84458C5.72017 5.84458 6.08506 5.99446 6.35562 6.26176L6.50122 6.40487L6.64617 6.26176C6.91684 5.99442 7.28183 5.84453 7.66214 5.84453C8.04244 5.84453 8.40743 5.99442 8.6781 6.26176C8.81238 6.39104 8.9192 6.5461 8.99217 6.71767C9.06513 6.88924 9.10274 7.07378 9.10274 7.26024C9.10274 7.4467 9.06513 7.63124 8.99217 7.80281C8.9192 7.97438 8.81238 8.12944 8.6781 8.25871L6.50122 10.3981L4.32434 8.25871C4.19006 8.12944 4.08324 7.97438 4.01027 7.80281C3.93731 7.63124 3.8997 7.4467 3.8997 7.26024C3.8997 7.07378 3.93731 6.88924 4.01027 6.71767C4.08324 6.5461 4.19006 6.39104 4.32434 6.26176Z"
                  fill="#F26A7E"
                />
              </svg>

              <p
                style={{
                  fontWeight: "500",
                  fontSize: "13px",
                  color: "#404366",
                }}
              >
                Work from home
              </p>
            </div>

            <ul
              style={{
                fontSize: "13px",
                color: "#C9CBE2",
              }}
            >
              <li>20 days ago</li>
              <li>150 Applicants</li>
            </ul>
          </div>
        </Content>
      </div>
    </Wrapper>
  );
}

export default Card;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #c9cbe2;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 69px;
    left: 0rem;
    top: 50%;
    background: #f26a7e;
    border-radius: 10px;
    display: ${(props) => (props.active ? "block" : "none")};
  }

  &:active {
    transform: scale(0.99);
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.6rem;
  h1 {
    font-weight: 500;
    font-size: 20px;
    color: #404366;
  }
  h3 {
    font-weight: 500;
    font-size: 18px;
    color: #404366;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      p {
        font-weight: 500;
        font-size: 13px;
        color: #404366;
      }
    }
  }
`;

const Skills = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  p {
    font-size: 14px;
    color: #c9cbe2;
  }
`;
