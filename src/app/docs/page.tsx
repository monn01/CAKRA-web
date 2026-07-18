import type { Metadata } from "next";
import { Boxes, Database, Network, Wifi } from "lucide-react";
import { InstallTabs } from "@/components/content/InstallTabs";
import { Motif } from "@/components/Motif";
import { PageHeader } from "@/components/content/PageHeader";
import { TableOfContents } from "@/components/content/TableOfContents";
import { REPO_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Docs — CAKRA-AI",
  description: "Dokumentasi teknis CAKRA-AI: ringkasan, prasyarat, instalasi, konfigurasi, dan arsitektur.",
};

const TOC = [
  { id: "ringkasan", label: "Ringkasan" },
  { id: "prasyarat", label: "Prasyarat" },
  { id: "instalasi", label: "Instalasi" },
  { id: "konfigurasi", label: "Konfigurasi" },
  { id: "arsitektur", label: "Arsitektur" },
  { id: "lisensi", label: "Lisensi & kontribusi" },
];

const ENV_VARS = [
  { name: "DATABASE_URL", desc: "Connection string PostgreSQL (lokal atau hosted)." },
  { name: "NEXTAUTH_SECRET", desc: "Secret acak untuk sesi login NextAuth." },
  { name: "LLM_PROVIDER", desc: "ollama · qwen · openrouter — provider AI aktif." },
  { name: "LLM_BASE_URL", desc: "Endpoint provider yang dipilih (mis. Ollama lokal)." },
];

const STACK = [
  { icon: Boxes, label: "Next.js App Router + TypeScript" },
  { icon: Database, label: "PostgreSQL + Prisma" },
  { icon: Wifi, label: "Socket.IO custom server (real-time)" },
  { icon: Network, label: "React Flow untuk peta pikiran" },
];

