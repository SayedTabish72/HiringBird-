import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { Container,Container1,Leftdiv,Rightdiv,Button,Button1,Heading,Text,Logo } from "./styles/Contactus.styled";

import help from "../../../public/help.svg";
import mainimg from "../../../public/contactus1.svg";



function Contactus() {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Container>
          <Container1>
            <Leftdiv>
              <Heading>Contact us</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer dolor sit amet,
                consectetur adipiscing elit. Nunc odio in et. id integer dolor
                sit amet, consectetur adipiscing elit. Net.
              </Text>
              <Button>Join Skilzen</Button>
              <Logo>
                <Image src={help} alt="helphere" />
              </Logo>
            </Leftdiv>
            <Rightdiv>
              <Image src={mainimg} alt="rightimg" />
              <Button1>Join Skilzen</Button1>
            </Rightdiv>
          </Container1>
        </Container>
      </body>
    </html>
  );
}

export default Contactus;
