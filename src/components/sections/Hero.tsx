import { ArrowRight, GitFork } from "lucide-react";
import Link from "next/link";
import { CopyCommand } from "@/components/CopyCommand";
import { HeroScreensCollage } from "@/components/HeroScreensCollage";
import { Motif } from "@/components/Motif";
import { CLONE_CMD, REPO_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 paper-grain opacity-60" />
      <Motif
        variant="chakra"
        className="pointer-events-none absolute -bottom-24 -left-24 size-[420px] text-ink/[0.065]"
      />
      <Motif
        variant="book"
        className="pointer-events-none absolute top-10 -right-10 size-56 rotate-6 text-accent/[0.1] hidden lg:block"
      />
      <div className="relative mx-auto grid max-w-5xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="hero-in flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-3.5 py-1.5 text-xs font-medium tracking-wide text-accent-ink uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/15">
            <span className="size-1.5 rounded-full bg-accent" />
            Open source · rilis publik
          </span>

          <h1 className="font-serif text-[2.6rem] leading-[1.08] font-semibold tracking-tight text-ink sm:text-5xl">
            Suara guru, jadi rangkuman, peta pikiran, dan kuis —{" "}
            <span className="italic text-accent">otomatis.</span>
          </h1>

          <p className="max-w-md text-[15.5px] leading-relaxed text-ink-soft">
            CAKRA-AI menangkap suara guru secara langsung, lalu menyusunnya jadi materi belajar
            interaktif di proyektor kelas — dan bisa dibawa pulang siswa lewat kode QR. Dipasang
            sendiri di server sekolah, dari kode sumber di GitHub.
          </p>

          <div className="w-full max-w-md">
            <CopyCommand command={CLONE_CMD} />
            <p className="mt-2.5 text-[12.5px] text-ink-faint">
              Sekali clone, jalan di komputer sekolah sendiri — tanpa akun, tanpa langganan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              <GitFork className="size-4" />
              Get Repository
            </a>
            <Link
              href="/docs"
              className="flex cursor-pointer items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-card"
            >
              Read the Docs
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="hero-in-delay">
          <HeroScreensCollage />
        </div>
      </div>
    </section>
  );
}
