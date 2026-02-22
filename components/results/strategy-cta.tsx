import { Button } from "@/components/ui/button";

type StrategyCtaProps = {
  recommendation: string;
};

export function StrategyCta({ recommendation }: StrategyCtaProps) {
  const strategyCallUrl =
    process.env.NEXT_PUBLIC_STRATEGY_CALL_URL ||
    "mailto:hello@camberconsulting.com?subject=Request%20Strategy%20Call";

  return (
    <div className="rounded-lg border border-primary/30 bg-primary/10 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">Recommended next step</p>
      <p className="mt-2 text-sm leading-relaxed">{recommendation}</p>
      <a href={strategyCallUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex">
        <Button>Request Strategy Call</Button>
      </a>
    </div>
  );
}
