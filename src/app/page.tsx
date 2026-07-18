import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Install } from "@/components/sections/Install";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Install />
    </main>
  );
}
