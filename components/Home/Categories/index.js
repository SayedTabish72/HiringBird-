import styled from "styled-components";
import Header from "../common/components/Header";
import { Container } from "../common/styles/Container.styled";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import Card from "./Card";

function Category() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Container>
      <Header title="Category" prevRef={prevRef} nextRef={nextRef} />

      <StyledSwiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
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
            slidesPerView: 4,
          },
          927: {
            slidesPerView: 3,
          },
          324: {
            slidesPerGroup: 2,
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <Card
            title="Data-Engineers"
            image="https://d2mk45aasx86xg.cloudfront.net/Data_Engineer_e64c7fd32c.svg"
          />
          <br />
          <Card
            title="ML Scientists"
            image="https://d2mk45aasx86xg.cloudfront.net/ML_engineers_348bc984d5.svg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Blockchain Engineers"
            image="https://d2mk45aasx86xg.cloudfront.net/Blockchain_developers_380a575c3c.svg"
          />
          <br />
          <Card
            title="Full-Stack Developers"
            image="https://d2mk45aasx86xg.cloudfront.net/Full_Stack_developers_68c054aab9.svg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Android Developers"
            image="https://d2mk45aasx86xg.cloudfront.net/Mobile_developers_c3a673d24b.svg"
          />
          <br />
          <Card
            title="Data Scientists"
            image="https://d2mk45aasx86xg.cloudfront.net/Data_science_ff76d8eb45.svg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Front-end Developers"
            image="https://d2mk45aasx86xg.cloudfront.net/Front_end_developers_b69d047610.svg"
          />
          <br />
          <Card
            title="Cloud Architect"
            image="https://d2mk45aasx86xg.cloudfront.net/cloud_c3dc5bb877.svg"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card
            title="ML Engineers"
            image="https://d2mk45aasx86xg.cloudfront.net/ML_engineers_348bc984d5.svg"
          />
          <br />
          <Card
            title="Product Analyst"
            image="https://d2mk45aasx86xg.cloudfront.net/role_backend_996ce8298a.svg"
          />
        </SwiperSlide>
      </StyledSwiper>
    </Container>
  );
}

export default Category;

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
