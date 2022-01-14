import React from "react";
import Navbar from "../navbar/Navbar";
import Hero from "./parts/Hero";
import Section from "./parts/Section";
import Categories from "./parts/categories";
import Locations from "./parts/locations";
import Footer from "../Footer";
import Topcomp from "./parts/Topcomp";
import TopColleges from "./parts/TopColleges";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section />
      <Categories />
      <Locations />
      <TopColleges />
      <Topcomp />
      <Footer />
    </>
  );
}

export default Home;
