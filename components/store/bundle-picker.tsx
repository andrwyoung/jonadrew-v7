"use client";

import { useState } from "react";
import { STORE_PRODUCTS } from "@/types/configs/store-config";
import { useCartStore } from "@/store/cart-store";
import type { Product } from "@/types/store-types";

export function BundlePicker({ product }: { product: Product }) {
  const [selected, setSelected] = useState<string[]>([]);
  const { addItem, openCart } = useCartStore();

  const { picks, options } = product.bundleOptions!;
  const optionProducts = STORE_PRODUCTS.filter((p) => options.includes(p.slug));

  function toggle(name: string) {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((n) => n !== name)
        : prev.length < picks
          ? [...prev, name]
          : prev,
    );
  }

  const remaining = picks - selected.length;
  const ready = remaining === 0;

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-stone-500">Pick 3:</p>
      <div className="flex flex-wrap gap-2">
        {optionProducts.map((p) => {
          const isSelected = selected.includes(p.name);
          const isDisabled = !isSelected && ready;
          return (
            <button
              key={p.slug}
              type="button"
              onClick={() => toggle(p.name)}
              className={`px-3 py-1.5 rounded-lg border text-sm font-semibold transition-colors
                ${
                  isSelected
                    ? "bg-secondary text-white border-secondary cursor-pointer"
                    : isDisabled
                      ? "border-stone-200 text-stone-300 cursor-not-allowed"
                      : "border-stone-200 text-stone-600 hover:border-stone-400 cursor-pointer"
                }`}
            >
              {p.name.replace(" Poster", "")}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        disabled={!ready}
        onClick={() => {
          addItem(product, selected);
          openCart();
        }}
        className="font-semibold px-8 py-2 rounded-lg bg-secondary text-white hover:opacity-90 transition-opacity mt-4 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Add to Cart
      </button>
    </div>
  );
}
