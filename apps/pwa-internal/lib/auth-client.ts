// Mengimpor library yang diperlukan dari Supabase
import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

// Fungsi ini akan membuat dan mengembalikan satu instance client Supabase.
// Kita menggunakan createBrowserClient untuk PWA Next.js.
function getSupabaseBrowserClient(): SupabaseClient {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

/**
 * Fungsi untuk melakukan login pengguna.
 * Menerima email dan password, lalu memanggil Supabase.
 * @returns {Promise<object>} Objek yang berisi data atau error.
 */
export async function signInWithPassword(credentials: {
  email?: string;
  password?: string;
}) {
  const supabase = getSupabaseBrowserClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: credentials.email!,
    password: credentials.password!,
  });

  if (error) {
    console.error("Error signing in:", error.message);
  }

  return { data, error };
}

/**
 * Fungsi untuk melakukan logout pengguna.
 */
export async function signOut() {
  const supabase = getSupabaseBrowserClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error signing out:", error.message);
  }

  return { error };
}

/**
 * Fungsi untuk mendapatkan data pengguna yang sedang aktif sesinya.
 * Berguna untuk memeriksa apakah pengguna sudah login atau belum.
 */
export async function getCurrentUser() {
  const supabase = getSupabaseBrowserClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }

  return data.user;
}
