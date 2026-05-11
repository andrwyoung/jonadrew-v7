export type Category =
  | "national park posters"
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
};
