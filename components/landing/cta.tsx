import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="section-shell pb-16 sm:pb-24">
      <Reveal className="rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/15 via-card/85 to-accent/40 p-8 sm:p-11">
        <div className="max-w-2xl space-y-4">
          <p className="eyebrow">Operational Clarity Audit</p>
          <h3 className="font-serif text-3xl leading-tight sm:text-4xl">See what is slowing execution this quarter.</h3>
          <p className="text-muted-foreground">
            Finish the audit and get an immediate scorecard with practical next steps for your team.
          </p>
          <Link href="/audit">
            <Button size="lg" className="mt-2">
              Take the Operational Clarity Audit
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
