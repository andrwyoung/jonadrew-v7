"use client";

import { useState, useCallback } from "react";
import { useLoadImages } from "@/hooks/utils/load-images";
import { useIsMobile } from "@/hooks/utils/use-is-mobile";
import Gallery from "./gallery";
import ImageOverlay from "./image-overlay";
import LoadingScreen from "./loading-screen";

export default function Portfolio() {
  const isMobile = useIsMobile();
  const { sections, loading } = useLoadImages();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const allOrdered = sections.flatMap((s) => s.ordered);

  const handleImageClick = useCallback(
    (id: string) => {
      const idx = allOrdered.findIndex((b) => b.block_id === id);
      if (idx !== -1) setActiveIndex(idx);
    },
    [allOrdered],
  );

  return (
    <>
      <LoadingScreen visible={loading} />
      <div className="w-full flex flex-col gap-12">
        {sections.map((section) => (
          <Gallery
            key={section.sectionId}
            isMobile={isMobile}
            data={section}
            onImageClick={handleImageClick}
          />
        ))}

        {activeIndex !== null && (
          <ImageOverlay
            blocks={allOrdered}
            activeIndex={activeIndex}
            onClose={() => setActiveIndex(null)}
            onPrev={() => setActiveIndex((i) => (i !== null ? i - 1 : null))}
            onNext={() => setActiveIndex((i) => (i !== null ? i + 1 : null))}
          />
        )}
      </div>
    </>
  );
}
