// here are all our sections we're pulling from:
export type PortfolioConfig = {
  id: string;
  title: string;
  description?: string;
};

export const PORTFOLIO_SECTIONS: PortfolioConfig[] = [
  {
    id: "39e5bab0-0643-4dc5-bab0-fdecce075687",
    title: "Book Covers",
  },
  {
    id: "d5bd98b6-3f87-4f0e-8465-348d79572393",
    title: "Comics",
  },
  {
    id: "503b2c81-d719-42dc-b2d8-e2c115665747",
    title: "Digital Paintings",
  },
];
