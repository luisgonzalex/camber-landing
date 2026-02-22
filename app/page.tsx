import { FinalCta } from "@/components/landing/cta";
import { Faq } from "@/components/landing/faq";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Problems } from "@/components/landing/problems";
import { ScrollProgress } from "@/components/landing/scroll-progress";
import { ToolSection } from "@/components/landing/tool";

export default function Home() {
  return (
    <main className="relative overflow-hidden pb-20 sm:pb-24">
      <ScrollProgress />
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-72 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-16 left-1/3 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative space-y-2">
        <Header />
        <Hero />
        <Problems />
        <HowItWorks />
        <ToolSection />
        <Faq />
        <FinalCta />
      </div>
    </main>
  );
}
