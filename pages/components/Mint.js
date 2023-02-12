import React, { useState } from "react";

const Mint = () => {
  const [itemNumber, setItemNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to mint the NFT here
    console.log(`Minting NFT with item number: ${itemNumber}`);
  };

  return (
    <div className="min-h-screen p-10 text-white font-mono">
      <h1 className="text-4xl mb-4">Mint NFT</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="collection" className="block text-sm mb-2">
            Collection:
          </label>
          <select
            id="collection"
            name="collection"
            className="bg-gray-700 p-2 rounded-lg text-white font-mono"
            defaultValue="Collection1"
            disabled
          >
            <option value="Collection1">Collection1</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="itemNumber" className="block text-sm mb-2">
            NFT Item Number:
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
  );
};

export default Mint;
