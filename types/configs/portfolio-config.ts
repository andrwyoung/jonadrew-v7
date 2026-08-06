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
    id: "5ac96ecb-d903-4134-8d7f-680deda9fe52",
    title: "Interior Illustrations",
  },

  {
    id: "6f6b7d4d-12a0-4f20-b071-99e4b1edca06",
    title: "Board Games",
  },
  {
    id: "d5bd98b6-3f87-4f0e-8465-348d79572393",
    title: "Comics",
  },
];
