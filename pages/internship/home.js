import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Search from "../components/internshipDetails/Search";
import Filter from "../components/internshipDetails/Filter";
import Footer from "../components/internshipDetails/Footer";
import HeadBar from "../components/internshipDetails/HeadBar";
import ResponsiveFilter from "../components/internshipDetails/ResponsiveFilter";
import LocationModel from "../components/internshipDetails/LocationModel";
import { InternshipContext } from "../../context/internship.context";

export default function home() {
  const { showLocationModel } = useContext(InternshipContext);
  useEffect(() => {}, [showLocationModel]);
  return (
    <>
      <Head>
        <title>Internship Page | Hiring Bird</title>
        <meta name="description" content="Find Internships" />
        <link rel="icon" href="./logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Navbar />
      <Search />
      <Filter />
      <LocationModel show={showLocationModel} />
      <ResponsiveFilter />
      <HeadBar />
      <Footer />
    </>
  );
}
