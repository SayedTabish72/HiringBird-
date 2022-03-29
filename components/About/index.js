import React from "react";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
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
