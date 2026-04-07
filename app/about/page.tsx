import { NewsletterForm } from "@/components/about/newsletter-form";
import { ProfileImage } from "@/components/about/profile-image";
import { SocialIcon } from "@/components/about/social-icon";
import { Metadata } from "next";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

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
          Hi, I&apos;m Andrew, an illustrator working on comics, book covers,
          and board game art. <br />
          <br />
          I started off studying math and working as a Software Engineer, but I
          chose to leave because I wanted to impact people&apos;s lives through
          art. I&apos;ve since worked across dozens of book covers, hundreds of
          comic pages, and a handful of board games, and I&apos;d love to help
          bring your vision to life.
          <br />
          <br />
          I like making approachable art, but what excites me most is using it
          to also explore complex truths and tell stories that stick with you.
          <br />
          <br />
          If you&apos;re curious to learn more about my journey or what I&apos;m
          actually up to today, I&apos;ve been sharing my art and thoughts every
          other Wednesday since the day I quit my Software job in 2022. I would
          love to have you!
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
            old posts here
          </a>{" "}
          or even sign up here:
        </p>
        <NewsletterForm />

        <div className="flex gap-4 items-center mb-1">
          <SocialIcon
            href="mailto:andrew@jonadrew.com"
            title="Send email to Andrew"
            icon={<MdEmail className="size-6" />}
          />
          <SocialIcon
            href="https://github.com/andrwyoung/jonadrew-v7"
            title="See this website's code"
            icon={<FaGithub className="size-5.5" />}
          />
          <SocialIcon
            href="https://linkedin.com/in/andrwyoung"
            title="Visit Andrew's LinkedIn"
            icon={<FaLinkedin className="size-5.5" />}
          />
        </div>
      </main>
    </div>
  );
}
