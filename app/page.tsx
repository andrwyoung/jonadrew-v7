"use client";
import { SocialIcon } from "@/components/about/social-icon";
import Portfolio from "@/components/homepage/portfolio";
import { fireConfetti } from "@/lib/fire-confetti";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

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
          <h2 className="text-xl font-semibold">Artwork by Andrew Yong</h2>
          <div className="flex gap-4 items-center mt-2">
            <SocialIcon
              href="mailto:andrew@jonadrew.com"
              title="Send email to Andrew"
              icon={<MdEmail className="size-8" />}
            />{" "}
            <SocialIcon
              href="https://www.instagram.com/jonadrew_/"
              title="Instagram"
              icon={<FaInstagram className="size-7" />}
            />
          </div>
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
