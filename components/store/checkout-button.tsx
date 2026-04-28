"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cart-store";
import { toast } from "sonner";

export function CheckoutButton() {
  const { items } = useCartStore();
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map(({ product, quantity }) => ({
            name: product.name,
            price: product.price,
            quantity,
            image: product.images[0],
          })),
        }),
      });

      if (!res.ok) throw new Error("Checkout failed");

      const { url } = await res.json();
      window.location.href = url;
    } catch (e) {
      console.error(e);
      toast.error("Failed to load checkout");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={loading}
      className="w-full bg-secondary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? "Loading..." : "Checkout"}
    </button>
  );
}
