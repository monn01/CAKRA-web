import { GitFork } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { REPO_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <Reveal className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 sm:flex-row">
        <Logo />
        <p className="text-center text-[13px] text-ink-faint sm:text-left">
          Open source, untuk pendidikan inklusif Indonesia.
        </p>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center gap-1.5 text-[13px] font-medium text-ink-soft transition-colors hover:text-ink"
        >
          <GitFork className="size-4" />
          github.com/monn01/CAKRA-AI
        </a>
      </Reveal>
    </footer>
  );
}
