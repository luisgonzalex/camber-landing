import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const problems = [
  {
    title: "Priorities shift mid-week",
    description: "Teams start with a plan but drift into urgent work by Wednesday.",
  },
  {
    title: "Work stalls in handoffs",
    description: "Delivery slows where ownership changes and follow-through is unclear.",
  },
  {
    title: "Leadership stays reactive",
    description: "Founders spend too much time unblocking work and chasing updates.",
  },
];

export function Problems() {
  return (
    <section className="section-shell py-12 sm:py-16">
      <div className="mb-6 space-y-3">
        <p className="eyebrow">Where teams get stuck</p>
        <h2 className="font-serif text-3xl sm:text-4xl">Growth pressure exposes operating gaps</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {problems.map((problem, index) => (
          <Card key={problem.title} className="group border-border/80 bg-card/95 transition-transform duration-300 hover:-translate-y-1">
            <CardHeader>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">0{index + 1}</p>
              <CardTitle className="font-sans text-xl leading-snug">{problem.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-sm leading-relaxed text-muted-foreground">{problem.description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
