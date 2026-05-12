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
        <p className="  max-w-md">
          Your order is confirmed. You&apos;ll hear from me soon. For any
          questions, feel free to reach out:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="">
            {CONTACT_EMAIL}
          </a>
        </p>

        <p className="  max-w-md">
          Also...since you bought something, you might be the type of person
          interested in my{" "}
          <a
            href={`https://blog.jonadrew.com/profile`}
            target="_blank"
            rel="noopener noreferrer"
            title="Blog previous posts"
            className="text-secondary underline underline-offset-2"
          >
            biweekly newsletter/blog
          </a>
          !
        </p>

        <Link
          href="/store"
          className="mt-4 bg-secondary text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          Back to Store
        </Link>
      </main>
    </div>
  );
}
