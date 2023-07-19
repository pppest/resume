export interface IJob {
  employer?: string;
  title: string;
  subtitle?: string;
  description: string;
  skills: string[];
  link: string;
  dates?: string;
}

export const jobs: IJob[] = [
  {
    employer: "CERUSNodes.io",
    title: "Web3 Frontend",
    subtitle: "& smart contracts Developer",
    description:
      "Hired to write the protocol smart contracts, I stepped up to take over frontend/UI/UX when the developer and designer left. Designed and built a staking dashboard and NFT gallery along with the contracts. ",
    skills: ["react", "next.js", "wagmi.sh", "ethers", "rainbow kit", "figma", "solidity", "hardhat", "mocha", "ipfs", "nft.storage"],
    link: "https://app.cerusnodes.io",
    dates: "November 2022 - Present",
  },
  {
    employer: "BoltDollar.finance",
    title: "Freelance Web3 Frontend Developer",
    description:
      "Saw the code of the old app and decided to volunteer to write a new faster and more dynamic app for the upcoming smart-vaults to fix the many problems.",
    skills: ["react", "next.js", "wagmi.sh", "ethers", "rainbow kit", "figma"],
    link: "https://vaults.boltdollar.finance/",
    dates: "December 2022 - Present",
  },
  {
    employer: "various defi projects",
    title: "Fullstack web3",
    subtitle: "freelance & lead developer",
    description:
      "I have worked and helped on various DeFi projects across multiple EVM chains. Worked with Uniswap v2, Layer Zero, PancakeSwap, and Beefy code extensively. I have deployed 100+ contracts.",
    dates: "2020 - Present",
    skills: [
      "react",
      "next.js",
      "web3.js",
      "ethers",
      "wagmi.sh",
      "figma",
      "solidity",
      "remix",
      "ubuntu servers",
      "layer zero",
      "erc20",
      "erc721",
    ],
    link: "",
  },
];
