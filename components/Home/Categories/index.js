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
        modules={[Navigation]}
        spaceBetween={10}
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
          <Card title="Quality Assuarance" image="case" />
          <br />
          <Card title="Mobile App" image="phone" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Cloud Archtect" image="cloud" />
          <br />
          <Card title="Web Development" image="web" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Testing & Automation" image="test" />
          <br />
          <Card title=" Front-end Developers" image="layout" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="ML Engineers" image="machine" />
          <br />
          <Card title="Back-end Developer" image="settings" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card title="Product Analysts" image="case" />
          <br />
          <Card title="Data Engineers" image="data" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title=" Data Scientist" image="data" />
          <br />
          <Card title="Java Developer" image="java" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title=" Python Developer" image="python" />
          <br />
          <Card title=" Cloud Engineer" image="cloud" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title=" Full StacK iOS" image="phone" />
          <br />
          <Card title=" Analytics Engineer" image="analysis" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card title=" Infrastructure Engineer " image="layout" />
          <br />
          <Card title="Deep Learning" image="machine" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card title=" DevOps Engineers" image="data" />
          <br />
          <Card title=" AI/ML/Data Engineers" image="machine" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card title=" ML Scientists " image="machine" />
          <br />
          <Card title="  Web Developer " image="web" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title=" Site Reliabiity" image="web" />
          <br />
          <Card title="Tele Sales " image="case" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title=" UI/UX Designers" image="web" />
          <br />
          <Card title="  Full Stack Egineer " image="stack" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title=" Software Developer " image="web" />
          <br />
          <Card title="  Human Resource " image="case" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title=" iOs/Andriod Developer " image="phone" />
          <br />
          <Card title="  IT Engineer " image="web" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title=" UI/UX Designer " image="layout" />
          <br />
          <Card title=" Business Analysts " image="analysis" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title=" PHP Developer " image="web" />
          <br />
          <Card title="  Business Developer" image="case" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title=" Accountant" image="analysis" />

          <br />
          <Card title="  Operations " image="data" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="  Customer Service" image="data" />
          <br />
          <Card title="Embedded Software" image="web" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title=" Digital Marketing " image="case" />

          <br />
          <Card title="  Sales Executive" image="case" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title=" Data Entry" image="web" />
          <br />
          <Card title=" Data Analyst" image="data" />
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

    24
  }
`;
