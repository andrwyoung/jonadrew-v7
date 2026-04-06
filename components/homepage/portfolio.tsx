"use client";

import { fetchSupabaseBlocks } from "@/lib/fetch-images";
import { fetchSupabaseSections } from "@/lib/fetch-section";
import { mobileOrderBlocks } from "@/lib/mobile-ordering";
import { Block } from "@/types/block-types";
import { BOOK_COVER_SECTION_ID } from "@/types/settings";
import { useEffect, useState } from "react";

type SectionData = {
  numColumns: number;
  columns: Block[][]; // columns[colIndex] = blocks sorted by row
  mobileBlocks: Block[]; // single-column order for mobile
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

function buildColumns(blocks: Block[], numColumns: number): Block[][] {
  const columns: Block[][] = Array.from({ length: numColumns }, () => []);
  for (const block of blocks) {
    const col = Math.min(block.saved_col_index, numColumns - 1);
    columns[col].push(block);
  }
  for (const col of columns) {
    col.sort((a, b) => a.saved_row_index - b.saved_row_index);
  }
  return columns;
}

export default function Portfolio() {
  const [sections, setSections] = useState<Record<string, SectionData>>({});
  const isMobile = useIsMobile();

  useEffect(() => {
    async function loadImages() {
      const [sectionCols, blocksBySectionId] = await Promise.all([
        fetchSupabaseSections([BOOK_COVER_SECTION_ID]),
        fetchSupabaseBlocks([BOOK_COVER_SECTION_ID]),
      ]);

      const result: Record<string, SectionData> = {};
      for (const id of Object.keys(sectionCols)) {
        const numColumns = sectionCols[id];
        const blocks = blocksBySectionId[id] ?? [];
        result[id] = {
          numColumns,
          columns: buildColumns(blocks, numColumns),
          mobileBlocks: mobileOrderBlocks(blocks),
        };
      }
      setSections(result);
    }

    loadImages();
  }, []);

  return (
    <div className="w-full flex flex-col gap-12">
      {Object.entries(sections).map(([sectionId, section]) =>
        isMobile ? (
          // Single column on mobile, ordered col-by-col
          <div key={sectionId} className="flex flex-col gap-2">
            {section.mobileBlocks.map((block) => (
              <BlockCard key={block.block_id} block={block} />
            ))}
          </div>
        ) : (
          // Multi-column grid on desktop
          <div
            key={sectionId}
            className="grid gap-2"
            style={{
              gridTemplateColumns: `repeat(${section.numColumns}, 1fr)`,
            }}
          >
            {section.columns.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-2">
                {col.map((block) => (
                  <BlockCard key={block.block_id} block={block} />
                ))}
              </div>
            ))}
          </div>
        ),
      )}
    </div>
  );
}

function BlockCard({ block }: { block: Block }) {
  if (!block.data) return null;

  const aspect =
    block.width && block.height ? block.height / block.width : undefined;

  return (
    <div
      className="w-full bg-gray-100 overflow-hidden rounded-md"
      style={
        aspect
          ? { paddingBottom: `${aspect * 100}%`, position: "relative" }
          : {}
      }
    >
      <img
        src={block.data.fileName}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
