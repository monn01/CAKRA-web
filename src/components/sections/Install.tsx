import { Download, GitFork } from "lucide-react";
import { CopyCommand } from "@/components/CopyCommand";
import { Motif } from "@/components/Motif";
import { Reveal } from "@/components/Reveal";
import { CLONE_CMD, REPO_URL, ZIP_URL } from "@/lib/constants";

const PREREQS = [
  "Node.js 20+ dan npm",
  "PostgreSQL (lokal atau hosted)",
  "Ollama (opsional, untuk AI lokal offline)",
  "Git",
];

const STEPS = [
  CLONE_CMD,
  "cd CAKRA-AI && npm install",
  "npx prisma db push",
  "npm run dev",
];

const STACK = [
  "Next.js",
  "PostgreSQL + Prisma",
  "Socket.IO",
  "React Flow",
  "Ollama / Qwen / OpenRouter",
];

export function Install() {
  return (
    <section id="instalasi" className="relative overflow-hidden px-6 py-20">
      <Motif
        variant="lightbulb"
        className="pointer-events-none absolute top-8 left-1/2 hidden size-64 -translate-x-[calc(50%-260px)] text-accent/[0.09] lg:block"
      />
      <div className="relative mx-auto max-w-3xl">
        <Reveal className="mb-10 max-w-lg">
          <span className="text-xs font-medium tracking-wide text-ink-faint uppercase">
            Instalasi
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-ink">
            Pasang sendiri, <span className="italic text-accent">tanpa akun.</span>
          </h2>
          <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
            CAKRA-AI open source — cocok dipasang mandiri di server sekolah, termasuk yang
            koneksi internetnya terbatas. AI bisa jalan lokal lewat Ollama, tanpa kirim data ke
            luar.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-lg border border-line bg-card p-6 transition-shadow duration-300 hover:shadow-[0_24px_60px_-30px_rgba(27,23,18,0.35)] sm:p-8">
            <h3 className="mb-3 text-xs font-semibold tracking-wide text-ink-faint uppercase">
              Prasyarat
            </h3>
            <ul className="mb-7 grid grid-cols-1 gap-2 text-[13.5px] text-ink-soft sm:grid-cols-2">
              {PREREQS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-md px-1.5 py-1 transition-colors duration-200 hover:bg-paper-soft hover:text-ink"
                >
                  <span className="size-1 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mb-3 text-xs font-semibold tracking-wide text-ink-faint uppercase">
              Langkah instalasi
            </h3>
            <div className="flex flex-col gap-2">
              {STEPS.map((cmd) => (
                <CopyCommand key={cmd} command={cmd} />
              ))}
            </div>
            <p className="mt-3 text-[12.5px] text-ink-faint">
              Sebelum menjalankan, salin{" "}
              <code className="rounded bg-paper-soft px-1 py-0.5 font-mono">.env.local.example</code>{" "}
              jadi <code className="rounded bg-paper-soft px-1 py-0.5 font-mono">.env.local</code> dan
              isi variabel yang diperlukan (lihat README di repo untuk detail).
            </p>

            <div className="mt-7 flex flex-wrap gap-3 border-t border-line pt-6">
              <a
                href={ZIP_URL}
                className="flex cursor-pointer items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
              >
                <Download className="size-4" />
                Unduh ZIP
              </a>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-paper-soft"
              >
                <GitFork className="size-4" />
                Buka repository
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={180}
          className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] text-ink-faint"
        >
          <span className="font-medium tracking-wide uppercase">Dibangun dengan</span>
          {STACK.map((item, i) => (
            <span key={item} className="font-mono transition-colors duration-200 hover:text-ink">
              {item}
              {i < STACK.length - 1 && <span className="ml-2 text-line">·</span>}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
