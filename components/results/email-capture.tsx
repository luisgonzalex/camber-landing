"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type EmailCaptureProps = {
  companyName: string;
  clarityScore: number;
  recommendedNextStep: string;
};

export function EmailCapture({ companyName, clarityScore, recommendedNextStep }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          company_name: companyName,
          clarity_score: clarityScore,
          recommended_next_step: recommendedNextStep,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit lead");
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 rounded-lg border border-border bg-card p-6">
      <h3 className="font-sans text-lg font-semibold">Send me this audit summary</h3>
      <p className="text-sm text-muted-foreground">Get a copy by email and keep the action plan handy.</p>
      <div className="space-y-2">
        <Label htmlFor="email">Work email</Label>
        <Input
          id="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="name@company.com"
        />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Email my results"}
      </Button>
      {status === "success" ? <p className="text-sm text-green-700">Summary sent. Check your inbox.</p> : null}
      {status === "error" ? <p className="text-sm text-red-700">Unable to send right now. Please try again.</p> : null}
    </form>
  );
}
