"use client";

import { useCartStore } from "@/store/cart-store";
import type { Product } from "@/types/store-types";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem, openCart } = useCartStore();

  return (
    <button
      type="button"
      className="bg-secondary text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
      onClick={() => {
        addItem(product);
        openCart();
      }}
    >
      Add to Cart
    </button>
  );
}
