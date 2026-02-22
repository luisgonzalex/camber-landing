import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="section-shell pt-16 sm:pt-24">
      <div className="max-w-3xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">Camber Consulting | RGV</p>
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Operational clarity for founder-led teams.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          We help growing businesses install practical systems for planning, handoffs, and execution. AI supports the
          analysis. Systems drive the outcomes.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/audit">
            <Button size="lg" className="w-full sm:w-auto">
              Take the Operational Clarity Audit
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground">8 questions. About 3 minutes. Actionable next steps.</p>
        </div>
      </div>
    </section>
  );
}
