import type { Product } from "../store-types";

export const STORE_PRODUCTS: Product[] = [
  {
    slug: "yellowstone-poster",
    name: "Yellowstone",
    description:
      "A hand painted illustration print of Yellowstone National Park. 11x15 on 100lb matte cardstock.",
    price: 2500,
    category: "national park posters",
    images: [
      "/store/yellowstone-mockup.jpg",
      "/store/yellowstone.webp",
      "/store/yellowstone-pic.webp",
    ],
  },

  {
    slug: "banff-poster",
    name: "Banff",
    description:
      "A hand painted illustration print of Moraine Lake in Banff Canadian National Park. 11x15 on 100lb matte cardstock.",
    price: 2500,
    category: "national park posters",
    images: [
      "/store/banff-mockup.jpg",
      "/store/banff.webp",
      "/store/banff-pic.webp",
    ],
  },

  {
    slug: "zion-poster",
    name: "Zion",
    description:
      "A hand painted illustration print of the Narrows in Zion National Park. 11x15 on 100lb matte cardstock.",
    price: 2500,
    category: "national park posters",
    images: [
      "/store/zion-mockup.jpg",
      "/store/zion.webp",
      "/store/zion-pic.webp",
    ],
  },
  {
    slug: "yosemite-poster",
    name: "Yosemite",
    description:
      "A hand painted illustration print of Yosemite National Park. 11x15 on 100lb matte cardstock.",
    price: 2500,
    category: "national park posters",
    images: [
      "/store/yosemite-mockup.jpg",
      "/store/yosemite.webp",
      "/store/yosemite-pic.webp",
    ],
  },
  {
    slug: "antelope-poster",
    name: "Antelope Canyon",
    description:
      "A hand painted illustration print of Antelope Canyon Park at night. 11x15 on 100lb matte cardstock.",
    price: 2500,
    category: "national park posters",
    images: [
      "/store/antelope-mockup.jpg",
      "/store/antelope.webp",
      "/store/antelope-pic.webp",
    ],
  },

  // TRAVEL
  {
    slug: "seattle-poster",
    name: "Seattle",
    description:
      "A hand painted illustration print of Seattle Rain with the Space Needle. 11x14 on 100lb matte cardstock.",
    price: 2200,
    category: "cities posters",
    images: ["/store/seattle-mockup.jpg", "/store/seattle.webp"],
    new: true,
  },
  {
    slug: "sf-poster",
    name: "San Francisco",
    description:
      "A hand painted illustration print of San Francisco Fog with the Golden Gate Bridge. 11x14 on 100lb matte cardstock.",
    price: 2200,
    category: "cities posters",
    images: ["/store/sf-mockup.jpg", "/store/sf.webp"],
    new: true,
    unavailable: true,
  },

  // PAINTINGS
  {
    slug: "tangerine-print",
    name: "Tangerine Painting",
    description:
      "A hand painted still life of tangerines. 6x6 on 100lb matte cardstock.",
    price: 1500,
    category: "print",
    images: [
      "/store/tangerine-mockup.jpg",
      "/store/tangerine.webp",
      "/store/tangerine-pic.webp",
    ],
  },

  {
    slug: "daisy-print",
    name: "Daisy Painting",
    description:
      "A hand painted still life of a daisy. 6x6 on 100lb matte cardstock.",
    price: 1500,
    category: "print",
    images: [
      "/store/daisy-mockup.jpg",
      "/store/daisy.webp",
      "/store/daisy-pic.webp",
    ],
  },
  {
    slug: "honey-print",
    name: "Honey Jar Painting",
    description:
      "A hand painted still life of honey in a glass jar. 6x6 on 100lb matte cardstock.",
    price: 1500,
    category: "print",
    images: [
      "/store/honey-mockup.jpg",
      "/store/honey.webp",
      "/store/honey-pic.webp",
    ],
  },
  {
    slug: "orange-print",
    name: "Orange Painting",
    description:
      "A hand painted still life of orange slices. 6x6 on 100lb matte cardstock.",
    price: 1500,
    category: "print",
    images: [
      "/store/orange-mockup.jpg",
      "/store/orange.webp",
      "/store/oranges-pic.webp",
    ],
  },

  {
    slug: "yolk-print",
    name: "Yolk Painting",
    description:
      "A hand painted still life of an egg yolk on chopsticks. 6x6 on 100lb matte cardstock.",
    price: 1500,
    category: "print",
    images: [
      "/store/yolk-mockup.jpg",
      "/store/yolk.webp",
      "/store/yolk-pic.webp",
    ],
  },
];
