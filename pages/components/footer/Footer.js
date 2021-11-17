import React from "react";
import { Img } from "../internshipDetails/styles/Search.styled";
import {
  Container,
  MobileContainer,
  Inner,
  Heading1,
  Span1,
  Left,
  InnerContainer,
  Right,
  Top,
  Div1,
  End,
  Span2,
} from "./styles/Footer.styled";

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
              <Img src="phone.png" alt="phone" />
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
            <Img src="/footerlogo.png" />
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
