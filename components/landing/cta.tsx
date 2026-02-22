import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="section-shell pb-16 sm:pb-24">
      <div className="rounded-2xl border border-primary/25 bg-primary/10 p-8 sm:p-10">
        <div className="max-w-2xl space-y-4">
          <h3 className="font-serif text-3xl">See what is slowing execution</h3>
          <p className="text-muted-foreground">
            Finish the Operational Clarity Audit and get a focused action plan for the next 7 and 90 days.
          </p>
          <Link href="/audit">
            <Button size="lg">Take the Operational Clarity Audit</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
