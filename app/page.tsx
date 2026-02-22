import { FinalCta } from "@/components/landing/cta";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Problems } from "@/components/landing/problems";

export default function Home() {
  return (
    <main className="relative overflow-hidden pb-20 sm:pb-24">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-72 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="relative space-y-2">
        <Hero />
        <Problems />
        <HowItWorks />
        <FinalCta />
      </div>
    </main>
  );
}
