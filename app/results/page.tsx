"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Bottlenecks } from "@/components/results/bottlenecks";
import { EmailCapture } from "@/components/results/email-capture";
import { Impact } from "@/components/results/impact";
import { QuickWins } from "@/components/results/quick-wins";
import { Roadmap } from "@/components/results/roadmap";
import { ScoreCard } from "@/components/results/score-card";
import { StrategyCta } from "@/components/results/strategy-cta";
import { Button } from "@/components/ui/button";
import { AuditResult } from "@/types/audit";

const STORAGE_KEY = "camber.audit.result";

type StoredAudit = {
  created_at: string;
  company_name: string;
  team_size: string;
  result: AuditResult;
};

export default function ResultsPage() {
  const [data, setData] = useState<StoredAudit | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as StoredAudit;
      setData(parsed);
    } catch {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  if (!data) {
    return (
      <main className="section-shell py-16">
        <div className="mx-auto max-w-2xl rounded-lg border border-border bg-card p-8 text-center">
          <h1 className="font-serif text-3xl">No audit results found</h1>
          <p className="mt-3 text-muted-foreground">Complete the audit to get your clarity score and roadmap.</p>
          <Link href="/audit" className="mt-6 inline-flex">
            <Button>Take the audit</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="section-shell py-10 sm:py-14">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">Operational Clarity Results</p>
          <h1 className="font-serif text-4xl leading-tight">{data.company_name}</h1>
          <p className="text-sm text-muted-foreground">Generated for a team of {data.team_size}.</p>
        </div>

        <ScoreCard score={data.result.clarity_score} />
        <Bottlenecks items={data.result.top_bottlenecks} />
        <QuickWins items={data.result.quick_wins} />
        <Roadmap phases={data.result.roadmap} />
        <Impact impact={data.result.estimated_impact} />
        <StrategyCta recommendation={data.result.recommended_next_step} />
        <EmailCapture
          companyName={data.company_name}
          clarityScore={data.result.clarity_score}
          recommendedNextStep={data.result.recommended_next_step}
        />
      </div>
    </main>
  );
}
