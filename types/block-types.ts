// types for blocks

export type Block = {
  block_id: string;
  section_id: string;

  image_id?: string;
  data: MudboardImage | null; // the real data

  height: number;
  width?: number;

  // this is the initial order
  saved_col_index: number;
  saved_row_index: number;
  saved_order_index: number;
};

export type MudboardImage = {
  image_id: string;
  blurhash?: string;

  fileName: string; // the URL
};
