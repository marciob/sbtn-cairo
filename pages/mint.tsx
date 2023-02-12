import React, { useState } from "react";
import Navbar from "./components/Navbar";

const Mint = () => {
  const [itemNumber, setItemNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to mint the NFT here
    console.log(`Minting NFT with item number: ${itemNumber}`);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Navbar />
      <div className="min-h-screen p-10  text-white font-mono">
        <h1 className="text-4xl mb-4 mt-28">Mint SBTn</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="collection" className="block text-sm mb-2">
              Collection:
            </label>
            <select
              id="collection"
              name="collection"
              className="bg-gray-700 p-2 rounded-lg text-white font-mono appearance-none"
              defaultValue="Collection1"
            >
              <option value="Collection1">Collection1</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="itemNumber" className="block text-sm mb-2">
              SBTn for the NFT item:
            </label>
            <input
              type="text"
              id="itemNumber"
              name="itemNumber"
              value={itemNumber}
              onChange={(e) => setItemNumber(e.target.value)}
              className="bg-gray-700 p-2 rounded-lg text-white font-mono"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 py-2 px-4 rounded-lg text-white font-mono"
          >
            Mint
          </button>
        </form>
      </div>
    </div>
  );
};

export default Mint;
