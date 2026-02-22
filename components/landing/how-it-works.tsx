import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    title: "1) Complete an 8-question audit",
    text: "Share how your team currently plans, executes, and handles handoffs.",
  },
  {
    title: "2) Get a practical diagnosis",
    text: "Receive your clarity score, top bottlenecks, and immediate quick wins.",
  },
  {
    title: "3) Follow a 90-day roadmap",
    text: "Use a phased plan to stabilize, standardize, and scale operations.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-shell pb-14 sm:pb-20">
      <div className="mb-6 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">How it works</p>
        <h2 className="font-serif text-3xl sm:text-4xl">Simple and structured</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.title} className="border-primary/20 bg-card/95">
            <CardHeader>
              <CardTitle className="font-sans text-xl leading-snug">{step.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-muted-foreground">{step.text}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
