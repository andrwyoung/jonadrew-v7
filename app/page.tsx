import Portfolio from "@/components/homepage/portfolio";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-background text-text">
      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-8 py-24">
        <h1
          className="text-5xl"
          style={{ fontFamily: "var(--font-jonadrew-logo)" }}
        >
          Jonadrew
        </h1>
        <h2 className="text-xl text-secondary-text">
          Illustrations by Andrew Yong
        </h2>
        <p className="mt-4 max-w-md text-center text-base leading-relaxed">
          Comics, book covers, and board game art.
        </p>

        <Portfolio />
      </main>
    </div>
  );
}
