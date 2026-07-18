import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CAKRA-AI — Pasang sendiri di sekolahmu",
  description:
    "CAKRA-AI mengubah suara guru jadi rangkuman, peta pikiran, dan kuis secara otomatis. Open source, pasang sendiri di server sekolah lewat GitHub — tanpa akun, tanpa cloud wajib.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
