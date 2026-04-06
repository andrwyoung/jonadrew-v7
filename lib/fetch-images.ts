// DATABASE FETCH

// grab blocks from database. convert to naming convention we use locally
// if it's an image, convert to MudboardImage. if text, convert to TextBlock

import { Block } from "../types/block-types";
import { supabase } from "../supabase/supabase-client";
import { IMAGE_SIZE, R2_OBJECT_URL } from "@/types/settings";

// given a section id, fetch that section for

export async function fetchSupabaseBlocks(
  sectionIds: string[],
): Promise<Record<string, Block[]>> {
  const { data: blocks, error } = await supabase
    .from("blocks")
    .select(
      `
      *,
      image:images (
        image_id,
        file_ext,
        blurhash
      )
    `,
    )
    .in("section_id", sectionIds)
    .eq("deleted", false)
    .eq("block_type", "image"); // grab only images

  if (error) {
    throw new Error("Failed to fetch Blocks: " + error.message);
  }

  const blocksArray: Block[] = (blocks || [])
    .filter((block) => block.image)
    // then map what we have from the db to our local types
    .map((block): Block => {
      const {
        block_id,
        image_id,
        section_id,
        height,
        width,
        col_index,
        row_index,
        order_index,
        image,
      } = block;

      return {
        block_id,
        image_id: image_id ?? undefined,
        data: {
          image_id: image!.image_id,
          blurhash: image!.blurhash ?? undefined,
          fileName: `${R2_OBJECT_URL}/${image!.image_id}/${IMAGE_SIZE}.${image!.file_ext}`,
        },

        section_id,
        height,
        width: width ?? undefined,
        saved_col_index: col_index,
        saved_row_index: row_index,
        saved_order_index: order_index,
      };
    });

  // group by section_id
  const grouped: Record<string, Block[]> = {};
  for (const block of blocksArray) {
    const key = block.section_id;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(block);
  }

  return grouped;
}
