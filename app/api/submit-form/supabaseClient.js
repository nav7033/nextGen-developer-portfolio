import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://afdxjpvhgxpbpuaxyncf.supabase.co"
const supabaseKey = "sb_publishable_KInkB0BE8rSuY6xHNvDNfQ_bMI2v3yy";

export const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;