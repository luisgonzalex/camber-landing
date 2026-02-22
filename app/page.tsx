import { FinalCta } from "@/components/landing/cta";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Problems } from "@/components/landing/problems";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problems />
      <HowItWorks />
      <FinalCta />
    </main>
  );
}
