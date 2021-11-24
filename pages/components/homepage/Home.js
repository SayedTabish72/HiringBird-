import React from "react";
import Navbar from "../navbar/Navbar";
import Hero from "./parts/Hero";
import Section from "./parts/Section";
import Categories from "./parts/categories";
import Locations from "./parts/locations";
import AboutUs from "./parts/AboutUs";
import Founder from "./parts/Founder";
import Footer from "../footer/Footer";
import Contactus from "./parts/Contactus";
import Topcomp from "./parts/Topcomp";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Locations />
      <AboutUs />
      <Section />
      <Founder />
      <Contactus />
      <Topcomp/>
      <Footer />
    </>
  );
}

export default Home;
