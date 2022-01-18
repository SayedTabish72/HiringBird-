import React from "react";
import { Container } from "./styles/CommonComponents/Container.styled";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

function FeaturedInternships() {
  const skills = ["React"];
  return (
    <Container>
      <Top>
        <Left>
          <h1 data-testid="heading">
            Featured <br />
            Internships
          </h1>
        </Left>
        <Right>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer dolor sit amet, consectetur
            adipiscing elit. Nunc odio in et.
          </p>
          <h5>View all internships</h5>
        </Right>
      </Top>
      <Bottom>
        <Swiper
          spaceBetween={50}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          className="mySwiper"
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },

            768: {
              width: 768,
              slidesPerView: 2,
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
                    <Img
                      src="/right-caret.svg"
                      style={{ margin: "0 0 0 8px" }}
                    />
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
                    <Img
                      src="/right-caret.svg"
                      style={{ margin: "0 0 0 8px" }}
                    />
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
                    <Img
                      src="/right-caret.svg"
                      style={{ margin: "0 0 0 8px" }}
                    />
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
                    <Img
                      src="/right-caret.svg"
                      style={{ margin: "0 0 0 8px" }}
                    />
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
                    <Img
                      src="/right-caret.svg"
                      style={{ margin: "0 0 0 8px" }}
                    />
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
                    <Img
                      src="/right-caret.svg"
                      style={{ margin: "0 0 0 8px" }}
                    />
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
                    <Img
                      src="/right-caret.svg"
                      style={{ margin: "0 0 0 8px" }}
                    />
                  </button>
                </Link>
              </CardButtons>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Bottom>
    </Container>
  );
}

export default FeaturedInternships;

const Top = styled.div`
  display: flex;
  * {
    flex-basis: 100%;
  }
  margin-bottom: 5%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Bottom = styled.div`
  display: flex;
  .swiper-button-next {
    color: #fff;
    background: #f26a7e;
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
  .swiper-button-prev {
    color: #fff;
    background: #f26a7e;
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
`;

const Left = styled.div`
  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 72px;
    color: #404366;
    margin-bottom: 2rem;
    @media (max-width: 600px) {
      font-size: 44px;
    }
  }
`;
const Right = styled.div`
  margin-left: 2rem;
  @media (max-width: 800px) {
    margin-left: 0;
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
