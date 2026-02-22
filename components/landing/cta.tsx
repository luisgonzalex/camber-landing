import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  const strategyCallUrl =
    process.env.NEXT_PUBLIC_STRATEGY_CALL_URL ||
    "mailto:hello@camberconsulting.com?subject=Request%20Strategy%20Call";

  return (
    <section className="section-shell pb-16 sm:pb-24">
      <Reveal className="rounded-2xl border border-primary/35 bg-gradient-to-r from-primary/20 via-card/90 to-accent/40 p-7 sm:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl space-y-2">
            <p className="eyebrow">Next step</p>
            <h3 className="font-serif text-2xl leading-tight sm:text-3xl">Start with the tool. Then fix the system.</h3>
            <p className="text-sm text-muted-foreground">Take the audit now, or book a strategy call if you are ready to implement.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-none">
            <Link href="/audit">
              <Button size="lg" className="w-full sm:w-auto">
                Try Free Audit Tool
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href={strategyCallUrl} target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Request Strategy Call
              </Button>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
