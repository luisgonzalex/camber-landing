import { Reveal } from "@/components/landing/reveal";

export function HowItWorks() {
  return (
    <section className="section-shell pb-12 sm:pb-16">
      <Reveal className="rounded-2xl border border-primary/30 bg-primary/10 p-7 sm:p-10">
        <p className="eyebrow">Camber promise</p>
        <h2 className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">No dashboards. No hype. Just operational clarity.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          You get a concrete diagnosis, immediate quick wins, and a practical roadmap your team can run this quarter.
        </p>
      </Reveal>
    </section>
  );
}
