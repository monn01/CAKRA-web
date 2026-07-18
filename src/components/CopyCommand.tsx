"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyCommand({
  command,
  prompt = "$",
}: {
  command: string;
  prompt?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    let ok = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(command);
        ok = true;
      }
    } catch {
      // lanjut ke fallback di bawah
    }

    if (!ok) {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = command;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        ok = document.execCommand("copy");
        textarea.remove();
      } catch {
        ok = false;
      }
    }

    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  }

  return (
    <div className="flex w-full items-start gap-3 rounded-md bg-ink px-4 py-3.5 font-mono text-[13px] text-paper/90 shadow-[0_10px_30px_-14px_rgba(27,23,18,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-14px_rgba(27,23,18,0.65)]">
      <span className="mt-px shrink-0 select-none text-paper/35">{prompt}</span>
      <code className="flex-1 break-all whitespace-pre-wrap">{command}</code>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Salin perintah"
        className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded border border-paper/15 px-2 py-1 text-[11px] font-sans font-medium tracking-wide text-paper/70 uppercase transition-colors hover:border-paper/30 hover:text-paper"
      >
        {copied ? (
          <>
            <Check className="size-3" />
            Disalin
          </>
        ) : (
          <>
            <Copy className="size-3" />
            Salin
          </>
        )}
      </button>
    </div>
  );
}
