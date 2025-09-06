Blueprint Lengkap: Almahira Resto Platform (ERP + POS + PWA)
Dokumen ini adalah panduan arsitektur dan fitur utama untuk membangun platform operasional F&B terintegrasi, dari pemesanan pelanggan hingga laporan investor.

Progres Proyek
✅ Tahapan 1: Fondasi Backend & Keamanan Awal (Selesai)
[x] Inisialisasi Proyek Backend: Membuat struktur proyek NestJS.

[x] Koneksi Database: Menghubungkan NestJS ke PostgreSQL via Docker.

[x] Membuat Entity & Tabel: Membuat tabel users secara otomatis dengan TypeORM.

[x] Hashing Password: Mengimplementasikan bcrypt untuk keamanan password.

[x] Validasi Input: Menggunakan class-validator untuk DTO pada API.

[x] Endpoint Registrasi: Membangun endpoint POST /auth/register.

[x] Endpoint Login: Membangun endpoint POST /auth/login.

[x] Implementasi JWT: Membuat dan memberikan access_token saat login berhasil.

[x] Endpoint Terproteksi: Membuat endpoint GET /auth/profile yang memerlukan token JWT.

🔜 Tahapan 2: Fondasi UI Admin & Manajemen Produk (Berikutnya)
[ ] Inisialisasi Proyek Frontend: Membuat aplikasi Next.js untuk UI Admin.

[ ] Membuat Halaman Login: Merancang form login & menghubungkannya ke backend.

[ ] Manajemen Token di Frontend: Menyimpan access_token di browser setelah login.

[ ] Membuat Layout Admin Dasar: Mendesain layout dengan sidebar dan header.

[ ] Membuat Halaman Terproteksi: Membuat halaman dashboard yang mengambil data dari GET /auth/profile.

[ ] Backend Modul Produk: Membangun CRUD (Create, Read, Update, Delete) untuk Kategori dan Produk.

[ ] Frontend Halaman Produk: Membuat UI untuk menampilkan, menambah, dan mengedit produk.

1. Visi & Tujuan Utama (The "Why")
   Dibangun sebagai Progressive Web App (PWA) → bisa diakses via browser & diinstal seperti aplikasi mobile.

Menyatukan seluruh sistem restoran dari hulu ke hilir (Front-End: customer, Back-End: staff & manajemen).

Meningkatkan efisiensi operasional & memberikan pengalaman modern untuk pelanggan.

Mendukung multi-cabang & multi-tenant (owner dengan banyak restoran).

Mendukung integrasi pajak, akuntansi, food safety, dan franchise untuk kebutuhan enterprise.

2. Target Pengguna & Peran
   Customer: Pesan menu, promo, loyalty, reservasi, tracking pesanan, ulasan, gamifikasi.

Waiter & Kasir: Input order, billing, table management, split bill, refund/void, absensi shift.

Dapur (KDS): Terima order real-time, update status masakan, task checklist.

Purchasing & Gudang: Monitoring stok, PR/PO, supplier, barcode scanning, auto-alert stok, waste tracking.

Admin: Kelola menu, harga, promo, data karyawan, approval workflow.

Manajemen: Dashboard KPI, laporan real-time multi-cabang, audit log, analitik biaya.

Owner: Laporan konsolidasi, approval global, kontrol master (multi-tenant), franchise fee.

Supplier (opsional): Akses portal vendor untuk PO, update stok, rating performa.

Akuntan / Finance: Integrasi laporan keuangan, pajak, payroll.

3. Arsitektur Teknis
   Frontend: React (Next.js PWA) + TailwindCSS + Service Worker (offline-first).

Backend: Node.js (NestJS) / Go (untuk service performa tinggi).

Database: PostgreSQL cluster (multi-region, HA) + Redis (cache, session).

Message Broker: RabbitMQ (POS→KDS) + Kafka (event streaming).

Storage: S3 compatible.

Deployment: Cloud (AWS/GCP/Azure), CI/CD pipeline (Blue-Green deployment, Feature Flag).

Monitoring: Prometheus + Grafana, ELK Stack, Sentry (error tracking), RUM.

BI & Analytics: Data Lake (BigQuery/Snowflake) untuk analitik & forecasting.

AI Engine: TensorFlow, PyTorch, atau Vertex AI untuk demand forecasting, rekomendasi, dan deteksi penipuan.

4. Backend: Kebutuhan Layanan (Microservices)
   Layanan Fondasi (Core Services)
   Layanan Otentikasi & Otorisasi: Registrasi & Login, Manajemen Peran & Hak Akses (RBAC), Penerbitan Token (JWT).

