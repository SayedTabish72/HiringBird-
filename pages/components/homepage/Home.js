import React from "react";
import Navbar from "../navbar/Navbar";
import Hero from "./parts/Hero";
import Section from "./parts/Section";
import Categories from "./parts/Categories";
import Locations from "./parts/locations";
import Footer from "../Footer";
import Topcomp from "./parts/Topcomp";
import TopColleges from "./parts/TopColleges";
import FeaturedInternships from "./parts/FeaturedInternships";
import HowItWorks from "./parts/HowItWorks";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Section /> */}
      <HowItWorks />
      {/* <FeaturedInternships /> */}
      <Categories />
      <Locations />
      <TopColleges />
      {/* <Topcomp /> */}
      <Footer />
    </>
  );
}

export default Home;
