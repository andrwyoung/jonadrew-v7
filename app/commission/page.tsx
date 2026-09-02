import { FaqItem } from "@/components/about/faq-item";
import { ProcessStep } from "@/components/commission/process-step";
import { CONTACT_EMAIL } from "@/types/settings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jonadrew - Commissions",
};

export default function Commission() {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  return (
    <div className="flex flex-col flex-1 bg-background text-text">
      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-8 py-24 max-w-2xl mx-auto">
        <h1 className="text-4xl self-start font-bold mt-12 mb-2">
          Commissions
        </h1>
        {/* Availability */}
        <div className="w-full flex flex-col gap-2 mb-4">
          {/* <span className="self-start inline-flex items-center gap-2 text-sm font-semibold text-secondary-text">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            Open for Commissions
          </span> */}
          <p className="text-base leading-relaxed">
            ({currentMonth}/1/{currentYear}) I&apos;m currently{" "}
            <strong>open</strong> to new commissions, but am working through
            some other projects at the moment, so there may be a bit of wait.
            But please do reach out{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Commission Inquiry`}
              className="font-semibold underline hover:text-secondary-text transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        {/* Process */}
        <h2 className="text-3xl self-start font-bold mt-16 mb-2">
          The Process
        </h2>
        <p className="text-base leading-relaxed mb-12">
          I&apos;m always happy and excited to work with new clients. Even
          though every project is different, here&apos;s a guideline on what the
          process generally looks like and what to expect.
        </p>

        <div className="w-full flex flex-col gap-14">
          <ProcessStep index={1} title="Discovery">
            <p className="text-base leading-relaxed mb-2">
              I want to learn about your project! Tell me about what excites
              you, and talk about what you&apos;re imagining. Any images,
              references or written material would be especially helpful.
            </p>
            <p className="text-base leading-relaxed">
              This is also where I&apos;ll give you a project time estimate and
              lock in pricing.
            </p>
          </ProcessStep>
          <ProcessStep index={2} title="Agreement">
            <p className="text-base leading-relaxed mb-2">
              To make sure we&apos;re on the same page, I use a standard artist
              contract. Most notably:
            </p>
            <ol className="w-full list-decimal pl-5 flex flex-col gap-1.5 text-base leading-relaxed mb-3">
              <li>
                A 50% deposit is due before work begins; the rest is due before
                final files are released.
              </li>
              <li>
                The deposit is non-refundable if you cancel. But if I am the one
                canceling, you&apos;re refunded in full within 14 days.
              </li>
              <li>
                Once paid in full, you're free to use the final artwork for all
                personal and commercial purposes worldwide (full details in
                contract).
              </li>
            </ol>
            <a
              href="/artist-contract.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Artist Contract  (PDF)"
              className="self-start text-sm font-semibold underline hover:text-secondary-text transition-colors mb-6"
            >
              Read the full contract (PDF)
            </a>

            <p className="text-base leading-relaxed">
              Once the contract is signed and the deposit received, we&apos;re
              officially working together!
            </p>
          </ProcessStep>
          <ProcessStep index={3} title="Sketch + Rendering">
            <p className="text-base leading-relaxed mb-2">
              I&apos;ll share a rough sketch to nail down composition and
              layout, and we can do a round of revisions to make sure it&apos;s
              what you&apos;re envisioning. This is the best stage for big
              changes.
            </p>
            <p className="text-base leading-relaxed">
              After the sketches are approved, I move on to render and finish
              the piece. I generally check in at least once a week to share the
              progress.
            </p>
          </ProcessStep>

          <ProcessStep index={4} title="Revisions">
            <p className="text-base leading-relaxed">
              Once I feel like the piece is in a good place, I want to check in
              with you before calling it done. We can do up to 2 rounds of small
              revisions to make sure it&apos;s aligned with your vision (full
              details in contract).
            </p>
            {/* <p className="text-base leading-relaxed"></p> */}
          </ProcessStep>
          <ProcessStep index={5} title="Final Delivery">
            <p className="text-base leading-relaxed mb-2">
              Once it looks good to you, I&apos;ll collect the remaining balance
              and send high-res final files. And that&apos;s it!
            </p>
          </ProcessStep>
        </div>

        {/* FAQ */}
        <h2 className="text-3xl self-start font-bold mt-12 mb-2">FAQ</h2>
        <div className="w-full flex flex-col gap-4 mt-2 mb-4">
          <FaqItem question="How much do commissions cost?">
            <p className="text-base leading-relaxed mb-2">
              Every project is a little different, so final pricing depends on
              complexity, size, and usage rights. But generally, character/spot
              illustrations start at <strong>$80</strong>, and full
              illustrations and book covers start at <strong>$600</strong>.
            </p>
          </FaqItem>

          <FaqItem question="Do you provide discounts (students / first time authors)?">
            Sometimes, depending on the project. Feel free to mention your
            situation when reaching out.
          </FaqItem>

          <FaqItem question="How do I get started?">
            Just send an email to{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Commission Inquiry`}
              className="font-semibold underline hover:text-secondary-text transition-colors"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            with a bit about your project, reference images, and your
            budget/timeline! I&apos;ll get back to you within a few days.
          </FaqItem>
        </div>
      </main>
    </div>
  );
}
