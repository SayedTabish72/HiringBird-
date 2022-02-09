import Link from "next/link";
import React, { useRef } from "react";
import styled from "styled-components";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../common/components/Header";
import { Container } from "../common/styles/Container.styled";
import Card from "./Card";

function Industries() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Container>
      <Header title="Industries" prevRef={prevRef} nextRef={nextRef} />
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
            slidesPerGroup: 2,
          },
          320: {
            slidesPerGroup: 1,
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <Card title="Engineering" image={"engineer"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Law" image="law" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Managment" image="level" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card title="Medical" image="heart" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card title="Design" image="design" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Education" image="education" />
        </SwiperSlide>{" "}
      </StyledSwiper>
    </Container>
  );
}

export default Industries;

const StyledSwiper = styled(Swiper)`
  /* pagination */
  margin-bottom: -2rem;
  .swiper-slide {
    padding-bottom: 3rem;
  }
  .swiper-pagination {
  }
  .swiper-pagination-bullet {
  }
  .swiper-pagination-bullet-active {
    background: #f26a7e;
  }
`;
