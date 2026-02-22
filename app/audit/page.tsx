import Link from "next/link";
import { AuditForm } from "@/components/audit/audit-form";

export default function AuditPage() {
  return (
    <main className="section-shell py-12 sm:py-16">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-3">
          <Link href="/" className="text-sm text-muted-foreground hover:underline">
            Back to landing page
          </Link>
          <h1 className="font-serif text-4xl leading-tight">Operational Clarity Audit</h1>
          <p className="text-muted-foreground">
            8 quick questions to diagnose execution friction and identify practical next steps.
          </p>
        </div>

        <AuditForm />
      </div>
    </main>
  );
}
