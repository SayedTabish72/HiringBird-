import React from "react";
import Signin from "../components/Auth/Signin/Signin";
import Head from "next/head";

const signin = () => {
  return (
    <>
      <Head>
        <title>signIn</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signin />
    </>
  );
};

export default signin;
