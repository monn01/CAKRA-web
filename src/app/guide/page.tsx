import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { CopyCommand } from "@/components/CopyCommand";
import { InstallTabs } from "@/components/content/InstallTabs";
import { Motif } from "@/components/Motif";
import { PageHeader } from "@/components/content/PageHeader";
import { TableOfContents } from "@/components/content/TableOfContents";
import { REPO_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Guide — CAKRA-AI",
  description: "Panduan pakai CAKRA-AI setelah instalasi: setup akun guru, sesi mengajar pertama, dan AI lokal.",
};

const TOC = [
  { id: "instalasi", label: "Instalasi cepat" },
  { id: "setup-awal", label: "Setup awal" },
  { id: "sesi-pertama", label: "Sesi mengajar pertama" },
  { id: "ai-lokal", label: "Menjalankan AI lokal" },
  { id: "tips", label: "Tips proyektor & QR" },
];

export default function GuidePage() {
  return (
    <main className="relative mx-auto max-w-5xl px-6 pt-10 pb-24">
      <Motif
        variant="lightbulb"
        className="pointer-events-none absolute top-24 -right-10 size-64 text-accent/[0.07] hidden lg:block"
      />
      <PageHeader
        eyebrow="Guide"
        title={
          <>
            Setelah instal, <span className="italic text-accent">mulai dari sini.</span>
          </>
        }
        subtitle="Panduan singkat memakai CAKRA-AI di kelas — dari instalasi pertama sampai sesi mengajar yang tampil di proyektor."
      />

      <div className="flex gap-12">
        <TableOfContents items={TOC} />

        <div className="min-w-0 flex-1 space-y-14">
          <section id="instalasi" className="scroll-mt-28">
            <h2 className="mb-3 font-serif text-[26px] font-semibold text-ink">Instalasi cepat</h2>
            <p className="mb-4 text-[16px] leading-relaxed text-ink-soft">
              Belum pasang CAKRA-AI sama sekali? Mulai dari sini. Pilih sistem operasi server
              sekolahnya, salin perintahnya, lalu jalankan berurutan dari atas ke bawah. Untuk
              detail konfigurasi lebih lanjut, lihat halaman <span className="font-medium text-ink">Docs</span>.
            </p>
            <InstallTabs />
          </section>

          <section id="setup-awal" className="scroll-mt-28">
            <div className="rounded-lg border border-accent/25 bg-accent-soft/60 p-6">
              <span className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-accent-ink uppercase">
                <span className="size-1.5 rounded-full bg-accent" />
                Setup
              </span>
              <h2 className="mb-2 font-serif text-[22px] font-semibold text-ink">
                Buat akun guru pertama, lalu masuk lewat halaman login.
              </h2>
              <p className="mb-4 text-[16px] leading-relaxed text-ink-soft">
                Jalankan perintah ini sekali di server setelah instalasi selesai untuk membuat
                akun guru pertama. Akun ini punya akses penuh untuk membuat sesi, memvalidasi
                materi, dan mengelola akun guru lain di kemudian hari.
              </p>
              <CopyCommand command="npm run create-teacher" />
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-medium text-accent-ink hover:underline"
              >
                Baca README lengkap di GitHub
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </section>

          <section id="sesi-pertama" className="scroll-mt-28">
            <h2 className="mb-3 font-serif text-[26px] font-semibold text-ink">Sesi mengajar pertama</h2>
            <p className="text-[16px] leading-relaxed text-ink-soft">
              Dari dashboard guru, buka <strong>Sesi Baru</strong>, beri judul materi, lalu mulai
              bicara — mikrofon menangkap suara secara langsung dan transkripnya muncul real-time.
              Setelah selesai, AI menyusun rangkuman, peta pikiran, dan kuis dari transkrip
              tersebut, siap divalidasi sebelum tampil ke proyektor.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-soft">
              Tidak perlu mengedit manual — guru cukup membaca sekilas hasil AI-nya, koreksi kalau
              ada yang meleset, lalu tekan validasi. Materi langsung tersinkron ke layar proyektor
              di depan kelas dalam hitungan detik.
            </p>
          </section>

          <section id="ai-lokal" className="scroll-mt-28">
            <h2 className="mb-3 font-serif text-[26px] font-semibold text-ink">Menjalankan AI lokal</h2>
            <p className="mb-4 text-[16px] leading-relaxed text-ink-soft">
              Untuk sekolah dengan internet terbatas, jalankan model AI lokal lewat Ollama —
              tidak ada data yang perlu dikirim ke luar. Cocok dipakai di ruang server sekolah
              yang koneksinya seadanya, karena semua pemrosesan terjadi di mesin yang sama.
            </p>
            <div className="flex flex-col gap-2">
              <CopyCommand command="ollama serve" />
              <CopyCommand command="ollama pull qwen2.5:7b" />
            </div>
            <p className="mt-3 text-[14px] text-ink-faint">
              Set <code className="rounded bg-paper-soft px-1 py-0.5 font-mono">LLM_PROVIDER=ollama</code> di{" "}
              <code className="rounded bg-paper-soft px-1 py-0.5 font-mono">.env.local</code> supaya aplikasi
              memakainya secara default.
            </p>
          </section>

          <section id="tips" className="scroll-mt-28">
            <h2 className="mb-3 font-serif text-[26px] font-semibold text-ink">Tips proyektor & QR</h2>
            <p className="mb-3 text-[16px] leading-relaxed text-ink-soft">
              Beberapa hal kecil yang bikin sesi di depan kelas lebih lancar tanpa perlu
              pengaturan tambahan:
            </p>
            <ul className="flex flex-col gap-2 text-[16px] text-ink-soft">
              <li className="flex items-start gap-2">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                Layar proyektor otomatis pakai kontras tinggi dan font besar — tidak perlu
                pengaturan tambahan.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                Kode QR resume muncul otomatis di akhir sesi — siswa tinggal memindai dengan HP
                masing-masing.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                Kuis bisa langsung dimainkan di kelas selagi materi masih segar, sebelum siswa
                pulang membawa resume-nya.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
