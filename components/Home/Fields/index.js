import Link from "next/link";
import React, { useRef } from "react";
import styled from "styled-components";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../common/components/Header";
import { Container } from "../common/styles/Container.styled";
import Card from "./Card";

function Fields() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Container>
      <Header title="Fields" prevRef={prevRef} nextRef={nextRef} />
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
            slidesPerGroup: 6,
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
        <SwiperSlide>
          <Card title="Marketing" image="market" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Sales & BD" image="sales" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card title="Finance" image="finance" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Operations" image="operation" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card title="Product" image="product" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Personnel" image="personnel" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card title="Media & Film" image="media" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Automobile" image="automobile" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card title="Trade" image="trade" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Logistics" image="logistics" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card title="Constructions" image="construction" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Tourism" image="tourism" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card title="Manufacturing" image="manufacturing" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card title="BPO/KPO" image="bpo" />
        </SwiperSlide>
      </StyledSwiper>
    </Container>
  );
}

export default Fields;

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
