import React from "react";

const aboutMe: string =
  "I have 17 years of experience working with Linux, and 5 years of experience in blockchain technology and decentralized applications. I have worked in Web3 on DeFi and NFT projects as frontend, smart-contract and lead developer. I am proficient in a range of web3 tools, smart contract development, and the Ethereum ecosystem. I work by Learn-it-all over Know-it-all. When you know your fundamentals you can learn to do everything. I love cooking and practicing Brazilian Jiu-jitsu.";

function About() {
  return (
    <section className="flex flex-col gap-8 justify-center items-center w-[60vw] container">
      <h1 className="text-6xl font-display normal-case whitespace-nowrap">About me</h1>
      <div className="flex flex-col items-start justify-center gap-4">
        <p className="font-primaryFont text-4xl normal-case">
          I have 5 years of experience in the blockchain industry and decentralized applications. I have worked in Web3 on DeFi and NFT
          projects as frontend, smart-contract and lead developer. <br />I am proficient in a range of web3 tools, smart contract
          development, and the Ethereum ecosystem.
        </p>
        <p className="font-primaryFont text-4xl normal-case">
          I work by &quot;Learn-it-all&quot; over &quot;Know-it-all&quot;. When you know your fundamentals you can learn to do everything.
        </p>
        <p className="font-primaryFont text-4xl normal-case">I love cooking and practicing Brazilian Jiu-jitsu.</p>
      </div>
    </section>
  );
}

export default About;
