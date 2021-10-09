import Head from "next/head";
import Section from "./components/homepage/Section";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section />
    </>
  );
}
