import { NewsletterForm } from "@/components/about/newsletter-form";
import { ProfileImage } from "@/components/about/profile-image";
import { CONTACT_EMAIL } from "@/types/settings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jonadrew - About",
};

export default function About() {
  return (
    <div className="flex flex-col flex-1 bg-background text-text">
      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-8 py-24 max-w-2xl mx-auto">
        <div className="mb-4">
          <ProfileImage />
        </div>

        <h1 className="text-4xl self-start font-bold">About</h1>
        <p className="text-base leading-relaxed mb-2">
          Hi there! I&apos;m Andrew Yong, the person behind Jonadrew and the
          creator of{" "}
          <a
            href="https://www.mudboard.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Mudboard"
            className="font-semibold underline hover:text-secondary-text transition-colors"
          >
            Mudboard
          </a>
          .
          <br />
          <br />
          I started off working as a Software Engineer, but in 2022 I chose to
          leave because I wanted to impact people&apos;s lives through art.
          I&apos;ve since worked on dozens of book covers and hundreds of comic
          pages. I&apos;ve also illustrated a handful of board games and (cool
          fact) hiked the Pacific Crest Trail.
          <br />
          <br />
          I like making approachable art, but what excites me most is using it
          to also explore complex truths and tell stories that stick with you.
          <br />
          <br />
          Every other Wednesday since September 2022, I send out a newsletter
          sharing what I&apos;ve been making, what&apos;s been on my mind, and
          then a couple photos from my camera roll that have no business being
          there.
          <br />
          <br />
          Check out all my{" "}
          <a
            href="https://blog.jonadrew.com/profile"
            target="_blank"
            rel="noopener noreferrer"
            title="All old posts"
            className="font-semibold underline hover:text-secondary-text transition-colors"
          >
            old posts
          </a>{" "}
          or sign up here:
        </p>
        <NewsletterForm />

        <h2 className="text-2xl font-bold mt-24">Contact</h2>
        <p className="text-base leading-relaxed mb-2">
          You can always reach me at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold underline hover:text-secondary-text transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
          , and I&apos;m most active on{" "}
          <a
            href="https://www.instagram.com/jonadrew_/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="font-semibold underline hover:text-secondary-text transition-colors"
          >
            Instagram
          </a>
        </p>
      </main>
    </div>
  );
}
