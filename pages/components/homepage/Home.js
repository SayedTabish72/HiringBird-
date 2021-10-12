import React from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./parts/Navbar";
import Hero from "./parts/Hero";
import Section from "./parts/Section";
import Categories from "./parts/categories";
import Locations from "./parts/locations";
import Contactus from "./parts/Contactus";
import AboutUs from "./parts/AboutUs";
import { Container } from "./parts/styles/Container.styled";
import Founder from "./parts/Founder";
import {Foundercontainer} from "./parts/styles/Foundercontainer.styled";


const theme = {
  mobile: '589px',
}

function Home() {
  return (
    <ThemeProvider theme={theme}>
    <>
      <Navbar />
      <Container>
        <AboutUs />
      </Container>
      <Foundercontainer>
        <Founder />
      </Foundercontainer>
      <Hero />
      <Section />
      <Categories />
      <Locations />
      <Contactus />
    </>
    </ThemeProvider>
  );
}

export default Home;
