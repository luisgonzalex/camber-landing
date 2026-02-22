import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="section-shell pb-16 sm:pb-24">
      <Reveal className="rounded-2xl border border-primary/35 bg-gradient-to-r from-primary/20 via-card/90 to-accent/40 p-7 sm:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl space-y-2">
            <p className="eyebrow">Start now</p>
            <h3 className="font-serif text-2xl leading-tight sm:text-3xl">No long forms. No meeting bots. Just a clear scorecard.</h3>
          </div>
          <Link href="/audit" className="sm:flex-none">
            <Button size="lg" className="w-full sm:w-auto">
              Take the Operational Clarity Audit
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
