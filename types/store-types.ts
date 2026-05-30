export type Category =
  | "national parks"
  | "print"
  | "general"
  | "cities posters";

export type Product = {
  slug: string;

  name: string;
  description: string;
  size: string;

  price: number; // in cents
  category: Category;
  unavailable?: boolean; // out of stock?
  new?: boolean;

  images: string[]; // first image is the thumbnail

  bundleOptions?: {
    picks: number;
    options: string[]; // slugs of selectable products
  };
};
