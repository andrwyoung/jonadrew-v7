"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { CONTACT_EMAIL } from "@/types/settings";

export default function StoreSuccessPage() {
  const clearCart = useCartStore((s) => s.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="flex flex-col flex-1 bg-background text-text">
      <main className="flex flex-1 flex-col items-center justify-center px-4 sm:px-8 py-24 text-center gap-6">
        <h1 className="font-header text-4xl font-bold">Thank you!</h1>
        <p className="text-lg text-stone-500 max-w-md">
          Your order is confirmed. You&apos;ll hear from me soon — if you have
          any questions, feel free to reach out at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-secondary underline underline-offset-2"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <Link
          href="/store"
          className="mt-4 bg-secondary text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Back to Store
        </Link>
      </main>
    </div>
  );
}
