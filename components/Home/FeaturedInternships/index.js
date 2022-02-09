import React, { useRef } from "react";
import styled from "styled-components";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../common/components/Header";
import { Container } from "../common/styles/Container.styled";
import Card from "./Card";

function FeaturedInternships() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Container>
      <Header
        title="Featured Internships"
        prevRef={prevRef}
        nextRef={nextRef}
      />

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
            slidesPerView: 4,
          },
          1139: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 2,
          },
          300: {
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
        <SwiperSlide>
          <Card />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </StyledSwiper>
    </Container>
  );
}

export default FeaturedInternships;

const StyledSwiper = styled(Swiper)`
  /* pagination */
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
