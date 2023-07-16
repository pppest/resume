function About() {
  return (
    <div id="about" className="flex flex-col gap-8 justify-center items-center w-[80vw] container">
      <h1 className="text-6xl font-display normal-case whitespace-nowrap">About</h1>
      <div className="flex flex-wrap gap-4 justify-start items-center font-primaryFont text-3xl xl:text-4xl normal-case">
        <p >
          I have 5 years of experience in the blockchain industry and decentralized applications. I have worked in Web3 on DeFi and NFT
          projects as frontend, smart-contract and lead developer. <br />I am proficient in a range of web3 tools, smart contract
          development, and the Ethereum ecosystem.
        </p>
        <p>
          I work by &quot;Learn-it-all&quot; over &quot;Know-it-all&quot;. When you know your fundamentals you can learn to do everything.
        </p>
        <p>I love cooking and practicing Brazilian Jiu-jitsu.</p>
      </div>
    </div>
  );
}

export default About;
