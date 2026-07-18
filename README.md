# CAKRA-AI — Website

Landing page publik CAKRA-AI. Tugasnya cuma satu: menjelaskan produk dan
mengarahkan pengunjung untuk instalasi lokal dari GitHub. Tidak ada
login/daftar di sini — itu ada di aplikasi utama, [CAKRA-AI](https://github.com/monn01/CAKRA-AI).

Repo ini sengaja terpisah dari aplikasi utama (yang butuh Prisma +
PostgreSQL + Socket.IO custom server) supaya bisa di-deploy ke Vercel
sebagai static/serverless site biasa, tanpa dependensi berat.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router) + TypeScript
- Tailwind CSS v4
- [`gray-matter`](https://www.npmjs.com/package/gray-matter) + [`marked`](https://www.npmjs.com/package/marked) untuk blog berbasis Markdown

## Struktur halaman

| Route | Isi |
|---|---|
| `/` | Landing page — hero, fitur, cara kerja, instalasi |
| `/docs` | Dokumentasi teknis — prasyarat, instalasi per platform, konfigurasi, arsitektur |
| `/guide` | Panduan pakai setelah instalasi |
| `/blog` | Tulisan & cerita dari sekolah (lihat bagian **Menambah tulisan blog** di bawah) |
| `/changelog` | Riwayat pembaruan produk CAKRA-AI |

## Jalankan lokal

```bash
npm install
npm run dev
```

## Menambah tulisan blog

Blog berbasis file Markdown, tanpa CMS. Untuk menambah tulisan baru:

1. Buat file `.md` baru di `src/content/blog/`.
2. Isi frontmatter di bagian atas:

   ```md
   ---
   title: "Judul Tulisan"
   date: "2026-08-01"
   excerpt: "Ringkasan satu-dua kalimat, tampil di kartu daftar blog."
   author: "Nama Kamu"
   ---

   Isi tulisan mulai dari sini, pakai Markdown biasa.
   ```

3. Simpan filenya — tulisan otomatis muncul di `/blog` (terurut dari yang
   terbaru) dan dapat halaman sendiri di `/blog/nama-file`. Tidak perlu
   menyentuh kode React sama sekali.

## Deploy ke Vercel

1. Import repo [`CAKRA-web`](https://github.com/monn01/CAKRA-web) di Vercel.
2. Framework preset: Next.js (otomatis terdeteksi). Root directory = root
   repo (tidak perlu diubah). Tidak ada environment variable wajib untuk
   situs ini.
3. Deploy.
