import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="section-shell pt-8 sm:pt-12 lg:pt-16">
      <Reveal className="landing-panel p-7 sm:p-10 lg:p-12">
        <p className="eyebrow">Operational Clarity Audit</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          #1 Operational Clarity Audit for Founder-Led Teams
        </h1>
        <p className="balanced-copy mt-5">
          Camber diagnoses execution friction and gives you a practical plan for the next 7 and 90 days. No fluff.
          Just systems that make growth manageable.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/audit">
            <Button size="lg" className="w-full sm:w-auto">
              Take the Operational Clarity Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground">8 questions. About 3 minutes. Clear output.</p>
        </div>
      </Reveal>
    </section>
  );
}
