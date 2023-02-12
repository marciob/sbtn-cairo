import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to perform search here
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-10">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="bg-gray-700 p-2 rounded-lg text-white font-mono"
      />
      <button
        type="submit"
        className="ml-4 bg-blue-500 py-2 px-4 rounded-lg text-white font-mono"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
