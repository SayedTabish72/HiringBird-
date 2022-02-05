import React from "react";
import styled from "styled-components";

function TopColleges() {
  return (
    <Container>
      <SmallContainer>
        <OneRow>
          <Text data-testid="heading">Top Colleges</Text>
          <CollegesLogoContainer>
            <Logo src="/c2.svg" alt="college" />
            <Logo src="/c1.svg" alt="college" />
            <Logo src="/c3.svg" alt="college" />
            <Logo src="/c5.svg" alt="college" />
            <Logo src="/c2.svg" alt="college" />
            <Logo src="/c6.svg" alt="college" />
          </CollegesLogoContainer>
        </OneRow>
        <TwoRow>
          <Text1>Our Numbers</Text1>
          <InfoDiv>
            <Info>
              <LineContainer>
                <Line src="/pink-line.svg" alt="line" />
              </LineContainer>
              <TextContainer>
                <LargeText>40+</LargeText>
                <SmallText>Active Students</SmallText>
              </TextContainer>
            </Info>
            <Info>
              <LineContainer>
                <Line src="/pink-line.svg" alt="line" />
              </LineContainer>
              <TextContainer>
                <LargeText>540+</LargeText>
                <SmallText>Intern Hired</SmallText>
              </TextContainer>
            </Info>
            <Info>
              <LineContainer>
                <Line src="/pink-line.svg" alt="line" />
              </LineContainer>
              <TextContainer>
                <LargeText>100+</LargeText>
                <SmallText>Colleges Collaboration</SmallText>
              </TextContainer>
            </Info>
            <Info>
              <LineContainer>
                <Line src="/pink-line.svg" alt="line" />
              </LineContainer>
              <TextContainer>
                <LargeText>300</LargeText>
                <SmallText>Companies</SmallText>
              </TextContainer>
            </Info>
          </InfoDiv>
        </TwoRow>
      </SmallContainer>
    </Container>
  );
}

export default TopColleges;

const Container = styled.div`
  height: auto;
  width: min(90%, 90rem);
  display: flex;
  margin: 30px 0;
  font-family: "Inter", sans-serif;
  margin: auto;
`;

const SmallContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const OneRow = styled.div``;

const TwoRow = styled.div`
  margin: 20px 0;
`;

const Text = styled.h3`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 41px;
  font-feature-settings: "salt" on, "liga" off;
  color: #f26a7e;
`;

const Text1 = styled.h3`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 41px;
  font-feature-settings: "salt" on, "liga" off;
  color: #404366;
`;

const CollegesLogoContainer = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    grid-template-row: auto;
  }
  @media (max-width: 681px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 503px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Logo = styled.img`
  width: 113px;
  height: 113px;
`;

const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin: 30px 0 30px 25px;
  @media (max-width: 880px) {
    flex-wrap: wrap;
    margin-left: 0;
  }
  @media (max-width: 436px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LineContainer = styled.div``;

const Line = styled.img``;

const TextContainer = styled.div`
  flex: 1;
`;

const LargeText = styled.h3`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 30.5455px;
  line-height: 44px;
  font-feature-settings: "salt" on, "liga" off;
  color: #404366;
`;

const SmallText = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 17.4545px;
  line-height: 28px;
  font-feature-settings: "salt" on, "liga" off;
  color: #404366;
`;
