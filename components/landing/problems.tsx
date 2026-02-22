import { Reveal } from "@/components/landing/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ways = [
  {
    title: "Fix priority drift",
    description: "Create one weekly priority system that the full team can execute against.",
  },
  {
    title: "Reduce handoff delays",
    description: "Clarify ownership and handoff rules so work does not stall between people.",
  },
  {
    title: "Increase operating visibility",
    description: "Set up a practical view of status, blockers, and commitments for leaders.",
  },
  {
    title: "Install execution rhythm",
    description: "Build a repeatable weekly cadence for planning, review, and follow-through.",
  },
];

export function Problems() {
  return (
    <section className="section-shell py-12 sm:py-16">
      <Reveal className="mb-6 space-y-3">
        <p className="eyebrow">Product outcome</p>
        <h2 className="font-serif text-3xl sm:text-4xl">Four ways we make operations better</h2>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {ways.map((item, index) => (
          <Reveal key={item.title} delay={80 * (index + 1)}>
            <Card className="h-full border-border/80 bg-card/95">
              <CardHeader>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">0{index + 1}</p>
                <CardTitle className="font-sans text-xl leading-snug">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm leading-relaxed text-muted-foreground">{item.description}</CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
