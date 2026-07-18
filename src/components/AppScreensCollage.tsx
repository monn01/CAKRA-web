import Image from "next/image";

const SCREENS = [
  {
    src: "/screens/proyektor-live.png",
    alt: "Layar proyektor kelas menampilkan rangkuman dan peta pikiran otomatis dari CAKRA-AI",
    width: 1567,
    height: 688,
    label: "Tampil di proyektor",
    position: "left-0 top-4 w-[280px] sm:w-[340px]",
    rotate: "-2deg",
    delay: "0s",
  },
  {
    src: "/screens/validasi-guru.png",
    alt: "Panel guru memvalidasi rangkuman AI sebelum tampil ke kelas",
    width: 986,
    height: 661,
    label: "Guru validasi",
    position: "right-0 top-0 w-[190px] sm:w-[220px]",
    rotate: "3deg",
    delay: "0.5s",
  },
  {
    src: "/screens/quiz-lobby.png",
    alt: "Layar lobi kuis kelas dengan kode ruangan dan kode QR untuk siswa bergabung",
    width: 1568,
    height: 620,
    label: "Kuis siap dimainkan",
    position: "right-6 bottom-0 w-[210px] sm:w-[240px]",
    rotate: "-3deg",
    delay: "1s",
  },
];

export function AppScreensCollage() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-md sm:h-[400px]">
      {SCREENS.map((screen) => (
        <figure
          key={screen.src}
          className={`drift absolute overflow-hidden rounded-lg border border-line bg-card shadow-[0_24px_50px_-22px_rgba(27,23,18,0.4)] transition-shadow duration-300 hover:shadow-[0_28px_60px_-16px_rgba(27,23,18,0.5)] ${screen.position}`}
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
