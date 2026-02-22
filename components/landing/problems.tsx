import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const problems = [
  "Priorities shift weekly and teams lose focus.",
  "Work gets stuck between people, not inside tasks.",
  "Leaders spend time firefighting instead of steering.",
];

export function Problems() {
  return (
    <section className="section-shell py-14 sm:py-20">
      <div className="mb-6 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">Common friction</p>
        <h2 className="font-serif text-3xl sm:text-4xl">Where growth starts to break</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {problems.map((problem) => (
          <Card key={problem} className="bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="font-sans text-lg leading-snug">{problem}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-sm text-muted-foreground">
              Camber helps teams replace recurring friction with repeatable operating structure.
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
