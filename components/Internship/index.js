import Footer from "@/common/components/Footer";
import React from "react";
import styled from "styled-components";
import Navbar from "../../components/common/components/Navbar";
import Search from "../common/components/Search";
import Filter from "./Filter";
import Main from "./Main";

const Internship = () => {
  return (
    <>
      <Navbar />
      <Search />
      <Filter />

      <Main />
      <Footer />
    </>
  );
};

export default Internship;

// styles
const Wrapper = styled.div``;
