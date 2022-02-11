import styled from "styled-components";
import Header from "../common/components/Header";
import { Container } from "../common/styles/Container.styled";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import Card from "./Card";

function Locations() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Container>
      <Header title="Locations" prevRef={prevRef} nextRef={nextRef} />

      <StyledSwiper
        modules={[Navigation, Pagination]}
        spaceBetween={17}
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
          1275: {
            slidesPerGroup: 4,
            slidesPerView: 6,
          },
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
            slidesPerGroup: 2,
            slidesPerView: 2,
          },
          320: {
            slidesPerGroup: 1,
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <Card title="New Delhi" image="newdelhi" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Mumbai" image="mumbai" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Bangalore" image="bangalore" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card title="Gurgaon" image="gurgaon" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card title="Pune" image="pune" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Noida" image="noida" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card title="Hyderabad" image="hyderabad" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Chennai" image="chennai" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card title="Kolkata" image="kolkata" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Work From Home" image="wfh" />
        </SwiperSlide>{" "}
      </StyledSwiper>
    </Container>
  );
}

export default Locations;

const StyledSwiper = styled(Swiper)`
  margin-bottom: -2rem;
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
