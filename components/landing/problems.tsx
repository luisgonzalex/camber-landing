import { Reveal } from "@/components/landing/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ways = [
  {
    title: "Lead flow becomes visible",
    description: "We fix scattered lead tracking and manual follow-up so pipeline is measurable.",
  },
  {
    title: "Disconnected tools get aligned",
    description: "We simplify your stack and reduce duplicate work across systems and people.",
  },
  {
    title: "Founder load gets lighter",
    description: "We move execution out of your head into clear ownership and weekly operating rhythm.",
  },
  {
    title: "Team execution gets consistent",
    description: "We install practical workflows so growth feels controlled, not reactive.",
  },
];

export function Problems() {
  return (
    <section className="section-shell py-12 sm:py-16">
      <Reveal className="mb-6 space-y-3">
        <p className="eyebrow">How Camber helps</p>
        <h2 className="font-serif text-3xl sm:text-4xl">Four ways we improve operations</h2>
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
