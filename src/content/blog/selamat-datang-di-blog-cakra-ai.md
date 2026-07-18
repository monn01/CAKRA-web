---
title: "Selamat datang di blog CAKRA-AI"
date: "2026-07-18"
excerpt: "Blog ini tempat kami menulis cerita, catatan pengembangan, dan tips seputar pemakaian CAKRA-AI di kelas."
author: "Tim CAKRA-AI"
---

CAKRA-AI dibangun untuk satu masalah sederhana: guru menghabiskan banyak waktu menyusun rangkuman, peta pikiran, dan soal latihan secara manual setelah mengajar — padahal semua bahannya sudah ada di apa yang mereka ucapkan di depan kelas.

Blog ini akan berisi:

- **Cerita dari sekolah** yang sudah memakai CAKRA-AI di kelasnya.
- **Catatan pengembangan** — keputusan teknis, perubahan arsitektur, alasan di baliknya.
- **Tips pemakaian** — cara memaksimalkan fitur proyektor, kuis, dan resume QR.

## Cara menambah tulisan baru

Blog ini berbasis file Markdown biasa. Untuk menambah postingan baru:

1. Buat file `.md` baru di folder `src/content/blog/`.
2. Isi bagian atasnya dengan frontmatter:

```md
---
title: "Judul Tulisan"
date: "2026-08-01"
excerpt: "Ringkasan satu-dua kalimat, tampil di kartu daftar blog."
author: "Nama Kamu"
---

Isi tulisan mulai dari sini, pakai Markdown biasa.
```

3. Simpan filenya — tulisan otomatis muncul di halaman `/blog`, terurut dari yang terbaru, dan dapat halaman sendiri di `/blog/nama-file`.

Tidak perlu menyentuh kode React sama sekali.
