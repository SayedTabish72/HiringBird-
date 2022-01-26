import React from "react";
import Image from "next/image";

import {
  Container1,
  Leftdiv,
  Rightdiv,
  Button,
  Button1,
  Heading,
  Text,
  Logo,
} from "./styles/Contactus.styled";
// import { ApplyNow } from "./styles/CommonComponents/ApplyNow.styled";
import styled from "styled-components";
// import help from "../../../../public/help.svg";
// import mainimg from "../../../../public/contactus1.svg";
import { Container } from "./styles/CommonComponents/Container.styled";

function Contactus() {
  return (
    <Wrapper id="contact-us">
      <Container style={{ position: "relative" }}>
        <HeadphoneDiv>
          <img src="/headphone-icon.svg" alt="" />
        </HeadphoneDiv>
        <Container1>
          <Leftdiv>
            <Heading>Contact us</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
              in et, lectus sit lorem id integer dolor sit amet, consectetur
              adipiscing elit. Nunc odio in et. id integer dolor sit amet,
              consectetur adipiscing elit. Net.
            </Text>
            <Button>Join Skilzen</Button>
          </Leftdiv>
          <Rightdiv>
            <img src="contactus1.svg" alt="rightimg" />
          </Rightdiv>
        </Container1>
      </Container>
    </Wrapper>
  );
}

export default Contactus;

const Wrapper = styled.div``;

const HeadphoneDiv = styled.div`
  position: absolute;
  bottom: 2rem;
  left: -6rem;
`;
