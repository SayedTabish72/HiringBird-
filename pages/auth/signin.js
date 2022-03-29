import React from "react";
import Signin from "../../components/Auth/Signin";
import Head from "next/head";
import AuthContainer from "components/Auth/Common/AuthContainer";

const signin = () => {
  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="hiringbird signin page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signin />
    </>
  );
};

export default signin;
