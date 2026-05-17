export function FaqItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  return (
    <details className="w-full group">
      <summary className="cursor-pointer text-base font-semibold list-none flex items-center justify-between gap-2 py-2 border-b border-current/20 select-none">
        {question}
        <span className="text-sm transition-transform group-open:rotate-180">
          ▾
        </span>
      </summary>
      <p className="text-base leading-relaxed pt-3">{children}</p>
    </details>
  );
}
