// Mengimpor tipe User bawaan dari Supabase untuk kita perluas
import type { User } from "@supabase/supabase-js";

// Mendefinisikan peran (roles) yang ada di dalam sistem kita.
// Menggunakan tipe ini akan mencegah kesalahan ketik (typo).
export type UserRole = "admin" | "manajer" | "kasir" | "dapur";

// Ini adalah tipe data untuk tabel "profiles" kustom kita di database.
// Tabel ini berisi informasi tambahan yang tidak ada di sistem auth bawaan Supabase.
export interface Profile {
  id: string; // Harus sama dengan ID dari Supabase Auth User
  full_name: string;
  avatar_url?: string; // Tanda tanya (?) berarti properti ini tidak wajib (opsional)
  role: UserRole;
  outlet_id?: string; // Opsional, untuk mengaitkan staf dengan outlet tertentu
  updated_at: string;
}

// Kita gabungkan tipe User bawaan Supabase dengan Profile kustom kita
// agar kita memiliki satu objek lengkap yang berisi semua informasi pengguna.
export type AppUser = User & {
  profile: Profile;
};
