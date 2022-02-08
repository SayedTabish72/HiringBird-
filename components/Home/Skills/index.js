import styled from "styled-components";
import Header from "../common/components/Header";
import { Container } from "../common/styles/Container.styled";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import Card from "./Card";

function Skills() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Container>
      <Header title="Skills" prevRef={prevRef} nextRef={nextRef} />

      <StyledSwiper
        modules={[Navigation, Pagination]}
        spaceBetween={290}
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
          <Card title="Full-Stack" image="skills" /><br/>
          <Card title="Data Engineer" image="skills" />

        </SwiperSlide>
        <SwiperSlide>
          <Card title="Back-end" image="skills" /><br/>
          <Card title="Product Analyst" image="skills" />

        </SwiperSlide>
        <SwiperSlide>
          <Card title="Front-end" image="skills" /><br/>
          <Card title="Bussiness Analyst" image="skills" />

        </SwiperSlide>
        <SwiperSlide>
          <Card title="DevOps" image="skills" /><br/>
          <Card title="Mobile" image="skills" />
        </SwiperSlide>{" "}
        <SwiperSlide>
        <Card title="Front-end" image="skills" /><br/>
        <Card title="Data Engineer" image="skills" />
        </SwiperSlide>
        <SwiperSlide/>
        </StyledSwiper>
    </Container>
  );
}

export default Skills;

const StyledSwiper = styled(Swiper)`
  /* pagination */
  .swiper-slide {
    padding-bottom: 4rem;
    
  }
  .swiper-pagination {
  }
  .swiper-pagination-bullet {
  }
  .swiper-pagination-bullet-active {
    background: #f26a7e;
  }
`;
const SwiperSlid = styled(SwiperSlide)`

`
