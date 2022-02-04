import React, { useRef } from "react";
import styled from "styled-components";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Container } from "../common/styles/Container.styled";
import Header from "../common/components/Header";

const FeaturedVideos = () => {
  const skills = ["React"];
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Container>
      <Header title="Featured Videos" prevRef={prevRef} nextRef={nextRef} />

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
          <Card>
            <CardHead>
              <div>
                <Img src="/wfhome.svg" style={{ marginRight: "5px" }} />

                <Type>Work from home</Type>
              </div>
              <div>
                <Img
                  src="/share.svg"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
                <Img
                  src="/whatsapp.svg"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
                <Img
                  src="/heart.svg"
                  fill="#F26A7E"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
              </div>
            </CardHead>

            <CardComp>
              <Img src="/company-logo.svg" width="45px" height="45px" />

              <Heading>Skilzen</Heading>
              <Id>HB4321</Id>
              <SubHeading>Frontend Developer</SubHeading>

              <p>30 days ago</p>
            </CardComp>

            <CardDetails>
              <Wrap>
                <DetailsEle>
                  <Img src="/stipend.svg" width="12px" height="12px" />

                  <p>4000 - 8000 INR</p>
                </DetailsEle>
                <DetailsEle>
                  <Img src="/calendar.svg" width="12px" height="12px" />

                  <p>2 months</p>
                </DetailsEle>
              </Wrap>

              <DetailsEle>
                <Img src="/calendar.svg" width="12px" height="12px" />

                <p>10/09/21</p>
              </DetailsEle>
            </CardDetails>

            <CardSkills>
              {skills.map((skill, index) => {
                return <p key={index}>{skill}</p>;
              })}
            </CardSkills>

            <CardButtons>
              <Link href="/">
                <button>Apply Now</button>
              </Link>

              <Link href="/">
                <button>
                  View Details
                  <Img src="/right-caret.svg" style={{ margin: "0 0 0 8px" }} />
                </button>
              </Link>
            </CardButtons>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <CardHead>
              <div>
                <Img src="/wfhome.svg" style={{ marginRight: "5px" }} />

                <Type>Work from home</Type>
              </div>
              <div>
                <Img
                  src="/share.svg"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
                <Img
                  src="/whatsapp.svg"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
                <Img
                  src="/heart.svg"
                  fill="#F26A7E"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
              </div>
            </CardHead>

            <CardComp>
              <Img src="/company-logo.svg" width="45px" height="45px" />

              <Heading>Skilzen</Heading>
              <Id>HB4321</Id>

              <SubHeading>Backend Developer</SubHeading>

              <p>20 applicants</p>
            </CardComp>

            <CardDetails>
              <Wrap>
                <DetailsEle>
                  <Img src="/stipend.svg" width="12px" height="12px" />
                  <p>4000 - 8000 INR</p>
                </DetailsEle>
                <DetailsEle>
                  <Img src="/calendar.svg" width="12px" height="12px" />
                  <p>2 months</p>
                </DetailsEle>
              </Wrap>

              <DetailsEle>
                <Img src="/calendar.svg" width="12px" height="12px" />

                <p>10/09/21</p>
              </DetailsEle>
            </CardDetails>

            <CardSkills>
              {skills.map((skill, index) => {
                return <p key={index}>{skill}</p>;
              })}
            </CardSkills>

            <CardButtons>
              <Link href="/">
                <button>Apply Now</button>
              </Link>

              <Link href="/">
                <button>
                  View Details
                  <Img src="/right-caret.svg" style={{ margin: "0 0 0 8px" }} />
                </button>
              </Link>
            </CardButtons>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <CardHead>
              <div>
                <Img src="/wfhome.svg" style={{ marginRight: "5px" }} />

                <Type>Work from home</Type>
              </div>
              <div>
                <Img
                  src="/share.svg"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
                <Img
                  src="/whatsapp.svg"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
                <Img
                  src="/heart.svg"
                  fill="#F26A7E"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
              </div>
            </CardHead>

            <CardComp>
              <Img src="/company-logo.svg" width="45px" height="45px" />

              <Heading>Skilzen</Heading>
              <Id>HB4321</Id>

              <SubHeading>Frontend Developer</SubHeading>

              <p>20 applicants</p>
            </CardComp>

            <CardDetails>
              <Wrap>
                <DetailsEle>
                  <Img src="/stipend.svg" width="12px" height="12px" />
                  <p>4000 - 8000 INR</p>
                </DetailsEle>
                <DetailsEle>
                  <Img src="/calendar.svg" width="12px" height="12px" />

                  <p>2 months</p>
                </DetailsEle>
              </Wrap>

              <DetailsEle>
                <Img src="/calendar.svg" width="12px" height="12px" />

                <p>20/09/21</p>
              </DetailsEle>
            </CardDetails>

            <CardSkills>
              {skills.map((skill, index) => {
                return <p key={index}>{skill}</p>;
              })}
            </CardSkills>

            <CardButtons>
              <Link href="/">
                <button>Apply Now</button>
              </Link>

              <Link href="/">
                <button>
                  View Details
                  <Img src="/right-caret.svg" style={{ margin: "0 0 0 8px" }} />
                </button>
              </Link>
            </CardButtons>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <CardHead>
              <div>
                <Img src="/wfhome.svg" style={{ marginRight: "5px" }} />

                <Type>Work from home</Type>
              </div>
              <div>
                <Img
                  src="/share.svg"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
                <Img
                  src="/whatsapp.svg"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
                <Img
                  src="/heart.svg"
                  fill="#F26A7E"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
              </div>
            </CardHead>

            <CardComp>
              <Img src="/company-logo.svg" width="45px" height="45px" />

              <Heading>Skilzen</Heading>
              <Id>HB4321</Id>

              <SubHeading>Backend Developer</SubHeading>

              <p>20 applicants</p>
            </CardComp>

            <CardDetails>
              <Wrap>
                <DetailsEle>
                  <Img src="/stipend.svg" width="12px" height="12px" />
                  <p>4000 - 8000 INR</p>
                </DetailsEle>
                <DetailsEle>
                  <Img src="/calendar.svg" width="12px" height="12px" />

                  <p>2 months</p>
                </DetailsEle>
              </Wrap>

              <DetailsEle>
                <Img src="/calendar.svg" width="12px" height="12px" />

                <p>10/09/21</p>
              </DetailsEle>
            </CardDetails>

            <CardSkills>
              {skills.map((skill, index) => {
                return <p key={index}>{skill}</p>;
              })}
            </CardSkills>

            <CardButtons>
              <Link href="/">
                <button>Apply Now</button>
              </Link>

              <Link href="/">
                <button>
                  View Details
                  <Img src="/right-caret.svg" style={{ margin: "0 0 0 8px" }} />
                </button>
              </Link>
            </CardButtons>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>
            <CardHead>
              <div>
                <Img src="/wfhome.svg" style={{ marginRight: "5px" }} />

                <Type>Work from home</Type>
              </div>
              <div>
                <Img
                  src="/share.svg"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
                <Img
                  src="/whatsapp.svg"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
                <Img
                  src="/heart.svg"
                  fill="#F26A7E"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
              </div>
            </CardHead>

            <CardComp>
              <Img src="/company-logo.svg" width="45px" height="45px" />

              <Heading>Skilzen</Heading>
              <Id>HB4321</Id>

              <SubHeading>Backend Developer</SubHeading>

              <p>20 applicants</p>
            </CardComp>

            <CardDetails>
              <Wrap>
                <DetailsEle>
                  <Img src="/stipend.svg" width="12px" height="12px" />
                  <p>4000 - 8000 INR</p>
                </DetailsEle>
                <DetailsEle>
                  <Img src="/calendar.svg" width="12px" height="12px" />

                  <p>2 months</p>
                </DetailsEle>
              </Wrap>

              <DetailsEle>
                <Img src="/calendar.svg" width="12px" height="12px" />

                <p>10/09/21</p>
              </DetailsEle>
            </CardDetails>

            <CardSkills>
              {skills.map((skill, index) => {
                return <p key={index}>{skill}</p>;
              })}
            </CardSkills>

            <CardButtons>
              <Link href="/">
                <button>Apply Now</button>
              </Link>

              <Link href="/">
                <button>
                  View Details
                  <Img src="/right-caret.svg" style={{ margin: "0 0 0 8px" }} />
                </button>
              </Link>
            </CardButtons>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>
            <CardHead>
              <div>
                <Img src="/wfhome.svg" style={{ marginRight: "5px" }} />

                <Type>Work from home</Type>
              </div>
              <div>
                <Img
                  src="/share.svg"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
                <Img
                  src="/whatsapp.svg"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
                <Img
                  src="/heart.svg"
                  fill="#F26A7E"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
              </div>
            </CardHead>

            <CardComp>
              <Img src="/company-logo.svg" width="45px" height="45px" />

              <Heading>Skilzen</Heading>
              <Id>HB4321</Id>

              <SubHeading>Backend Developer</SubHeading>

              <p>20 applicants</p>
            </CardComp>

            <CardDetails>
              <Wrap>
                <DetailsEle>
                  <Img src="/stipend.svg" width="12px" height="12px" />
                  <p>4000 - 8000 INR</p>
                </DetailsEle>
                <DetailsEle>
                  <Img src="/calendar.svg" width="12px" height="12px" />

                  <p>2 months</p>
                </DetailsEle>
              </Wrap>

              <DetailsEle>
                <Img src="/calendar.svg" width="12px" height="12px" />

                <p>10/09/21</p>
              </DetailsEle>
            </CardDetails>

            <CardSkills>
              {skills.map((skill, index) => {
                return <p key={index}>{skill}</p>;
              })}
            </CardSkills>

            <CardButtons>
              <Link href="/">
                <button>Apply Now</button>
              </Link>

              <Link href="/">
                <button>
                  View Details
                  <Img src="/right-caret.svg" style={{ margin: "0 0 0 8px" }} />
                </button>
              </Link>
            </CardButtons>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>
            <CardHead>
              <div>
                <Img src="/wfhome.svg" style={{ marginRight: "5px" }} />

                <Type>Work from home</Type>
              </div>
              <div>
                <Img
                  src="/share.svg"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
                <Img
                  src="/whatsapp.svg"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
                <Img
                  src="/heart.svg"
                  fill="#F26A7E"
                  width="24px"
                  height="24px"
                  style={{ margin: "0 8px" }}
                />
              </div>
            </CardHead>

            <CardComp>
              <Img src="/company-logo.svg" width="45px" height="45px" />

              <Heading>Skilzen</Heading>
              <Id>HB4321</Id>

              <SubHeading>Backend Developer</SubHeading>

              <p>20 applicants</p>
            </CardComp>

            <CardDetails>
              <Wrap>
                <DetailsEle>
                  <Img src="/stipend.svg" width="12px" height="12px" />
                  <p>4000 - 8000 INR</p>
                </DetailsEle>
                <DetailsEle>
                  <Img src="/calendar.svg" width="12px" height="12px" />

                  <p>2 months</p>
                </DetailsEle>
              </Wrap>

              <DetailsEle>
                <Img src="/calendar.svg" width="12px" height="12px" />

                <p>10/09/21</p>
              </DetailsEle>
            </CardDetails>

            <CardSkills>
              {skills.map((skill, index) => {
                return <p key={index}>{skill}</p>;
              })}
            </CardSkills>

            <CardButtons>
              <Link href="/">
                <button>Apply Now</button>
              </Link>

              <Link href="/">
                <button>
                  View Details
                  <Img src="/right-caret.svg" style={{ margin: "0 0 0 8px" }} />
                </button>
              </Link>
            </CardButtons>
          </Card>
        </SwiperSlide>
      </StyledSwiper>
    </Container>
  );
};

