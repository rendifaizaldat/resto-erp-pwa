# Prinsip & Aturan Konsistensi Proyek

Dokumen ini adalah panduan untuk menjaga kualitas, konsistensi, dan maintainability proyek dalam jangka panjang. Setiap kontribusi (bahkan oleh satu orang) harus mematuhi prinsip-prinsip berikut.

---

## 1. Prinsip Arsitektur

1.  **Modular:** Kode harus diorganisir ke dalam modul-modul fungsional yang independen (Auth, Inventory, POS, dll.). Perubahan di satu modul tidak boleh merusak modul lain.
2.  **API-First:** Interaksi antar modul (jika diperlukan) atau antara frontend dan backend harus melalui kontrak API yang jelas dan terdefinisi dengan baik.
3.  **Clean & Decoupled:** Logika bisnis inti harus dibuat seindependen mungkin dari framework. Hindari mencampur aduk query database langsung di dalam komponen UI.

---

## 2. Aturan Penulisan Kode (Coding Style)

- **Bahasa:** Kode, komentar, dan nama variabel ditulis dalam Bahasa Inggris.
- **Linter & Formatter:** Kita menggunakan **ESLint** dan **Prettier** untuk menjaga konsistensi gaya penulisan kode secara otomatis. Konfigurasi akan disimpan di dalam file `.eslintrc` dan `.prettierrc`.
- **Naming Convention:**
  - `camelCase` untuk variabel dan fungsi (e.g., `totalPrice`).
  - `PascalCase` untuk komponen React/class (e.g., `MenuItemCard`).
  - `UPPER_CASE_SNAKE` untuk konstanta (e.g., `MAX_RETRIES`).

---

## 3. Aturan Git & Version Control

- **Branching:** Pekerjaan tidak dilakukan langsung di branch `main`. Buat branch baru untuk setiap fitur atau perbaikan (e.g., `feat/authentication`, `fix/login-bug`).
- **Commit Messages:** Kita mengikuti standar **Conventional Commits**. Setiap pesan commit harus diawali dengan tipe, contoh:
  - `feat:` (untuk fitur baru)
  - `fix:` (untuk perbaikan bug)
  - `docs:` (untuk perubahan dokumentasi)
  - `style:` (untuk formatting, tanpa perubahan logika)
  - `refactor:` (refactoring kode)
  - `test:` (menambah atau memperbaiki tes)
  - Contoh pesan: `feat: add user registration endpoint`

---

## 4. Filosofi Testing

- Setiap logika bisnis yang krusial **harus** memiliki _unit test_.
- Alur kerja pengguna yang penting (seperti proses checkout) **harus** memiliki _end-to-end test_.
- Kita mengadopsi mindset **Test-Driven Development (TDD)** sebisa mungkin: tulis tes yang gagal terlebih dahulu, baru tulis kode untuk membuatnya berhasil.
