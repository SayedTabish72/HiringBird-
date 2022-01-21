import React from "react";
import Head from "next/head";
import Resume from "../components/User/Resume";

const resume = () => {
  return (
    <>
      <Head>
        <title>resume</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Resume />
    </>
  );
};

export default resume;
