import type { Product } from "../store-types";

export const STORE_PRODUCTS: Product[] = [
  {
    slug: "yellowstone-poster",
    name: "Yellowstone Poster",
    description:
      "A hand painted illustration print of Yellowstone National Park. 11x15 on 100lb matte cardstock.",
    price: 2500,
    category: "national park posters",
    size: "11x15",
    images: [
      "/store/yellowstone-mockup.jpg",
      "/store/yellowstone-wall.webp",
      "/store/yellowstone-pic.webp",
      "/store/yellowstone.webp",
      "/store/yellowstone-proof.webp",
    ],
  },

  {
    slug: "banff-poster",
    name: "Banff Poster",
    description:
      "A hand painted illustration print of Moraine Lake in Banff Canadian National Park. 11x15 on 100lb matte cardstock.",
    price: 2500,
    category: "national park posters",
    size: "11x15",
    images: [
      "/store/banff-mockup.jpg",
      "/store/banff-wall.webp",
      "/store/banff-pic.webp",
      "/store/banff.webp",
      "/store/banff-proof.webp",
    ],
  },

  {
    slug: "zion-poster",
    name: "Zion Poster",
    description:
      "A hand painted illustration print of the Narrows in Zion National Park. 11x15 on 100lb matte cardstock.",
    price: 2500,
    category: "national park posters",
    size: "11x15",
    images: [
      "/store/zion-mockup.jpg",
      "/store/zion-wall.webp",
      "/store/zion-pic.webp",
      "/store/zion.webp",
      "/store/zion-proof.webp",
    ],
  },
  {
    slug: "yosemite-poster",
    name: "Yosemite Poster",
    description:
      "A hand painted illustration print of Yosemite Falls in Yosemite National Park. 11x15 on 100lb matte cardstock.",
    price: 2500,
    category: "national park posters",
    size: "11x15",
    images: [
      "/store/yosemite-mockup.jpg",
      "/store/yosemite-wall.webp",
      "/store/yosemite-pic.webp",
      "/store/yosemite.webp",
      "/store/yosemite-proof.webp",
    ],
  },
  {
    slug: "antelope-poster",
    name: "Antelope Canyon",
    description:
      "A hand painted illustration print of Antelope Canyon Park at night. 11x15 on 100lb matte cardstock.",
    price: 2500,
    category: "national park posters",
    size: "11x15",
    images: [
      "/store/antelope-mockup.jpg",
      "/store/antelope-wall.webp",
      "/store/antelope-pic.webp",
      "/store/antelope.webp",
      "/store/antelope-proof.webp",
    ],
  },

  // TRAVEL
  {
    slug: "seattle-poster",
    name: "Seattle Poster",
    description:
      "A hand painted illustration print of Seattle Rain with the Space Needle. 11x14 on 100lb matte cardstock.",
    price: 2200,
    category: "cities posters",
    size: "11x14",
    images: ["/store/seattle-mockup.jpg", "/store/seattle.webp"],
    new: true,
  },
  {
    slug: "sf-poster",
    name: "San Francisco Poster",
    description:
      "A hand painted illustration print of San Francisco Fog with the Golden Gate Bridge. 11x14 on 100lb matte cardstock.",
    price: 2200,
    category: "cities posters",
    size: "11x14",
    images: ["/store/sf-mockup.jpg", "/store/sf.webp"],
    new: true,
    unavailable: true,
  },

  // PAINTINGS
  {
    slug: "still-life-prints",
    name: "Still Life Collection",
    description:
      "A set of 5 painted still life prints (Daisy, Honey, Yolk, Tangerines and Oranges). Five 6x6in prints on 100lb matte cardstock.",
    price: 4500,
    category: "print",
    size: "6x6",
    images: [
      "/store/prints-mockup.webp",
      "/store/prints-mockup.webp",
      "/store/prints-floor.webp",
      "/store/prints-dragon.webp",
    ],
  },

  // {
  //   slug: "tangerine-print",
  //   name: "Tangerine Print",
  //   description:
  //     "A hand painted still life of tangerines. 6x6 on 100lb matte cardstock.",
  //   price: 1500,
  //   category: "print",
  //   size: "6x6",
  //   images: [
  //     "/store/tangerine-mockup.jpg",
  //     "/store/tangerine.webp",
  //     "/store/tangerine-pic.webp",
  //   ],
  // },

  // {
  //   slug: "daisy-print",
  //   name: "Daisy Print",
  //   description:
  //     "A hand painted still life of a daisy. 6x6 on 100lb matte cardstock.",
  //   price: 1500,
  //   category: "print",
  //   size: "6x6",
  //   images: [
  //     "/store/daisy-mockup.jpg",
  //     "/store/daisy.webp",
  //     "/store/daisy-pic.webp",
  //   ],
  // },
  // {
  //   slug: "honey-print",
  //   name: "Honey Jar Print",
  //   description:
  //     "A hand painted still life of honey in a glass jar. 6x6 on 100lb matte cardstock.",
  //   price: 1500,
  //   category: "print",
  //   size: "6x6",
  //   images: [
  //     "/store/honey-mockup.jpg",
  //     "/store/honey.webp",
  //     "/store/honey-pic.webp",
  //   ],
  // },
  // {
  //   slug: "orange-print",
  //   name: "Orange Print",
  //   description:
  //     "A hand painted still life of orange slices. 6x6 on 100lb matte cardstock.",
  //   price: 1500,
  //   category: "print",
  //   size: "6x6",
  //   images: [
  //     "/store/orange-mockup.jpg",
  //     "/store/orange.webp",
  //     "/store/oranges-pic.webp",
  //   ],
  // },

  // {
  //   slug: "yolk-print",
  //   name: "Yolk Print",
  //   description:
  //     "A hand painted still life of an egg yolk on chopsticks. 6x6 on 100lb matte cardstock.",
  //   price: 1500,
  //   category: "print",
  //   size: "6x6",
  //   images: [
  //     "/store/yolk-mockup.jpg",
  //     "/store/yolk.webp",
  //     "/store/yolk-pic.webp",
  //   ],
  // },
];
