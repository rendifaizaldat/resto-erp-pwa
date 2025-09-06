# Prinsip & Aturan Konsistensi Proyek

Dokumen ini adalah panduan untuk menjaga kualitas, konsistensi, dan maintainability proyek dalam jangka panjang. Setiap kontribusi (bahkan oleh satu orang) harus mematuhi prinsip-prinsip berikut.

---

## 1. Prinsip Arsitektur

1.  **Modular:** Kode harus diorganisir ke dalam modul-modul fungsional yang independen (Auth, Inventory, POS, dll.). Perubahan di satu modul tidak boleh merusak modul lain.
2.  **API-First:** Interaksi antar modul (jika diperlukan) atau antara frontend dan backend harus melalui kontrak API yang jelas dan terdefinisi dengan baik.
3.  **Clean & Decoupled:** Logika bisnis inti harus dibuat seindependen mungkin dari framework. Hindari mencampur aduk query database langsung di dalam komponen UI.

---

## 2. Filosofi Testing

- Setiap logika bisnis yang krusial **harus** memiliki _unit test_.
- Alur kerja pengguna yang penting (seperti proses checkout) **harus** memiliki _end-to-end test_.
- Kita mengadopsi mindset **Test-Driven Development (TDD)** sebisa mungkin: tulis tes yang gagal terlebih dahulu, baru tulis kode untuk membuatnya berhasil.
