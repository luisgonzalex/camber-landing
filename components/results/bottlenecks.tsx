import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type BottlenecksProps = {
  items: string[];
};

export function Bottlenecks({ items }: BottlenecksProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-sans text-xl">Top 3 Bottlenecks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-sm leading-relaxed">
          {items.map((item, index) => (
            <li key={item} className="rounded-md border border-border bg-background p-3">
              <span className="mr-2 font-semibold text-primary">{index + 1}.</span>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
