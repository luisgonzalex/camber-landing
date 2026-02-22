import { Progress } from "@/components/ui/progress";

type AuditProgressProps = {
  current: number;
  total: number;
};

export function AuditProgress({ current, total }: AuditProgressProps) {
  const percent = total === 0 ? 0 : Math.round((current / total) * 100);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Question {current} of {total}
        </span>
        <span>{percent}%</span>
      </div>
      <Progress value={percent} />
    </div>
  );
}
