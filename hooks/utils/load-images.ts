import { fetchSupabaseBlocks } from "@/lib/fetch-images";
import { fetchSupabaseSections } from "@/lib/fetch-section";
import { Block } from "@/types/block-types";
import { PORTFOLIO_SECTIONS } from "@/types/configs/portfolio-config";
import { SectionData } from "@/types/section-types";
import { useState, useEffect } from "react";

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

type Positioned = { block: Block; top: number; height: number };
function mobileOrderBlocks(blocks: Block[]): Block[] {
  if (blocks.length === 0) return [];

  // Build columns sorted by saved_row_index
  const numColumns = Math.max(...blocks.map((b) => b.saved_col_index)) + 1;
  const rawColumns: Block[][] = Array.from({ length: numColumns }, () => []);
  for (const block of blocks) {
    rawColumns[block.saved_col_index].push(block);
  }
  for (const col of rawColumns) {
    col.sort((a, b) => a.saved_row_index - b.saved_row_index);
  }

  // Compute tops using aspect ratio with normalized column width = 1
  const columns: Positioned[][] = rawColumns.map((col) => {
    let top = 0;
    return col.map((block) => {
      const height = block.width ? block.height / block.width : 1;
      const positioned = { block, top, height };
      top += height;
      return positioned;
    });
  });

  // Midpoint sweep: anchor on topmost unvisited block in leftmost column,
  // sweep right collecting blocks whose top <= anchor midpoint
  const ordered: Block[] = [];
  const visited = new Set<string>();
  const pointers = Array(columns.length).fill(0);

  while (true) {
    let anchor: Positioned | null = null;
    let anchorCol = 0;

    for (let col = 0; col < columns.length; col++) {
      while (
        pointers[col] < columns[col].length &&
        visited.has(columns[col][pointers[col]].block.block_id)
      ) {
        pointers[col]++;
      }
      if (pointers[col] < columns[col].length) {
        anchor = columns[col][pointers[col]];
        anchorCol = col;
        break;
      }
    }

    if (!anchor) break;

    const anchorMid = anchor.top + anchor.height / 2;

    for (let col = anchorCol; col < columns.length; col++) {
      for (let i = pointers[col]; i < columns[col].length; i++) {
        const p = columns[col][i];
        if (visited.has(p.block.block_id)) continue;
        if (p.top <= anchorMid) {
          ordered.push(p.block);
          visited.add(p.block.block_id);
          pointers[col] = i + 1;
        } else {
          break;
        }
      }
    }
  }

  return ordered;
}

export function useLoadImages() {
  const [sections, setSections] = useState<SectionData[]>([]);
  const [loading, setLoading] = useState(true);

  // grab all the images
  useEffect(() => {
    async function loadImages() {
      const sectionIds = PORTFOLIO_SECTIONS.map((s) => s.id);
      const [sectionCols, blocksBySectionId] = await Promise.all([
        fetchSupabaseSections(sectionIds),
        fetchSupabaseBlocks(sectionIds),
      ]);

      const result: SectionData[] = PORTFOLIO_SECTIONS.map((section) => {
        const numColumns = sectionCols[section.id] ?? 1;
        const blocks = blocksBySectionId[section.id] ?? [];
        return {
          sectionId: section.id,
          title: section.title,
          numColumns,
          columns: buildColumns(blocks, numColumns),
          ordered: mobileOrderBlocks(blocks),
        };
      });
      setSections(result);
      setLoading(false);
    }

    loadImages();
  }, []);

  return { sections, loading };
}
