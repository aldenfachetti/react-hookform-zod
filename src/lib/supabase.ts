import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   "https://wbkysnbenoisidsmnmxe.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6India3lzbmJlbm9pc2lkc21ubXhlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTIwNjE5NywiZXhwIjoxOTk2NzgyMTk3fQ.cshkyQlE1_k2NgNHwRiDeak3PQuhZTlnicr9UyVSouM"
// );

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
