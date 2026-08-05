import ConfettiTitle from "@/components/confetti-title";
import Portfolio from "@/components/homepage/portfolio";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-background text-text">
      <main className="flex flex-1 flex-col items-center justify-center sm:px-8 px-4 pt-24">
        <div className="flex flex-col items-center text-center justify-center pb-24">
          <ConfettiTitle text="Portfolio" />
          <h2 className="text-lg font-semibold mt-4">
            Fantasy Book Covers and Comics by Andrew Yong
          </h2>
          {/* <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-header font-semibold mt-1 underline hover:text-secondary-text transition-colors"
          >
            {CONTACT_EMAIL}
          </a> */}
          <a
            href={"https://www.andrewyong.art/"}
            target="_blank"
            rel="noopener noreferrer"
            title={"Food Illustration Portfolio"}
            className="font-header text-stone-400 font-semibold mt-2 underline text-sm hover:text-secondary-text transition-colors"
          >
            Editoral portfolio on different site →
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
