import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Button } from "../../common/styles/FilledBtn.styled";
import { Container } from "../common/styles/Container.styled";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";

const HowItWorks = () => {
  const data = [
    {
      id: 1,
      title: "Sign In",
      desc: "Create an account to get started.",
      redirectUrl: "/signin",
    },
    {
      id: 2,
      title: "Search for internships",
      desc: "Look thorugh our carefully handpicked bunch of internships",
      redirectUrl: "/internship",
    },
    {
      id: 3,
      title: "Apply and follow procedure",
      desc: "Now sit back and wait for the call back and follow simple steps",
      redirectUrl: "/internship",
    },
  ];

  return (
    <Container>
      <Top>
        <h1>Get Internship’s directly to What’s app</h1>
        <Button color="#128C7E" padding=".7rem .8rem">
          Link WhatsApp
        </Button>
      </Top>
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
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <Card item={item} />
          </SwiperSlide>
        ))}
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
    margin-top: 1rem;
    height: auto;
  }
  .swiper-pagination {
  }
  .swiper-pagination-bullet {
  }
  .swiper-pagination-bullet-active {
    background: #f26a7e;
  }
`;
