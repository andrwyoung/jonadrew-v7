import { Block } from "./block-types";

export type SectionData = {
  sectionId: string;

  numColumns: number;
  columns: Block[][]; // columns[colIndex] = blocks sorted by row
  ordered: Block[]; // single-column order for mobile and left/right arrows
};
