export interface IProject {
  name: string;
  description: string;
  link: string;
  videoLink?: string;
}

export const projects: IProject[] = [
  {
    name: "DeVault ATM",
    description: "DeVault crypto ATM using a raspberry pi with a coin acceptor in a piñata case. Check the fun video on youtube.",
    link: "https://github.com/pppest/devault-atm-touch",
    videoLink: "https://www.youtube.com/watch?v=8jyNdE-9dDU&ab_channel=ThePestHole",
  },
];
