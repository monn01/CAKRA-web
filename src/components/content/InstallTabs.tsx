"use client";

import { useState } from "react";
import { CopyCommand } from "@/components/CopyCommand";
import { CLONE_CMD } from "@/lib/constants";

const PLATFORMS = [
  {
    id: "macos",
    label: "macOS",
    steps: [
      "brew install node@20 postgresql ollama",
      CLONE_CMD,
      "cd CAKRA-AI && npm install",
      "npm run dev",
    ],
  },
  {
    id: "linux",
    label: "Linux",
    steps: [
      "curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt install -y nodejs postgresql",
      CLONE_CMD,
      "cd CAKRA-AI && npm install",
      "npm run dev",
    ],
  },
  {
    id: "windows",
    label: "Windows (CLI)",
    steps: [
      "winget install OpenJS.NodeJS.LTS PostgreSQL.PostgreSQL",
      CLONE_CMD,
      "cd CAKRA-AI; npm install",
      "npm run dev",
    ],
  },
];

export function InstallTabs() {
  const [active, setActive] = useState(PLATFORMS[0].id);
  const platform = PLATFORMS.find((p) => p.id === active) ?? PLATFORMS[0];

  return (
    <div>
      <div className="mb-3 inline-flex items-center gap-1 rounded-full border border-line bg-card p-1">
        {PLATFORMS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActive(p.id)}
            className={`cursor-pointer rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-all duration-200 ${
              active === p.id
                ? "bg-ink text-paper shadow-[0_4px_12px_-4px_rgba(27,23,18,0.4)]"
                : "text-ink-soft hover:text-ink"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {platform.steps.map((cmd, i) => (
          <CopyCommand key={`${platform.id}-${i}`} command={cmd} />
        ))}
      </div>
    </div>
  );
}
