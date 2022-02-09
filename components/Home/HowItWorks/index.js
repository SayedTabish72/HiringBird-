import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Button } from "../../common/styles/FilledBtn.styled";
import { Container } from "../common/styles/Container.styled";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";

const HowItWorks = () => {
  return (
    <Container>
      <Top>
        <h1>Get Internship’s directly to What’s app</h1>
        <Button color="#128C7E" padding=".7rem .8rem">
          Link WhatsApp
        </Button>
      </Top>
      {/* <Bottom>
        <Link href="/signin">
          <Wrap>
            <ImageContainer>
              <img
                data-testid="svg"
                className="vector-image"
                src="/home/howitworks/1.svg"
                alt="universe"
              />

              <div className="backgroundVector">
                <img src="/home/howitworks/1-bg.svg" alt="" />
              </div>
            </ImageContainer>
            <h3>Sign In</h3>
            <p>Create an account to get started</p>
          </Wrap>
        </Link>

        <Wrap>
          <ImageContainer>
            <img
              className="vector-image"
              src="/home/howitworks/2.svg"
              alt="universe"
            />

            <div className="backgroundVector">
              <img src="/home/howitworks/2-bg.svg" alt="" />
            </div>
          </ImageContainer>
          <h3>Search for internships</h3>
          <p>Look thorugh our carefully handpicked bunch of internships</p>
        </Wrap>

        <Wrap>
          <ImageContainer>
            <img
              className="vector-image"
              src="/home/howitworks/3.svg"
              alt="universe"
            />
            <div className="backgroundVector">
              <img src="/home/howitworks/3-bg.svg" alt="" />
            </div>
          </ImageContainer>
          <h3>Apply and follow procedure</h3>
          <p>Now sit back and wait for the call back and follow simple steps</p>
        </Wrap>
      </Bottom> */}{" "}
      <StyledSwiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        slidesPerView={3}
        breakpoints={{
          1022: {
            slidesPerView: 3,
          },
          798: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card />
        </SwiperSlide>{" "}
      </StyledSwiper>
    </Container>
  );
};

export default HowItWorks;

const Top = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
  h1 {
    font-weight: 800;
    font-size: clamp(1.8rem, 1.6083rem + 0.8519vw, 2.375rem);
    color: #404366;
  }

  @media (max-width: 600px) {
    margin-bottom: 1.4rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledSwiper = styled(Swiper)`
  width: min(100%, 60rem);
  .swiper-slide {
    @media (max-width: 1022px) {
      padding-bottom: 2.5rem;
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
