import React from "react";
import styled from "styled-components";
import { Img } from "./styles/Search.styled";

export const Container = styled.div`
  margin-inline: auto;
  width: 100%;
  padding-top: 3rem;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  margin-inline: auto;
  width: 95%;
  padding: 1rem 0;
  background: #f2f2f2;
  display: flex;
  @media (max-width: 967px) {
    display: none;
  }
`;
export const MobileContainer = styled.div`
  display: none;
  @media (max-width: 967px) {
    display: flex;
    margin-inline: auto;
    width: 95%;
    padding: 1rem 0;
    background: #f2f2f2;
    justify-content: space-evenly;
  }
  @media (max-width: 530px) {
    justify-content: space-between;
  }
`;
export const Left = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
`;
export const Right = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  align-items: flex-end;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;
export const End = styled.div`
  display: flex;
  margin: 1rem 0;
  @media (max-width: 967px) {
    flex-direction: flex-start;
    flex-wrap: wrap;
  }
`;

export const Heading1 = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  padding-bottom: 1.5rem;

  color: #404366;
`;

export const Span1 = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  padding-bottom: 1rem;

  color: #404366;
`;

export const Span2 = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  margin-right: 1rem;

  color: #404366;
  @media (max-width: 967px) {
    margin-right: 1rem;
  }
`;

export const Top = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

export const Div1 = styled.div``;

function Footer() {
  return (
    <Container>
      <MobileContainer>
        <Inner>
          <Heading1>Company</Heading1>
          <Span1>About Us</Span1>
          <Span1>Contact Us</Span1>
          <Span1>Our Services</Span1>
          <Span1>Blogs</Span1>
          <Span1>Careers</Span1>
          <Span1>FAQS</Span1>
        </Inner>
        <Inner>
          <Heading1>Contact Us</Heading1>
          <Span1
            style={{ display: "flex", alignItems: "center", height: "3rem" }}
          >
            <Img src="phone.svg" />
            <span style={{ textIndent: "1em" }}>+91-9999000999</span>
          </Span1>
          <Span1 style={{ display: "flex" }}>
            <Img src="mail.svg" />
            <span style={{ textIndent: "1em" }}>Hiring.bird@gmail.com</span>
          </Span1>

          <Heading1 style={{ paddingTop: "1rem" }}>Follow Us</Heading1>
          <div style={{ display: "flex" }}>
            <Img src="fb.svg" />
            <Img style={{ paddingLeft: "1rem" }} src="linkedin.svg" />
            <Img style={{ paddingLeft: "1rem" }} src="twitter.svg" />
            <Img style={{ paddingLeft: "1rem" }} src="insta.svg" />
          </div>
          <Img src="footerlogos.png" />
        </Inner>
      </MobileContainer>
      <InnerContainer>
        <Left>
          <Inner>
            <Heading1>Internship by Field</Heading1>
            <Span1>Computer Science/IT</Span1>
            <Span1>Electronics</Span1>
            <Span1>Civil</Span1>
            <Span1>Mechanical</Span1>
            <Span1>Marketing</Span1>
            <Span1>Design</Span1>
            <Span1>Finance</Span1>
            <Span1>Summer Intern</Span1>
          </Inner>
          <Inner>
            <Heading1>Internship Locations</Heading1>
            <Span1>Internship in India</Span1>
            <Span1>Internship in NCR</Span1>
            <Span1>Internship in Mumbai</Span1>
            <Span1>Internship in Hyedrabad</Span1>
            <Span1>Internship in Chennai</Span1>
            <Span1>Internship in Bangaluru</Span1>
            <Span1>Internship in Ahmedabad</Span1>
            <Span1>Internship in Kolkata</Span1>
          </Inner>
          <Inner>
            <Heading1>Company</Heading1>
            <Span1>About Us</Span1>
            <Span1>Contact Us</Span1>
            <Span1>Our Services</Span1>
            <Span1>Blogs</Span1>
            <Span1>Careers</Span1>
            <Span1>FAQS</Span1>
          </Inner>
        </Left>
        <Right>
          <Top>
            <Heading1>Contact Us</Heading1>
            <Span1
              style={{ display: "flex", alignItems: "center", height: "3rem" }}
            >
              <Img src="phone.svg" />
              <span style={{ textIndent: "1em" }}>+91-9999000999</span>
            </Span1>
            <Span1 style={{ display: "flex" }}>
              <Img src="mail.svg" />
              <span style={{ textIndent: "1em" }}>Hiring.bird@gmail.com</span>
            </Span1>

            <Heading1 style={{ paddingTop: "1rem" }}>Follow Us</Heading1>
            <div style={{ display: "flex" }}>
              <Img src="fb.svg" />
              <Img style={{ paddingLeft: "1rem" }} src="linkedin.svg" />
              <Img style={{ paddingLeft: "1rem" }} src="twitter.svg" />
              <Img style={{ paddingLeft: "1rem" }} src="insta.svg" />
            </div>
            <Img src="footerlogo.png" />
          </Top>
        </Right>
      </InnerContainer>
      <Div1 style={{ width: "95%", marginBottom: "1rem" }}>
        <hr></hr>
        <End>
          <Span2 style={{ marginRight: "1rem" }}>
            2021 Skilzen,All right reserved.
          </Span2>
          <Span2>Terms & Conditions</Span2>
          <Span2>Privacy Policy</Span2>
        </End>
      </Div1>
    </Container>
  );
}

export default Footer;
