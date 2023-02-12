import React from "react";

const About = () => {
  return (
    <div className=" min-h-screen p-10 max-w-screen-md">
      <div className="overflow-auto">
        <div className="text-gray-100 font-mono text-sm overflow-auto word-break: break-word">
          <span>
            <div className="mb-10 mt-24 text-lg">
              <span>SBTn (Soul Bound Token for NFTs)</span>
            </div>
            SBTn is a new concept for NFTs, it's like a normal Soul Bound Token
            but the NFT is attached to a NFT item. Use cases: - In gaming, the
            player character could be a NFT and the items gained in the game
            could be a SBTn attached to that NFT player, so if the player gains
            many items it could increase their value. - In real estate, a house
            could be a NFT and over time its information could be attached as a
            SBTn. For example, each new reform could be a SBTn with some
            descriptions, taxes paid could be a SBTn, etc. How it works: The
            SBTn is created as a contract and linked to a specific NFT item. The
            information is then stored on the blockchain and can be viewed and
            verified. Benefits: - Increases the value of the NFT item. -
            Provides a secure and verifiable record of information.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
