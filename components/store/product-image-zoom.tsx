"use client";

import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

interface Props {
  src: string;
  alt: string;
}

export function ProductImageZoom({ src, alt }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div
        className="bg-stone-100 rounded-lg overflow-hidden cursor-zoom-in"
        onClick={() => setOpen(true)}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>

      {open && (
        <div
          className="fixed inset-0 z-200 flex items-center justify-center bg-stone-900/80"
          onClick={() => setOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-md"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl px-3 py-2 hover:bg-white/10 rounded cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <FaXmark />
          </button>
        </div>
      )}
    </>
  );
}
