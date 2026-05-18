import { FaqItem } from "@/components/about/faq-item";
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
          Hi there! I&apos;m Andrew Yong, the person/artist behind Jonadrew
          {/* and the
          creator of{" "}
          <a
            href="https://www.mudboard.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Mudboard"
            className="font-semibold underline hover:text-secondary-text transition-colors"
          >
            Mudboard
          </a> */}
          .
          <br />
          <br />
          I started off working as a Software Engineer, but chose to leave in
          2022 because I wanted to impact people&apos;s lives through art.
          I&apos;ve since illustrated dozens of book covers + comic pages with
          authors and publishers like Splickety and Descendant.
          <br />
          <br />
          I want to use my art to tell stories that tell deep truths, and I
          currently am working on a graphic novel outside of professional
          freelance work.
          <br />
        </p>
        {/* <h3 className="text-xl self-start font-bold mt-8">FAQ</h3> */}
        <div className="w-full flex  flex-col gap-4 mt-8 mb-12">
          <FaqItem question="On AI Usage">
            My art has not been touched by AI.
            <br />
            <br />I spent the last decade putting in the work to hone my skills,
            and even documented the whole journey. Just scroll all the way back
            on my{" "}
            <a
              href="https://blog.jonadrew.com/profile"
              target="_blank"
              rel="noopener noreferrer"
              title="All old posts"
              className="font-semibold underline hover:text-secondary-text transition-colors"
            >
              Newsletter
            </a>{" "}
            or{" "}
            <a
              href="https://www.instagram.com/jonadrew_/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="font-semibold underline hover:text-secondary-text transition-colors"
            >
              Instagram
            </a>{" "}
            to see the progress and growth.
            <br />
            <br />
            And definitely reach out if you have questions!
            {/* <br />
            <br />
            For coding, I have no qualms using AI. To write, I&apos;ll have AI
            proofread my emails if I&apos;m nervous, but for the most part I
            think writing is fun and AI just sterilizes it. */}
          </FaqItem>
          <FaqItem question="Some other things I've done">
            I hiked the whole Pacific Crest Trail in 2024 using a backpack, tent
            and sleeping bag that I{" "}
            <a
              href="https://jondrew.notion.site/Sewing-Gear-19b2e809fa4e801192f0c21c806f1605"
              target="_blank"
              rel="noopener noreferrer"
              title="Sewing Gear"
              className="font-semibold underline hover:text-secondary-text transition-colors"
            >
              made myself
            </a>
            ! I&apos;m pretty happy about it. <br />
            <br />I also created{" "}
            <a
              href="https://www.mudboard.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Mudboard"
              className="font-semibold underline hover:text-secondary-text transition-colors"
            >
              Mudboard
            </a>
            , a free reference organizer tool for artists.
          </FaqItem>
        </div>

        <h2 className="text-3xl self-start font-bold mt-16">Contact</h2>
        <p className="text-base leading-relaxed mb-2">
          Reach me at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold underline hover:text-secondary-text transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
          , or through{" "}
          <a
            href="https://www.instagram.com/jonadrew_/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="font-semibold underline hover:text-secondary-text transition-colors"
          >
            Instagram
          </a>
          <br />
          <br />
          If you want to learn more about what I&apos;m actually like, I send
          out a newsletter every other Wednesday sharing what I&apos;ve been
          making, what&apos;s been on my mind, and some photos from my camera
          roll that I find funny lol.
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
      </main>
    </div>
  );
}
