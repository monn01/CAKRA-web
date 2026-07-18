import { FloatingPreview } from "@/components/FloatingPreview";
import { Motif } from "@/components/Motif";
import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    title: "Guru mulai sesi & mengajar seperti biasa",
    desc: "Cukup buka sesi baru dan bicara — mikrofon menangkap suara secara real-time.",
  },
  {
    title: "AI menyusun rangkuman, peta pikiran, dan kuis",
    desc: "Transkrip diolah otomatis jadi tiga materi belajar sekaligus dalam Bahasa Indonesia.",
  },
  {
    title: "Guru validasi, materi tampil di proyektor",
    desc: "Sekali dikonfirmasi benar, materi langsung muncul di layar depan kelas.",
  },
  {
    title: "Siswa ikut kuis & bawa pulang resume",
    desc: "Lewat kode QR yang sama, siswa bisa mengulang belajar di rumah bersama orang tua.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="cara-kerja"
      className="relative overflow-hidden border-y border-line bg-paper-soft px-6 py-20"
    >
      <Motif
        variant="graduation"
        className="pointer-events-none absolute top-1/2 -left-16 size-80 -translate-y-1/2 text-ink/[0.08] hidden sm:block"
      />
      <div className="relative mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center lg:gap-8">
        <Reveal delay={150}>
          <FloatingPreview />
        </Reveal>

        <div>
          <Reveal className="mb-12 max-w-lg">
            <span className="text-xs font-medium tracking-wide text-ink-faint uppercase">
              Cara kerja
            </span>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-ink">
              Dari suara guru, sampai ke <span className="italic text-accent">tangan siswa.</span>
            </h2>
          </Reveal>
          <div className="flex flex-col">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 90}>
                <div
                  className={`group flex items-start gap-5 rounded-lg px-3 py-6 -mx-3 transition-all duration-300 hover:bg-card/70 hover:shadow-[0_10px_30px_-18px_rgba(27,23,18,0.3)] ${
                    i === 0 ? "" : "border-t border-line"
                  }`}
                >
                  <span className="font-serif text-2xl leading-none font-medium text-accent/60 transition-colors duration-300 group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