Layanan Pengguna: CRUD profil pengguna dan staf, Manajemen data pelanggan (CRM).

Layanan Operasional (Operational Services)
Layanan Produk & Menu: CRUD Kategori & Produk, Manajemen Resep (BOM), Manajemen Varian & Modifiers.

Layanan Inventaris: Manajemen Stok Real-time, Pemotongan Stok Otomatis (BOM), Stock-In/Out/Opname, Pelacakan FEFO, Low-Stock Alert.

Layanan Pemesanan & Transaksi: Logika pembuatan pesanan (Dine-in, Takeaway, Delivery), Integrasi KDS, Integrasi Payment Gateway, Logika diskon, promo, pajak.

Layanan Loyalty & Promo: Mesin pembuatan kode promo/voucher, Logika poin loyalitas.

Layanan Korporat (Corporate Services)
Layanan Rantai Pasok (Supply Chain): Manajemen Vendor, Alur kerja Purchase Request (PR) & Purchase Order (PO), Penerimaan Barang (GRN).

Layanan Keuangan: Agregasi data penjualan & biaya, API Laporan Laba/Rugi (P&L), Logika perhitungan dividen.

Layanan Analitik & Laporan (BI Service): API data teragregasi untuk dashboard, Proses ETL ke database analitik.

5. Frontend: Kebutuhan Halaman & Modul
   A. Modul Pelanggan & Publik
   Halaman Utama/Landing Page

Halaman Menu Digital (via QR Code)

Alur Pemesanan: Keranjang Belanja → Checkout → Pembayaran → Status Pesanan.

Dashboard Pelanggan: Profil, Riwayat Pesanan, Poin Loyalitas & Voucher.

B. Modul Staf (Kasir, Pelayan, Dapur)
Halaman Login Staf (PIN/Password).

Dashboard Kasir (POS Interface): Peta Meja (Floor Plan), Antrian Pesanan, Form Input Manual, Fungsionalitas Pembayaran (split bill, dll), Buka/Tutup Sesi Kasir.

Dashboard Dapur (KDS Interface): Tampilan kartu pesanan real-time dengan status.

C. Modul Manajer Outlet & Gudang
Dashboard Manajer: Ringkasan penjualan, Peringatan stok.

Halaman Manajemen Inventaris: Form Stock Opname, Form barang masuk, Riwayat stok.

Halaman Manajemen Pengadaan: Form pembuatan Purchase Request (PR).

Halaman Laporan Sederhana: Penjualan harian, Menu terlaris.

D. Modul Super Admin / Owner
Dashboard BI Terpusat: Visualisasi data & grafik penjualan semua outlet.

Halaman Manajemen Master: Manajemen Outlet, Produk & Harga, Resep (BOM), Vendor, Promo & Loyalitas.

Halaman Keuangan (ERP): Laporan Laba/Rugi (P&L), Perhitungan dividen.

Halaman Manajemen Pengguna: CRUD akun staf & manajer, Pengaturan peran & hak akses.

6. Keamanan & Kepatuhan (Security & Compliance)
   Auth: JWT + OAuth2 (role-based access control), MFA, SSO.

Data: Enkripsi AES (at-rest) + TLS 1.3 (in-transit).

Payment: Kepatuhan PCI-DSS, tokenisasi kartu, 3DSecure 2.0.

Audit Trail: Semua transaksi dan perubahan penting tercatat (immutable log).

Infrastruktur: Web Application Firewall (WAF), Rate Limiting, Manajemen Rahasia (Vault/Secrets Manager).

Kepatuhan Lokal: Peraturan PSE Kominfo, Perpajakan lokal (PPN, PB1).

7. Roadmap & Timeline (Gambaran Besar)
   Phase 1 (MVP – 3 bulan): Customer ordering, POS basic, Payment, Inventory basic.

Phase 2 (Beta – 3 bulan): KDS, Loyalty, Promo, Reporting dasar, Gamification.

Phase 3 (Production – 4 bulan): Multi-branch, Multi-tenant, Advanced reporting, Integrasi supplier.

Phase 4 (Scale Up – ongoing): Integrasi layanan delivery, HR/Payroll, Franchise Management.

Phase 5 (AI & Analytics): AI demand forecasting, recommendation engine, dynamic pricing.

Phase 6 (IoT & Ecosystem Expansion): Smart Kitchen IoT, Food Safety, Loyalty cross-merchant, API Marketplace.

Phase 7 (Finance & Compliance): Akuntansi penuh, Pajak otomatis, Sustainability & Carbon Tracking.
