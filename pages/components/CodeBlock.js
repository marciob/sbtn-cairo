import React from "react";

const CodeBlock = ({ code }) => {
  return (
    <pre className="p-6 bg-gray-800 rounded-lg text-white font-mono">
      {code}
    </pre>
  );
};

export default CodeBlock;
