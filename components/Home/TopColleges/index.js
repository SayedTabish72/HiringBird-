import React, { useRef } from "react";
import styled from "styled-components";
import Header from "../common/components/Header";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function TopColleges() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Container>
      <SmallContainer>
        <OneRow>
          <Header title="Top Colleges" prevRef={prevRef} nextRef={nextRef} />
          <StyledSwiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1522: {
                slidesPerView: 6,
              },
              1024: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 4,
              },
              640: {
                slidesPerView: 3,
              },

              377: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <img src="/home/topColleges/1.svg" alt="college" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/home/topColleges/2.svg" alt="college" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/home/topColleges/3.svg" alt="college" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/home/topColleges/4.svg" alt="college" />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <img src="/home/topColleges/5.svg" alt="college" />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <img src="/home/topColleges/6.svg" alt="college" />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <img src="/home/topColleges/7.svg" alt="college" />
            </SwiperSlide>
          </StyledSwiper>
        </OneRow>
        <TwoRow>
          <Text1>Our Numbers</Text1>
          <InfoDiv>
            <Info>
              <LineContainer>
                <Line src="/home/topColleges/line.svg" alt="line" />
              </LineContainer>
              <TextContainer>
                <LargeText>40+</LargeText>
                <SmallText>Active Students</SmallText>
              </TextContainer>
            </Info>
            <Info>
              <LineContainer>
                <Line src="/home/topColleges/line.svg" alt="line" />
              </LineContainer>
              <TextContainer>
                <LargeText>540+</LargeText>
                <SmallText>Intern Hired</SmallText>
              </TextContainer>
            </Info>
            <Info>
              <LineContainer>
                <Line src="/home/topColleges/line.svg" alt="line" />
              </LineContainer>
              <TextContainer>
                <LargeText>100+</LargeText>
                <SmallText>Colleges Collaboration</SmallText>
              </TextContainer>
            </Info>
            <Info>
              <LineContainer>
                <Line src="/home/topColleges/line.svg" alt="line" />
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

const OneRow = styled.div`
  h1 {
    color: rgba(242, 106, 126, 1);
  }
`;

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
var header = styled.h2`
  color: rgba(242, 106, 126, 1);
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

const StyledSwiper = styled(Swiper)`
  /* pagination */
  .swiper-slide {
    padding-bottom: 3rem;
    display: grid;
    align-items: center;
    justify-items: center;
    img {
      max-width: 100%;
    }
  }
  .swiper-pagination {
  }
  .swiper-pagination-bullet {
  }
  .swiper-pagination-bullet-active {
    background: #f26a7e;
  }
`;
