import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

const Check: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <Navbar />
      <div>
        <Search />
      </div>
    </div>
  );
};

export default Check;
