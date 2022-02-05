import React from "react";
import Signup from "../components/Auth/Signup";
import Head from "next/head";

const signup = () => {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="hiringbird signup page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signup />
    </>
  );
};

export default signup;
