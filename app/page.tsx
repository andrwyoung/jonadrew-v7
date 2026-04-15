"use client";
import Portfolio from "@/components/homepage/portfolio";
import { fireConfetti } from "@/lib/fire-confetti";
import { CONTACT_EMAIL } from "@/types/settings";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-background text-text">
      <main className="flex flex-1 flex-col items-center justify-center sm:px-8 px-4 pt-24">
        <div className="flex flex-col items-center justify-center pb-24">
          <button
            type="button"
            className="text-7xl font-logo mb-1 hover:scale-105 cursor-pointer transition hover:opacity-50"
            onClick={(e) => fireConfetti(e)}
          >
            Portfolio
          </button>
          <h2 className="text-xl font-semibold mt-4">Artwork by Andrew Yong</h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-header font-semibold mt-1 underline hover:text-secondary-text transition-colors"
          >
            {CONTACT_EMAIL}
          </a>

          {/* <p className="mt-4 max-w-md text-center text-base leading-relaxed">
          Comics, book covers, and board game art.
        </p> */}
        </div>

        <Portfolio />
        <p className="mt-18 mb-8 font-semibold text-stone-500">
          Bonus: click on the word Portfolio at the top
        </p>
      </main>
    </div>
  );
}
