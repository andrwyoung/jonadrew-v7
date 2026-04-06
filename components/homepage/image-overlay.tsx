"use client";

import { useEffect } from "react";
import { Block } from "@/types/block-types";
import { FaAngleLeft, FaAngleRight, FaX, FaXmark } from "react-icons/fa6";

export default function ImageOverlay({
  blocks,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: {
  blocks: Block[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const block = blocks[activeIndex];

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  if (!block?.data) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 "
      onClick={onClose}
    >
      {/* Image */}
      <img
        src={block.data.fileName}
        alt=""
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-md"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Prev */}
      {activeIndex > 0 && (
        <button
          className="absolute left-4 text-white text-3xl px-3 py-2 hover:bg-white/10 cursor-pointer rounded"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        >
          <FaAngleLeft />
        </button>
      )}

      {/* Next */}
      {activeIndex < blocks.length - 1 && (
        <button
          className="absolute right-4 text-white text-3xl px-3 py-2 hover:bg-white/10 rounded cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          <FaAngleRight />
        </button>
      )}

      {/* Close */}
      <button
        className="absolute top-4 right-4 text-white text-2xl px-3 py-2 hover:bg-white/10 rounded cursor-pointer"
        onClick={onClose}
      >
        <FaXmark />
      </button>
    </div>
  );
}
