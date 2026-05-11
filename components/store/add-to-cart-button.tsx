"use client";

import { useCartStore } from "@/store/cart-store";
import type { Product } from "@/types/store-types";

export function AddToCartButton({
  product,
  disabled,
}: {
  product: Product;
  disabled: boolean;
}) {
  const { addItem, openCart } = useCartStore();

  return (
    <button
      type="button"
      className={` font-semibold px-8 py-2 rounded-lg 
        ${disabled ? "cursor-not-allowed bg-stone-200 text-stone-400" : "cursor-pointer hover:opacity-90 transition-opacity bg-secondary text-white "}`}
      onClick={() => {
        if (disabled) return;
        addItem(product);
        openCart();
      }}
    >
      {disabled ? "Sold Out" : "Add to Cart"}
    </button>
  );
}
