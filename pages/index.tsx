import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Mint from "./components/Mint";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Navbar />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </div>
  );
};

export default Home;
