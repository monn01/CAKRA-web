import {
  FileText,
  ListChecks,
  Mic,
  MonitorPlay,
  Network,
  QrCode,
} from "lucide-react";
import { Motif } from "@/components/Motif";
import { Reveal } from "@/components/Reveal";

const FEATURES = [
  {
    icon: Mic,
    title: "Transkrip suara real-time",
    desc: "Suara guru saat mengajar langsung ditangkap dan diubah jadi teks secara live, tanpa alat tambahan.",
  },
  {
    icon: FileText,
    title: "Rangkuman otomatis AI",
    desc: "Transkrip diringkas AI jadi rangkuman, poin kunci, dan istilah penting — tinggal divalidasi guru.",
  },
  {
    icon: Network,
    title: "Peta pikiran interaktif",
    desc: "Struktur materi divisualisasikan jadi peta pikiran yang bisa di-zoom, digeser, dan diekspor.",
  },
  {
    icon: ListChecks,
    title: "Kuis real-time",
    desc: "Soal latihan dibuat otomatis dari materi, dimainkan langsung di kelas gaya Kahoot/Quizizz.",
  },
  {
    icon: MonitorPlay,
    title: "Layar proyektor ramah anak",
    desc: "Tampilan kontras tinggi dan font besar, dirancang untuk dilihat dari jarak jauh di depan kelas.",
  },
  {
    icon: QrCode,
    title: "Resume via kode QR",
    desc: "Siswa memindai QR untuk membawa pulang rangkuman, peta pikiran, dan soal latihan hari itu.",
  },
];

export function Features() {
  return (
    <section id="fitur" className="relative mx-auto max-w-5xl px-6 py-20">
      <Motif
        variant="compass"
        className="pointer-events-none absolute top-4 right-4 size-40 text-ink/[0.08] sm:size-52"
      />
      <Reveal className="relative mb-12 max-w-lg">
        <span className="text-xs font-medium tracking-wide text-ink-faint uppercase">
          Fitur
        </span>
        <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-ink">
          Bukan rencana — sudah <span className="italic text-accent">jalan.</span>
        </h2>
      </Reveal>
      <div className="relative grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, desc }, i) => (
          <Reveal key={title} delay={(i % 3) * 90} className="h-full">
            <div className="group relative flex h-full flex-col gap-3 bg-card p-6 transition-colors duration-300 hover:bg-accent-soft/50">
              <div className="flex size-9 items-center justify-center rounded-md bg-ink text-paper transition-colors duration-300 group-hover:bg-accent">
                <Icon className="size-4" strokeWidth={1.75} />
              </div>
              <h3 className="text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-accent-ink">
                {title}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-ink-soft">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
