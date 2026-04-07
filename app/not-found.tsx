"use client";

import Link from "next/link";
import { fireConfetti } from "@/lib/fire-confetti";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 bg-background text-text">
      <main className="flex flex-1 flex-col items-center justify-center  px-8 pt-48">
        <button
          type="button"
          className="text-8xl font-logo hover:scale-105 cursor-pointer transition hover:opacity-50 mb-8"
          onClick={(e) => fireConfetti(e)}
        >
          404
        </button>
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="text-sm mb-2">Looks like this page wandered off.</p>
        <Link
          href="/"
          className="mt-4 text-secondary-text underline underline-offset-4 hover:text-text transition-colors"
        >
          Go back home
        </Link>
      </main>
    </div>
  );
}
