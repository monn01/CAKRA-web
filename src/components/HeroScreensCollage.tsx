import Image from "next/image";

const CODE_LINES = [
  { indent: 0, tokens: [{ t: "import", c: "text-accent" }, { t: " { transcribe }", c: "text-ink-soft" }, { t: " from", c: "text-accent" }, { t: " \"./whisper\";", c: "text-confirm" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: "async function", c: "text-accent" }, { t: " prosesSesi", c: "text-ink" }, { t: "(audio) {", c: "text-ink-soft" }] },
  { indent: 1, tokens: [{ t: "const", c: "text-accent" }, { t: " teks", c: "text-ink" }, { t: " = ", c: "text-ink-soft" }, { t: "await", c: "text-accent" }, { t: " transcribe(audio);", c: "text-ink-soft" }] },
  { indent: 1, tokens: [{ t: "const", c: "text-accent" }, { t: " materi", c: "text-ink" }, { t: " = ", c: "text-ink-soft" }, { t: "await", c: "text-accent" }, { t: " ollama.generate({", c: "text-ink-soft" }] },
  { indent: 2, tokens: [{ t: "model", c: "text-ink" }, { t: ": ", c: "text-ink-soft" }, { t: "\"cakra-ai\",", c: "text-confirm" }] },
  { indent: 2, tokens: [{ t: "prompt", c: "text-ink" }, { t: ": teks,", c: "text-ink-soft" }] },
  { indent: 1, tokens: [{ t: "});", c: "text-ink-soft" }] },
  { indent: 1, tokens: [{ t: "return", c: "text-accent" }, { t: " { rangkuman, peta, kuis };", c: "text-ink-soft" }] },
  { indent: 0, tokens: [{ t: "}", c: "text-ink-soft" }] },
];

const OLLAMA_LINES = [
  { c: "text-paper/50", t: "$ ollama run cakra-ai" },
  { c: "text-paper/90", t: ">>> Ringkas materi fotosintesis kelas 5..." },
  { c: "text-confirm", t: "✓ Menyusun rangkuman" },
  { c: "text-confirm", t: "✓ Membuat peta pikiran" },
  { c: "text-confirm", t: "✓ Menyiapkan 5 soal kuis" },
];

const SCREENS = [
  {
    src: "/screens/hero-dashboard.png",
    alt: "Dashboard analitik guru menampilkan tren aktivitas sesi dan distribusi konten CAKRA-AI",
    width: 1897,
    height: 867,
    label: "Analitik siswa",
    position: "bottom-[76px] left-0 w-[240px] sm:w-[280px]",
    rotate: "-2deg",
    delay: "0.8s",
  },
  {
    src: "/screens/hero-ringkasan.png",
    alt: "Ringkasan panel guru menampilkan sesi mengajar dan materi terakhir dibuat",
    width: 1901,
    height: 872,
    label: "Ringkasan guru",
    position: "right-0 bottom-0 w-[210px] sm:w-[240px]",
    rotate: "2deg",
    delay: "1.2s",
  },
];

export function HeroScreensCollage() {
  return (
    <div className="relative mx-auto h-[480px] w-full max-w-lg sm:h-[540px]">
      {/* Kartu editor kode — VS Code */}
      <div
        className="drift-diagonal absolute top-0 right-0 w-[270px] rounded-lg bg-ink shadow-[0_24px_50px_-20px_rgba(27,23,18,0.5)] transition-shadow duration-300 hover:shadow-[0_28px_60px_-16px_rgba(27,23,18,0.65)] sm:w-[310px]"
        style={{ "--drift-rot": "-3deg", transform: "rotate(-3deg)" } as React.CSSProperties}
      >
        <div className="flex items-center gap-1.5 rounded-t-lg bg-[#252017] px-3 py-2">
          <span className="size-2.5 rounded-full bg-[#e5564a]" />
          <span className="size-2.5 rounded-full bg-[#e5b04a]" />
          <span className="size-2.5 rounded-full bg-[#3fa860]" />
          <span className="ml-2 truncate text-[10.5px] tracking-wide text-paper/45">cakra-engine.ts</span>
        </div>
        <pre className="overflow-hidden px-3.5 py-3 font-mono text-[9.5px] leading-[1.55]">
          {CODE_LINES.map((line, i) => (
            <div key={i} style={{ paddingLeft: `${line.indent * 12}px` }}>
              {line.tokens.length === 0 ? (
                " "
              ) : (
                line.tokens.map((tok, j) => (
                  <span key={j} className={tok.c}>
                    {tok.t}
                  </span>
                ))
              )}
            </div>
          ))}
        </pre>
      </div>

      {/* Kartu terminal — Ollama */}
      <div
        className="drift-diagonal absolute top-[128px] left-0 w-[230px] rounded-lg bg-[#1b1712] shadow-[0_28px_60px_-24px_rgba(27,23,18,0.45)] transition-shadow duration-300 hover:shadow-[0_32px_70px_-18px_rgba(27,23,18,0.55)] sm:top-32 sm:w-[260px]"
        style={{ "--drift-rot": "3deg", transform: "rotate(3deg)", animationDelay: "0.4s" } as React.CSSProperties}
      >
        <div className="flex items-center gap-1.5 rounded-t-lg bg-black/30 px-3 py-2">
          <span className="size-2.5 rounded-full bg-paper/20" />
          <span className="size-2.5 rounded-full bg-paper/20" />
          <span className="size-2.5 rounded-full bg-paper/20" />
          <span className="ml-2 truncate text-[10.5px] tracking-wide text-paper/45">ollama — zsh</span>
        </div>
        <div className="px-3.5 py-3 font-mono text-[10px] leading-[1.7]">
          {OLLAMA_LINES.map((line, i) => (
            <div key={i} className={line.c}>
              {line.t}
            </div>
          ))}
          <span className="text-paper/90">
            <span className="blink-cursor">▍</span>
          </span>
        </div>
      </div>

      {SCREENS.map((screen) => (
        <figure
          key={screen.src}
          className={`drift-diagonal absolute overflow-hidden rounded-lg border border-line bg-card shadow-[0_24px_50px_-22px_rgba(27,23,18,0.4)] transition-shadow duration-300 hover:shadow-[0_28px_60px_-16px_rgba(27,23,18,0.5)] ${screen.position}`}
          style={
            {
              "--drift-rot": screen.rotate,
              transform: `rotate(${screen.rotate})`,
              animationDelay: screen.delay,
            } as React.CSSProperties
          }
        >
          <div className="flex items-center gap-1 bg-ink px-2.5 py-1.5">
            <span className="size-1.5 rounded-full bg-paper/30" />
            <span className="size-1.5 rounded-full bg-paper/30" />
            <span className="size-1.5 rounded-full bg-paper/30" />
            <figcaption className="ml-1.5 truncate text-[10px] tracking-wide text-paper/60 uppercase">
              {screen.label}
            </figcaption>
          </div>
          <Image
            src={screen.src}
            alt={screen.alt}
            width={screen.width}
            height={screen.height}
            className="h-auto w-full"
          />
        </figure>
      ))}
    </div>
  );
}
