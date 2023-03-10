import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/Navbar";
import CodeBlock from "./components/CodeBlock";

const Contract: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <Navbar />
      <div>
        <CodeBlock
          code={`
    function helloWorld() {
      console.log("Hello, World!");
    }
  `}
        />
      </div>
    </div>
  );
};

export default CodeBlock;
