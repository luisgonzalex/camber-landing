import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="section-shell pt-6 sm:pt-8">
      <div className="flex items-center justify-between rounded-xl border border-border/80 bg-card/85 px-4 py-3 backdrop-blur sm:px-5">
        <Link href="/" className="inline-flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            C
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide">Camber Consulting</span>
            <span className="text-[11px] text-muted-foreground">Operational systems for RGV teams</span>
          </span>
        </Link>
        <Link href="/audit">
          <Button size="sm">Try Free Audit Tool</Button>
        </Link>
      </div>
    </header>
  );
}
