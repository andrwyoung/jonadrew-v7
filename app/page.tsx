import Portfolio from "@/components/homepage/portfolio";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-background text-text">
      <main className="flex flex-1 flex-col items-center justify-center sm:px-8 px-2 py-24">
        <div className="flex flex-col items-center justify-center pb-24">
          <button className="text-7xl font-logo mb-1">Portfolio</button>
          <h2 className="text-xl font-semibold">
            Illustrations by Andrew Yong
          </h2>
          {/* <p className="mt-4 max-w-md text-center text-base leading-relaxed">
          Comics, book covers, and board game art.
        </p> */}
        </div>

        <Portfolio />
      </main>
    </div>
  );
}
