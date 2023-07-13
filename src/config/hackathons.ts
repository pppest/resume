interface IHackathon {
  name: string;
  text: string;
  award?: string;
  skills: string[];
}
export const hackathons: IHackathon[] = [
  {
    name: "ETH Global Mexico City 2022",
    text: "Wrote a Web3 phone and utility bills payment shop.",
    award: "Awarded by Chainlink for best use case.",
    skills: ["Next.js", "SSR", "Wagmi.sh", "Rainbow Kit", "Supabase"],
  },
  { name: "ETH Global Online 2022", text: "Wrote an ENS address book.", skills: ["Next.js", "ENS", "Wagmi.sh", "Rainbow Kit"] },
  {
    name: "ETH Global Bogota 2022",
    text: "Wrote an online Web3 christmas market with decentralized live stream, products represented by NFTs",
    award: "Awarded by ENS.",
    skills: ["Next.js", "Wagmi.sh", "Rainbow Kit", "Live Peer", "ENS"],
  },
];
