import React from "react";
import Footer from "../common/components/Footer";
import Navbar from "../common/components/Navbar";
import AboutUs from "./AboutUs";
import Achievements from "./Achievements";
import FounderNote from "./FounderNote";

function About() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <FounderNote />
      <Achievements />
      <Footer />
    </>
  );
}

export default About;
