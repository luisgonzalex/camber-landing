import { Reveal } from "@/components/landing/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    title: "Complete the 8-question audit",
    text: "Capture how your team currently handles planning, handoffs, visibility, and priorities.",
  },
  {
    title: "Review your clarity scorecard",
    text: "See your score, top bottlenecks, and specific quick wins for the next 7 days.",
  },
  {
    title: "Execute a 90-day roadmap",
    text: "Follow a phased operating plan: stabilize, standardize, and scale execution.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-shell pb-12 sm:pb-16">
      <Reveal className="mb-6 space-y-3">
        <p className="eyebrow">How it works</p>
        <h2 className="font-serif text-3xl sm:text-4xl">Fast diagnosis. Clear execution plan.</h2>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-3">
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={80 * (index + 1)}>
            <Card className="h-full border-primary/20 bg-primary/[0.06]">
              <CardHeader>
                <p className="text-sm font-semibold text-primary">Step {index + 1}</p>
                <CardTitle className="font-sans text-xl leading-snug">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm leading-relaxed text-muted-foreground">{step.text}</CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
