import Link from "next/link";
import { Reveal } from "@/components/landing/reveal";
import { Button } from "@/components/ui/button";

export function ToolSection() {
  return (
    <section className="section-shell pb-12 sm:pb-16">
      <Reveal className="landing-panel p-7 sm:p-10">
        <p className="eyebrow">Free tool</p>
        <h2 className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">We built an audit tool to make the first step easy.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Use the Operational Clarity Audit to spot bottlenecks fast. If the output is useful, we can help implement the
          systems behind it.
        </p>
        <ul className="mt-5 grid gap-3 text-sm text-foreground/90 sm:grid-cols-2">
          <li className="rounded-md border border-border bg-background px-3 py-2">Clarity score and top bottlenecks</li>
          <li className="rounded-md border border-border bg-background px-3 py-2">Quick wins for the next 7 days</li>
          <li className="rounded-md border border-border bg-background px-3 py-2">90-day roadmap in 3 phases</li>
          <li className="rounded-md border border-border bg-background px-3 py-2">Recommended next consulting step</li>
        </ul>
        <Link href="/audit" className="mt-6 inline-flex">
          <Button size="lg">Try the Operational Clarity Audit</Button>
        </Link>
      </Reveal>
    </section>
  );
}
