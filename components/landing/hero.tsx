import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { Button } from "@/components/ui/button";

export function Hero() {
  const strategyCallUrl =
    process.env.NEXT_PUBLIC_STRATEGY_CALL_URL ||
    "mailto:hello@camberconsulting.com?subject=Request%20Strategy%20Call";

  return (
    <section className="section-shell pt-8 sm:pt-12 lg:pt-16">
      <Reveal className="landing-panel p-7 sm:p-10 lg:p-12">
        <p className="eyebrow">RGV Operational Systems Consultancy</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Bring structure to growth.</h1>
        <p className="balanced-copy mt-5">
          Camber helps founder-led businesses run smoother with practical systems, clear workflows, and focused
          automation. You keep growing without the chaos.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">AI is a tool. Systems are the product.</p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href={strategyCallUrl} target="_blank" rel="noreferrer">
            <Button size="lg" className="w-full sm:w-auto">
              Request Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <Link href="/audit">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Try the Free Audit Tool
            </Button>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
