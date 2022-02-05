import React, { useContext, useEffect } from "react";
import Head from "next/head";
// import Search from "../../components/internshipDetails/Search";
// import Filter from "../../components/internshipDetails/Filter";
// import Footer from "../../components/internshipDetails/Footer";
// import HeadBar from "../../components/internshipDetails/HeadBar";
// import ResponsiveFilter from "../../components/internshipDetails/ResponsiveFilter";
// import LocationModel from "../../components/internshipDetails/LocationModel";
// import FilterModel from "../../components/internshipDetails/FilterModel";
// import { InternshipContext } from "../../context/internship.context";
// import Navbar from "../../components/common/components/Navbar";
import Internship from "../../components/Internship";

export default function internships() {
  return (
    <>
      <Head>
        <title>Internships</title>
        <meta name="description" content="Find Internships" />
      </Head>
      <Internship />
    </>
  );
}