export default FeaturedVideos;

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

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  user-select: none;
  @media (max-width: 800px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const Bottom = styled.div`
  user-select: none;
`;

const Left = styled.div`
  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: clamp(2rem, 1.5rem + 2.2222vw, 3.5rem);
    color: #404366;
  }
`;

const Right = styled.div`
  display: flex;
  gap: 0.5rem;
  svg {
    cursor: pointer;
    &:active {
      transform: scale(0.9);
    }
  }
  @media (max-width: 800px) {
    display: none;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: #18191f;
    margin-bottom: 4%;
  }
  h5 {
    text-decoration: underline;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #18191f;
  }
`;

const Img = styled.img``;

const CardButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  button:nth-child(1) {
    background: #ffffff;
    border: 1px solid #f26a7e;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 8px 24px;
    cursor: pointer;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #404366;
  }

  button:nth-child(1):hover {
    background: #f26a7e;
    color: #ffffff;
  }

  button:nth-child(2) {
    background: #ffffff;
    cursor: pointer;
    border: none;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #a3a6c3;
    display: flex;
    align-items: center;
  }
`;

const CardSkills = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #404366;
    margin: 8px;
  }
`;

const DetailsEle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #404366;
    margin: 0 12px;
  }
`;

const Wrap = styled.div`
  display: flex;
`;

const CardDetails = styled.div`
  margin: 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const Id = styled.span`
  color: #a3a6c3;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
`;

const Heading = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #404366;
  margin-bottom: 0;
  margin-top: 5px;
`;

const SubHeading = styled.h3`
  display: flex;
  align-items: center;
  color: #404366;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  margin-bottom: 5px;
  margin-top: 10px;
`;

const CardComp = styled.div`
  margin-bottom: 10px;

  p {
    ${"" /* margin-top: 4px; */}
    font-style: normal;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    color: #a3a6c3;
  }
`;

const Type = styled.p``;

const Card = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
  padding-top: 1rem;
  border: 1px solid #a3a6c3;
  border-radius: 10px;
  background: #ffffff;
`;

const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #404366;
  }

  div {
    display: flex;
    margin-bottom: 8px;
  }
`;
