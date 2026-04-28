export type ProductCategory = "print" | "original" | "digital" | "merch";

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number; // in cents
  category: ProductCategory;
  images: string[]; // first image is the thumbnail
  available: boolean;
  limited?: number; // total copies available, omit if unlimited
  externalUrl?: string; // e.g. Etsy, Gumroad link
};
