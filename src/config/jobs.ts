export interface IJob {
  employer?: string;
  title: string;
  subtitle?: string;
  description: string;
  skills: string[];
  link: string;
}

export const jobs: IJob[] = [
  {
    employer: "CERUSNodes.io",
    title: "Web3 Frontend",
    subtitle: "& smart contracts",
    description:
      "Hired to write the protocol smart contracts, I stepped up to take over frontend/UI/UX when the developer and designer left.",
    skills: ["react", "next.js", "wagmi.sh", "ethers", "rainbow kit", "figma", "solidity", "hardhat", "mocha", "ipfs", "nft.storage"],
    link: "https://app.cerusnodes.io",
  },
  {
    employer: "BoltDollar.finance",
    title: "Web3 Frontend",
    description:
      "Saw the code of the old app and decided to volunteer to write a new app for the upcoming smart-vaults to help the project.",
    skills: ["react", "next.js", "wagmi.sh", "ethers", "rainbow kit", "figma"],
    link: "https://vaults.boltdollar.finance/",
  },
  {
    employer: "various defi projects",
    title: "Fullstack web3",
    subtitle: "lead developer",
    description:
      "I have worked and helped on various DeFi projects across multiple EVM chains since 2020. Worked with Uniswap v2, Layer Zero, PancakeSwap, and Beefy code extensively. I have deployed 100+ contracts.",
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
      "...",
    ],
    link: "",
  },
];
