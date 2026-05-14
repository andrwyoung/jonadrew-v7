"use client";

import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

interface Props {
  srcs: string[];
  alt: string;
}

export function ProductImageZoom({ srcs, alt }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (openIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <>
      <div className="flex flex-col gap-4">
        {srcs.map((src, i) => (
          <div
            key={src}
            className="bg-stone-200 rounded-lg overflow-hidden cursor-zoom-in min-h-48"
            onClick={() => setOpenIndex(i)}
          >
            <img
              src={src}
              alt={`${alt} ${i + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-300 ${loaded.has(i) ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setLoaded((prev) => new Set(prev).add(i))}
            />
          </div>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-200 flex items-center justify-center bg-stone-900/80"
          onClick={() => setOpenIndex(null)}
        >
          <img
            src={srcs[openIndex]}
            alt={`${alt} ${openIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-md"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl px-3 py-2 hover:bg-white/10 rounded cursor-pointer"
            onClick={() => setOpenIndex(null)}
          >
            <FaXmark />
          </button>
        </div>
      )}
    </>
  );
}
