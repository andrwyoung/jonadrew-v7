import { Block } from "@/types/block-types";

// For mobile single-column view: read left-to-right, top-to-bottom across columns.
// i.e. col 0 top-to-bottom, then col 1 top-to-bottom, etc.
export function mobileOrderBlocks(blocks: Block[]): Block[] {
  return [...blocks].sort((a, b) => {
    if (a.saved_col_index !== b.saved_col_index) {
      return a.saved_col_index - b.saved_col_index;
    }
    return a.saved_row_index - b.saved_row_index;
  });
}
