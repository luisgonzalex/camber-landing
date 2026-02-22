import { Reveal } from "@/components/landing/reveal";

export function HowItWorks() {
  return (
    <section className="section-shell pb-12 sm:pb-16">
      <Reveal className="rounded-2xl border border-primary/30 bg-primary/10 p-7 sm:p-10">
        <p className="eyebrow">Engagement model</p>
        <h2 className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">Consulting first. Tooling second.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          We map how your business actually runs, remove avoidable friction, and implement simple systems your team can
          sustain. No hype. No bloated transformation program.
        </p>
      </Reveal>
    </section>
  );
}
