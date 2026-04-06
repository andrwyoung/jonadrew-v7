export default function About() {
  return (
    <div className="flex flex-col flex-1 bg-background text-text">
      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-8 py-24 max-w-2xl mx-auto">
        <h1 className="text-4xl self-start">About</h1>
        <p className="text-base leading-relaxed text-secondary-text">
          Hi, I&apos;m Andrew — an illustrator working on comics, book covers, and
          board game art.
        </p>
      </main>
    </div>
  );
}
