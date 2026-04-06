"use client";

import { fetchSupabaseBlocks } from "@/lib/fetch-images";
import { fetchSupabaseSections } from "@/lib/fetch-section";
import { BOOK_COVER_SECTION_ID } from "@/types/settings";
import { useEffect } from "react";

export default function Galleries() {
  useEffect(() => {
    async function loadImages() {
      const [sections, blocksBySectionId] = await Promise.all([
        fetchSupabaseSections([BOOK_COVER_SECTION_ID]),
        fetchSupabaseBlocks([BOOK_COVER_SECTION_ID]),
      ]);

      const sectionData = Object.fromEntries(
        Object.keys(sections).map((id) => [
          id,
          {
            numColumns: sections[id],
            blocks: blocksBySectionId[id] ?? [],
          },
        ]),
      );

      console.log("got section column counts", sectionData);
    }

    loadImages();
  }, []);

  return <div>galleries</div>;
}
