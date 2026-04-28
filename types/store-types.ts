export type Category = "national park posters" | "print" | "general";

export type Product = {
  slug: string;

  name: string;
  description: string;

  price: number; // in cents
  category: Category;
  unavailable?: boolean; // out of stock?

  images: string[]; // first image is the thumbnail
};
