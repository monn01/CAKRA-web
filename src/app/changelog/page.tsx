import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Motif } from "@/components/Motif";
import { PageHeader } from "@/components/content/PageHeader";
import { REPO_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Changelog — CAKRA-AI",
  description: "Rekam jejak setiap pembaruan CAKRA-AI — fitur baru, perbaikan, dan perubahan arsitektur.",
};

const RELEASES = [
  {
    version: "v0.4.0",
    date: "18 Juli 2026",
    latest: true,
    changes: [
      "Live caption di proyektor dikembalikan ke mode real-time — baris aktif tumbuh kata demi kata tanpa delay, baru dikoreksi dan pindah ke riwayat setelah satu kalimat utuh selesai.",
      "Perbaikan sentence-buffering di speech handler supaya subtitle tidak lagi patah per kata, menyesuaikan ritme bicara tiap guru yang berbeda-beda.",
    ],
  },
  {
    version: "v0.3.0",
    date: "17 Juli 2026",
    changes: [
      "Reposisi produk ke siswa SD inklusif — layar proyektor diredesain ramah anak: background jaringan semantik animasi, subtitle bergaya ketik, palet warna cerah.",
      "Alur validasi guru: rangkuman, peta pikiran, dan soal hasil AI wajib dikonfirmasi guru dulu sebelum tampil ke siswa, baru bisa direvisi kalau ada yang meleset.",
      "PPT yang diunggah guru kini tampil sebagai slide di proyektor, sinkron real-time dengan subtitle.",
      "Karena siswa SD belum bawa HP, hasil belajar langsung tampil di proyektor begitu divalidasi — kode QR jadi kanal sekunder saja, bukan satu-satunya jalan.",
      "Fitur hapus sesi, unggah PPT opsional saat bikin sesi baru, dan daftar sesi dikelompokkan per kelas.",
      "Perbaikan dari masukan guru 10 Juli: kuis otomatis lanjut per timer tanpa tombol manual, guru kontrol penuh kapan kuis dimulai, dua kode QR (rangkuman & kuis) tampil bersebelahan, dan unduh peta pikiran di HP siswa yang sempat gagal.",
    ],
  },
  {
    version: "v0.2.0",
    date: "10 Juli 2026",
    changes: [
      "Sesi uji coba pertama end-to-end bersama guru sungguhan — dinilai 7/10, jadi dasar seluruh perbaikan berikutnya.",
      "Masukan utama: alur bikin soal masih terlalu rumit buat guru awam, dua kode QR di layar proyektor membingungkan, dan peta pikiran belum bisa diakses dari HP siswa.",
    ],
  },
  {
    version: "v0.1.0",
    date: "Juli 2026",
    changes: [
      "Rilis awal: transkrip suara guru real-time lewat Web Speech API, tampil langsung di layar proyektor kelas.",
      "AI (Ollama/Qwen, provider-agnostic) menyusun rangkuman, peta pikiran interaktif, dan kuis pilihan ganda otomatis dari transkrip.",
      "Kuis interaktif gaya Quizizz — lobi bergabung lewat kode, gameplay real-time, leaderboard podium.",
      "Halaman resume mobile-first lewat kode QR, lengkap dengan peta pikiran interaktif dan unduh PDF.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <main className="relative mx-auto max-w-3xl px-6 pt-10 pb-24">
      <Motif
        variant="compass"
        className="pointer-events-none absolute top-16 -right-16 size-64 text-accent/[0.07] hidden lg:block"
      />
      <PageHeader
        eyebrow="Changelog"
        title={
          <>
            Riwayat pembaruan<span className="text-accent">.</span>
          </>
        }
        subtitle="Setiap perubahan pada CAKRA-AI dicatat di sini — fitur baru, perbaikan, dan perubahan arsitektur, dari rilis pertama sampai sekarang."
      />

      <div className="mb-14 rounded-lg border border-accent/25 bg-accent-soft/60 p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-semibold text-paper">
            {RELEASES[0].version}
          </span>
          <span className="rounded-full border border-ink/15 px-2.5 py-0.5 text-[10.5px] font-medium tracking-wide text-ink-faint uppercase">
            Terbaru
          </span>
        </div>
        <h2 className="mb-2 font-serif text-xl font-semibold text-ink">
          {RELEASES[0].version} baru saja dirilis.
        </h2>
        <p className="mb-4 text-[14.5px] leading-relaxed text-ink-soft">
          Live caption di layar proyektor dikembalikan ke mode real-time — subtitle tumbuh kata
          demi kata mengikuti guru bicara, tanpa delay, dan baru rapi dikoreksi begitu satu
          kalimat selesai.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-medium text-accent-ink">
          <a
            href={`${REPO_URL}/blob/main/CHANGELOG.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:underline"
          >
            CHANGELOG.md di GitHub
            <ArrowUpRight className="size-3.5" />
          </a>
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
            Lihat semua rilis
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>

      <div className="relative ml-2 border-l-2 border-line">
        {RELEASES.map((r) => (
          <div key={r.version} className="relative pb-12 pl-8 last:pb-0">
            <span
              className={`absolute top-1 left-0 flex size-4 -translate-x-1/2 items-center justify-center rounded-full border-2 bg-paper ${
                r.latest ? "border-accent" : "border-line"
              }`}
            >
              <span className={`size-1.5 rounded-full ${r.latest ? "bg-accent" : "bg-ink-faint"}`} />
            </span>
            <div className="flex flex-wrap items-baseline gap-2.5">
              <h3 className="font-serif text-xl font-semibold text-ink">{r.version}</h3>
              <span className="text-[13px] text-ink-faint">{r.date}</span>
              {r.latest && (
                <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[10.5px] font-medium tracking-wide text-accent-ink uppercase">
                  Latest
                </span>
              )}
            </div>
            <ul className="mt-3 flex flex-col gap-2">
              {r.changes.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-ink-soft">
                  <span className="mt-[9px] size-1 shrink-0 rounded-full bg-ink-faint" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
