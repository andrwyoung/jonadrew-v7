export function ProcessStep({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-text font-header font-bold flex items-center justify-center">
        {index}
      </div>
      <div className="flex flex-col gap-1 pb-2">
        <h3 className="text-lg font-header font-semibold">{title}</h3>
        {children}
      </div>
    </div>
  );
}