export default function DocsPage() {
  return (
    <main className="relative mx-auto max-w-5xl px-6 pt-10 pb-24">
      <Motif
        variant="book"
        className="pointer-events-none absolute top-24 -right-10 size-64 rotate-6 text-accent/[0.07] hidden lg:block"
      />
      <PageHeader
        eyebrow="Documentation"
        title={
          <>
            Dokumentasi <span className="italic text-accent">teknis.</span>
          </>
        }
        subtitle="Semua yang perlu diketahui untuk memasang dan menjalankan CAKRA-AI sendiri — dari prasyarat sampai konfigurasi provider AI."
      />

      <div className="flex gap-12">
        <TableOfContents items={TOC} />

        <div className="min-w-0 flex-1 space-y-14">
          <section id="ringkasan" className="scroll-mt-28">
            <h2 className="mb-3 font-serif text-[26px] font-semibold text-ink">Ringkasan</h2>
            <p className="text-[16px] leading-relaxed text-ink-soft">
              CAKRA-AI adalah software pendidikan inklusif yang menangkap suara guru secara
              real-time, mengubahnya jadi transkrip, lalu menyusun rangkuman, peta pikiran
              interaktif, dan kuis secara otomatis lewat AI. Materi tampil di proyektor kelas dan
              bisa dibawa pulang siswa lewat kode QR. Dirancang untuk sekolah dengan infrastruktur
              terbatas — AI bisa berjalan lokal lewat Ollama tanpa bergantung pada koneksi internet
              stabil.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-soft">
              Dokumen ini menjelaskan sisi teknis: apa saja yang perlu disiapkan di server sekolah,
              bagaimana proses instalasinya, variabel konfigurasi yang tersedia, dan gambaran umum
              arsitektur sistemnya. Untuk panduan pemakaian sehari-hari setelah instalasi selesai,
              lihat halaman <span className="font-medium text-ink">Guide</span>.
            </p>
          </section>

          <section id="prasyarat" className="scroll-mt-28">
            <h2 className="mb-3 font-serif text-[26px] font-semibold text-ink">Prasyarat</h2>
            <p className="mb-3 text-[16px] leading-relaxed text-ink-soft">
              Pasang keempat hal berikut sebelum mengkloning repository. Semua bisa berjalan di
              satu mesin yang sama — tidak perlu server terpisah untuk database maupun AI.
            </p>
            <ul className="grid grid-cols-1 gap-2 text-[16px] text-ink-soft sm:grid-cols-2">
              {["Node.js 20+ dan npm", "PostgreSQL (lokal atau hosted)", "Ollama (opsional, untuk AI lokal offline)", "Git"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-accent" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </section>

          <section id="instalasi" className="scroll-mt-28">
            <h2 className="mb-3 font-serif text-[26px] font-semibold text-ink">Instalasi</h2>
            <p className="mb-4 text-[16px] leading-relaxed text-ink-soft">
              Clone repo, install dependency, lalu jalankan server development. Perintah persiapan
              sebelum clone berbeda tergantung sistem operasi — pilih tab yang sesuai di bawah ini.
            </p>
            <InstallTabs />
            <p className="mt-4 text-[14px] text-ink-faint">
              Setelah <code className="rounded bg-paper-soft px-1 py-0.5 font-mono">npm install</code>{" "}
              selesai, jalankan <code className="rounded bg-paper-soft px-1 py-0.5 font-mono">npx prisma db push</code>{" "}
              sekali untuk menyinkronkan schema ke database sebelum <code className="rounded bg-paper-soft px-1 py-0.5 font-mono">npm run dev</code>.
            </p>
          </section>

          <section id="konfigurasi" className="scroll-mt-28">
            <h2 className="mb-3 font-serif text-[26px] font-semibold text-ink">Konfigurasi</h2>
            <p className="mb-4 text-[16px] leading-relaxed text-ink-soft">
              Salin <code className="rounded bg-paper-soft px-1 py-0.5 font-mono text-[14px]">.env.local.example</code>{" "}
              jadi <code className="rounded bg-paper-soft px-1 py-0.5 font-mono text-[14px]">.env.local</code>, lalu
              isi variabel berikut. LLM provider bersifat provider-agnostic — tinggal ganti
              <code className="rounded bg-paper-soft px-1 py-0.5 font-mono text-[14px]"> LLM_PROVIDER</code>, tidak
              perlu ubah kode aplikasi sama sekali.
            </p>
            <div className="overflow-hidden rounded-lg border border-line">
              {ENV_VARS.map((v, i) => (
                <div
                  key={v.name}
                  className={`flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:gap-4 ${
                    i % 2 === 0 ? "bg-card" : "bg-paper-soft/60"
                  }`}
                >
                  <code className="w-44 shrink-0 font-mono text-[14px] text-accent-ink">{v.name}</code>
                  <span className="text-[15px] text-ink-soft">{v.desc}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="arsitektur" className="scroll-mt-28">
            <h2 className="mb-3 font-serif text-[26px] font-semibold text-ink">Arsitektur singkat</h2>
            <p className="mb-4 text-[16px] leading-relaxed text-ink-soft">
              Semua berjalan sebagai satu aplikasi Next.js, ditambah proses Socket.IO custom untuk
              koneksi real-time ke proyektor kelas. Tidak ada layanan mikro terpisah yang perlu
              dikelola.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {STACK.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-line bg-card px-4 py-3 text-[15px] text-ink"
                >
                  <Icon className="size-4 shrink-0 text-accent" />
                  {label}
                </div>
              ))}
            </div>
          </section>

          <section id="lisensi" className="scroll-mt-28">
            <h2 className="mb-3 font-serif text-[26px] font-semibold text-ink">Lisensi & kontribusi</h2>
            <p className="text-[16px] leading-relaxed text-ink-soft">
              CAKRA-AI open source dan bebas dipasang mandiri. Laporan bug, ide fitur, atau
              kontribusi kode bisa diajukan lewat{" "}
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent-ink underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
              >
                repository GitHub
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
