import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ImpactProps = {
  impact: {
    time_saved: string;
    conversion_improvement: string;
    operational_visibility: string;
  };
};

export function Impact({ impact }: ImpactProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-sans text-xl">Estimated Impact</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm leading-relaxed">
        <div className="rounded-md border border-border bg-background p-3">
          <p className="font-semibold">Time saved</p>
          <p className="text-muted-foreground">{impact.time_saved}</p>
        </div>
        <div className="rounded-md border border-border bg-background p-3">
          <p className="font-semibold">Conversion improvement</p>
          <p className="text-muted-foreground">{impact.conversion_improvement}</p>
        </div>
        <div className="rounded-md border border-border bg-background p-3">
          <p className="font-semibold">Operational visibility</p>
          <p className="text-muted-foreground">{impact.operational_visibility}</p>
        </div>
      </CardContent>
    </Card>
  );
}
