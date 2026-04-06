"use client";

import { fetchSupabaseBlocks } from "@/lib/fetch-images";
import { BOOK_COVER_SECTION_ID } from "@/types/settings";
import { useEffect } from "react";

export default function Galleries() {
  useEffect(() => {
    async function loadImages() {
      const images = await fetchSupabaseBlocks([BOOK_COVER_SECTION_ID]);

      console.log("got images", images);
    }

    loadImages();
  }, []);

  return <div>galleries</div>;
}
