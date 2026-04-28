import type { Product } from "../store-types";

export const STORE_PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "dragon-print",
    name: "Dragon Print",
    description:
      "A high-quality 8x10 giclée print of the Dragon illustration. Printed on archival matte paper.",
    price: 2500,
    category: "print",
    images: ["/store/dragon-print.jpg"],
    available: true,
    limited: 50,
  },
  {
    id: "2",
    slug: "forest-spirit-original",
    name: "Forest Spirit — Original",
    description:
      "One-of-a-kind original digital painting, delivered as a high-resolution file with a certificate of authenticity.",
    price: 15000,
    category: "original",
    images: ["/store/forest-spirit.jpg"],
    available: true,
    limited: 1,
  },
  {
    id: "3",
    slug: "adventure-zine",
    name: "Adventure Zine Vol. 1",
    description:
      "A hand-assembled 24-page mini zine packed with illustrations and comics. Saddle-stitched.",
    price: 1200,
    category: "merch",
    images: ["/store/zine.jpg"],
    available: true,
  },
  {
    id: "4",
    slug: "sticker-pack",
    name: "Character Sticker Pack",
    description:
      "Set of 6 die-cut vinyl stickers featuring characters from the portfolio. Weatherproof and vibrant.",
    price: 800,
    category: "merch",
    images: ["/store/stickers.jpg"],
    available: true,
  },
  {
    id: "5",
    slug: "comic-pages-digital",
    name: "Comic Pages — Digital Pack",
    description:
      "Download a collection of 10 high-res comic pages from the archive, perfect for study or framing.",
    price: 600,
    category: "digital",
    images: ["/store/comic-digital.jpg"],
    available: true,
  },
];
