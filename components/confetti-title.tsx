"use client";

import { fireConfetti } from "@/lib/fire-confetti";

export default function ConfettiTitle({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="text-7xl font-logo mb-1 hover:scale-105 cursor-pointer transition hover:opacity-50"
      onClick={(e) => fireConfetti(e)}
    >
      {text}
    </button>
  );
}
