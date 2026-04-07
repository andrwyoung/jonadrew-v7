import { NewsletterForm } from "@/components/about/newsletter-form";
import { SocialIcon } from "@/components/about/social-icon";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function About() {
  return (
    <div className="flex flex-col flex-1 bg-background text-text">
      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-8 py-24 max-w-2xl mx-auto">
        <Image
          src="/face.jpeg"
          alt="Andrew Yong"
          width={240}
          height={240}
          className="rounded-full object-cover"
        />

        <h1 className="text-4xl self-start font-bold">About</h1>
        <p className="text-base leading-relaxed mb-2">
          Hi, I&apos;m Andrew — an illustrator working on comics, book covers,
          and board game art. <br />
          <br />
          Check out the{" "}
          <a
            href="https://blog.jonadrew.com/profile"
            className="font-semibold underline hover:text-secondary-text transition-colors"
          >
            old posts here
          </a>
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
