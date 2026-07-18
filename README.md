# CAKRA-AI — Website

Landing page publik CAKRA-AI. Tugasnya cuma satu: menjelaskan produk dan
mengarahkan pengunjung untuk instalasi lokal dari GitHub. Tidak ada
login/daftar di sini — itu ada di aplikasi utama (folder root repo).

Proyek Next.js ini sengaja dipisah dari aplikasi utama (yang butuh
Prisma + PostgreSQL + Socket.IO custom server) supaya bisa di-deploy ke
Vercel sebagai static/serverless site biasa, tanpa dependensi berat.

## Jalankan lokal

```bash
npm install
npm run dev
```

## Deploy ke Vercel

1. Import repo `CAKRA-AI` di Vercel.
2. Di **Project Settings → General → Root Directory**, set ke `website`.
3. Framework preset: Next.js (otomatis terdeteksi). Tidak ada environment
   variable wajib untuk situs ini.
4. Deploy.
