import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type QuickWinsProps = {
  items: string[];
};

export function QuickWins({ items }: QuickWinsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-sans text-xl">Quick Wins (Next 7 Days)</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-sm leading-relaxed">
          {items.map((item) => (
            <li key={item} className="rounded-md border border-border bg-background p-3">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
