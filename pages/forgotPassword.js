import React from "react";
import Head from "next/head";
// import Forgotpass from "../Auth/Forgotpass/parts/Forgotpassword";
import Forgotpass from "../components/Auth/Forgotpass/parts/Forgotpassword";
const forgotPassword = () => {
  return (
    <>
      <Head>
        <title>signUp</title>
        <meta name="description" content="Generated by create-next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Forgotpass />
    </>
  );
};

export default forgotPassword;
