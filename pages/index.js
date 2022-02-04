import Head from "next/head";
import { getSession } from "next-auth/react";
import Home from "../components/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="hiringbird homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  return {
    props: { session },
  };
}
