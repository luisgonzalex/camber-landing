import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const deliverables = [
  "Clarity Score (0-100)",
  "Top 3 operational bottlenecks",
  "Quick wins for the next 7 days",
  "90-day roadmap in 3 phases",
];

export function Hero() {
  return (
    <section className="section-shell pt-12 sm:pt-18 lg:pt-24">
      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
        <div className="landing-panel p-7 sm:p-10">
          <p className="eyebrow">Camber Consulting | RGV</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Practical systems for teams growing faster than their operations.
          </h1>
          <p className="balanced-copy mt-5">
            Camber helps founder-led businesses install structure for planning, handoffs, and execution. AI supports the
            diagnosis. Systems are the product.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/audit">
              <Button size="lg" className="w-full sm:w-auto">
                Take the Operational Clarity Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">8 questions. About 3 minutes. Actionable output.</p>
          </div>
        </div>

        <aside className="landing-panel p-6 sm:p-7">
          <p className="eyebrow">What you get</p>
          <h2 className="mt-3 font-serif text-2xl leading-tight">An operator-level scorecard, not generic advice.</h2>
          <ul className="mt-5 space-y-3">
            {deliverables.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-lg border border-primary/30 bg-primary/10 p-4">
            <p className="text-sm font-semibold">Built for teams of 1-25 employees.</p>
            <p className="mt-1 text-sm text-muted-foreground">Focused on clarity, ownership, and execution rhythm.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
