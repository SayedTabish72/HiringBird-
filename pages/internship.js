import React from "react";
import Head from "next/head";
import Navbar from "./components/navbar/navbar";
import Search from "./components/internshipDetails/Search";
import Filter from "./components/internshipDetails/Filter";
import Footer from "./components/internshipDetails/Footer";
import HeadBar from "./components/internshipDetails/HeadBar";

export default function Home() {
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
      <HeadBar />
      <Footer />
    </>
  );
}
