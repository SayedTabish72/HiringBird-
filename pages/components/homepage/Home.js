import React from "react";
import Navbar from "./parts/Navbar";
import Hero from "./parts/Hero";
import Section from "./parts/Section";
import Categories from "./parts/categories";
import Locations from "./parts/locations";
import Contactus from "./parts/Contactus";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section />
      <Categories />
      <Locations />
      <Contactus />
    </>
  );
}

export default Home;
