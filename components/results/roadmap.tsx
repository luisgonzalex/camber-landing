import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AuditRoadmapPhase } from "@/types/audit";

type RoadmapProps = {
  phases: AuditRoadmapPhase[];
};

export function Roadmap({ phases }: RoadmapProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-sans text-xl">90-Day Roadmap</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {phases.map((phase) => (
          <div key={phase.phase} className="rounded-md border border-border bg-background p-4">
            <p className="font-semibold text-primary">{phase.phase}</p>
            <p className="mt-1 text-sm text-muted-foreground">{phase.focus}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed">
              {phase.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
