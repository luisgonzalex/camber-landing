import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ScoreCardProps = {
  score: number;
};

function scoreLabel(score: number) {
  if (score < 40) return "Low clarity";
  if (score < 70) return "Partial clarity";
  return "Strong clarity";
}

export function ScoreCard({ score }: ScoreCardProps) {
  return (
    <Card className="border-primary/25 bg-primary/10">
      <CardHeader>
        <CardTitle className="font-sans text-xl">Clarity Score</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-serif text-6xl leading-none">{score}</p>
        <p className="mt-2 text-sm text-muted-foreground">{scoreLabel(score)} based on your current operating system.</p>
      </CardContent>
    </Card>
  );
}
