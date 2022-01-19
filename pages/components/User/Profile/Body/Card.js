import React from "react";
import styled from "styled-components";

const Card = ({ svg, title }) => {
  return (
    <Wrapper id="skill">
      <Head>
        <img src={`/user/profile/${svg}.svg`} alt="" />
        <h3>{title}</h3>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8344 1.54314C11.0066 1.37094 11.211 1.23435 11.436 1.14116C11.661 1.04796 11.9021 1 12.1456 1C12.3891 1 12.6303 1.04796 12.8553 1.14116C13.0802 1.23435 13.2847 1.37094 13.4569 1.54314C13.6291 1.71533 13.7657 1.91976 13.8588 2.14474C13.952 2.36973 14 2.61086 14 2.85439C14 3.09791 13.952 3.33904 13.8588 3.56403C13.7657 3.78901 13.6291 3.99344 13.4569 4.16563L4.60593 13.0166L1 14L1.98344 10.3941L10.8344 1.54314Z"
            stroke="#404366"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
          <p>Add</p>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1.49951V15.4995"
              stroke="#C9CBE2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 8.49951H15"
              stroke="#C9CBE2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Head>
      <Wrap>
        <svg
          width="61"
          height="62"
          viewBox="0 0 61 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60.2583 25.0687H57.8418V24.9438H30.8418V36.9763H47.7963C45.3228 43.9807 38.6763 49.0088 30.8418 49.0088C20.9013 49.0088 12.8418 40.9274 12.8418 30.9601C12.8418 20.9927 20.9013 12.9114 30.8418 12.9114C35.4303 12.9114 39.6048 14.647 42.7833 17.4822L51.2688 8.97374C45.9108 3.96674 38.7438 0.878906 30.8418 0.878906C14.2743 0.878906 0.841797 14.3477 0.841797 30.9601C0.841797 47.5724 14.2743 61.0412 30.8418 61.0412C47.4093 61.0412 60.8418 47.5724 60.8418 30.9601C60.8418 28.9431 60.6348 26.9743 60.2583 25.0687Z"
            fill="#FFC107"
          />
          <path
            d="M4.30176 16.9588L14.1583 24.2068C16.8253 17.586 23.2843 12.9114 30.8428 12.9114C35.4313 12.9114 39.6058 14.647 42.7843 17.4822L51.2698 8.97374C45.9118 3.96674 38.7448 0.878906 30.8428 0.878906C19.3198 0.878906 9.32676 7.402 4.30176 16.9588Z"
            fill="#FF3D00"
          />
          <path
            d="M30.8423 61.0394C38.5913 61.0394 45.6323 58.0658 50.9558 53.2303L41.6708 45.352C38.5576 47.726 34.7534 49.01 30.8423 49.0069C23.0393 49.0069 16.4138 44.0179 13.9178 37.0557L4.13477 44.6136C9.09977 54.3553 19.1828 61.0394 30.8423 61.0394Z"
            fill="#4CAF50"
          />
          <path
            d="M60.2583 25.0677H57.8418V24.9429H30.8418V36.9753H47.7963C46.6131 40.3089 44.4818 43.2219 41.6658 45.3544L41.6703 45.3514L50.9553 53.2297C50.2983 53.8283 60.8418 45.9997 60.8418 30.9591C60.8418 28.9422 60.6348 26.9733 60.2583 25.0677Z"
            fill="#1976D2"
          />
        </svg>

        <Content>
          {/* needs to be changed */}
          <p>Graduation</p>
          <h4>Pearl Academy</h4>
          <p>Lorem ipsum dolor sit.</p>
          <p>2018</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </Content>
      </Wrap>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  padding: 1rem;
  border: 2px solid #c9cbe2;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 1rem;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #c9cbe2;
  padding-bottom: 1rem;
  h3 {
    flex: 1;
  }
  img {
    margin-right: 0.8rem;
  }
  svg {
    margin-right: 0.6rem;
  }
`;
const Wrap = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.3rem 0;
`;
const Content = styled.div``;
