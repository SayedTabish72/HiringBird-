import styled from "styled-components";
import Header from "../common/components/Header";
import { Container } from "../common/styles/Container.styled";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import Card from "./Card";
import Link from "next/link";

function Skills() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Container>
      <Header title="Skills" prevRef={prevRef} nextRef={nextRef} />

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
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <Card title="React/Node" image="React Native" />
          <br />
          <Card title="Java" image="java" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Django" image="Django" />
          <br />
          <Card title="Scala " image="Scala" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Solutions Engineer" image="API" />
          <br />
          <Card title="GraphQL" image="GraphQL" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="TensorFlow" image="TensorFlow" />
          <br />
          <Card title="MATLAB" image="MATLAB" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="TypeScript" image="TypeScript" />
          <br />
          <Card title="Umbraco" image="Umbraco" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Unity 3D" image="unity3D" />
          <br />
          <Card title="Drupal" image="Drupal" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Apache " image="Apache" />
          <br />
          <Card title="DevOps " image="DevOps" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Kubernetes" image="Kubernetes" />
          <br />
          <Card title="MangoDB" image="Mangodb" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="HTML" image="HTML" />

          <br />
          <Card title="Redux" image="Redux" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="D3" image="d3" />
          <br />
          <Card title="React Native" image="React Native" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Node.js" image="React Native" />
          <br />
          <Card title="C++" image="C++" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Ember.js" image="Ember" />
          <br />
          <Card title="AWS" image="AWS" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Ruby on Rails" image="ruby" />
          <br />
          <Card title="WordPress" image="WordPress" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="API" image="API" />
          <br />
          <Card title="mac OS" image="apple" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="ML/NLP" image="ML" />

          <br />
          <Card title="Python" image="python" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Selenium" image="Selenium" />
          <br />
          <Card title="C/C++" image="C++" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="GCP" image="GCP" />
          <br />
          <Card title="Go lang" image="Go lang" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Elastic search" image="Elastic search" />

          <br />
          <Card title="Flask" image="Flask" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="UI Designers" image="UI Designers" />
          <br />
          <Card title="Andriod" image="Andriod" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Azure" image="Azure" />
          <br />
          <Card title="Haskell" image="Haskell" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Big Data" image="Big" />
          <br />
          <Card title="Ruby" image="ruby" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Grovvy" image="Grovvy" />
          <br />
          <Card title="PHP" image="PHP" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="JSON" image="JSON" />
          <br />
          <Card title="Docker" image="Docker" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Rust" image="Rust" />
          <br />
          <Card title="Chatbot" image="Chatbot" />
        </SwiperSlide>
      </StyledSwiper>
    </Container>
  );
}

export default Skills;

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
const SwiperSlid = styled(SwiperSlide)``;
