// given supabase sections, fetch the number of columns each section is supposed to have

import { supabase } from "@/supabase/supabase-client";

export async function fetchSupabaseSections(
  sectionIds: string[],
): Promise<Record<string, number>> {
  const { data, error } = await supabase
    .from("sections")
    .select("section_id, saved_column_num")
    .in("section_id", sectionIds);

  if (error) {
    throw new Error("Failed to fetch board_sections: " + error.message);
  }

  return Object.fromEntries(
    (data ?? []).map((row) => [row.section_id, row.saved_column_num]),
  );
}
