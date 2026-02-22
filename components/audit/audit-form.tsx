"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AUDIT_QUESTIONS } from "@/lib/questions";
import { AuditAnswer, AuditResult } from "@/types/audit";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuditProgress } from "@/components/audit/progress";
import { QuestionCard } from "@/components/audit/question-card";
import { LoadingState } from "@/components/audit/loading-state";
import { ErrorState } from "@/components/audit/error-state";

const STORAGE_KEY = "camber.audit.result";

type ApiResponse = {
  ok: boolean;
  result?: AuditResult;
  message?: string;
};

export function AuditForm() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const currentQuestion = AUDIT_QUESTIONS[currentIndex];
  const selectedAnswer = answers[currentQuestion.id];
  const isLastQuestion = currentIndex === AUDIT_QUESTIONS.length - 1;

  const canContinue = useMemo(() => {
    const hasCompany = companyName.trim().length > 1;
    const hasTeamSize = teamSize.trim().length > 0;
    const hasCurrentAnswer = Boolean(selectedAnswer);
    return hasCompany && hasTeamSize && hasCurrentAnswer;
  }, [companyName, teamSize, selectedAnswer]);

  function handleSelect(value: string) {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  }

  async function submitAudit() {
    if (!canContinue) return;

    const parsedAnswers: AuditAnswer[] = AUDIT_QUESTIONS.map((question) => ({
      question_id: question.id,
      question: question.prompt,
      answer: answers[question.id],
    }));

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company_name: companyName.trim(),
          team_size: teamSize.trim(),
          answers: parsedAnswers,
        }),
      });

      const data = (await response.json()) as ApiResponse;

      if (!response.ok || !data.ok || !data.result) {
        throw new Error(data.message || "Please try again in a moment.");
      }

      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          created_at: new Date().toISOString(),
          company_name: companyName.trim(),
          team_size: teamSize.trim(),
          result: data.result,
        }),
      );

      router.push("/results");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Please try again in a moment.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleNext() {
    if (isLastQuestion) {
      void submitAudit();
      return;
    }

    setCurrentIndex((prev) => Math.min(prev + 1, AUDIT_QUESTIONS.length - 1));
  }

  function handleBack() {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }

  if (isSubmitting) {
    return <LoadingState />;
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company-name">Company name</Label>
          <Input
            id="company-name"
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
            placeholder="Example: Rio Distribution Co."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="team-size">Team size</Label>
          <Input
            id="team-size"
            value={teamSize}
            onChange={(event) => setTeamSize(event.target.value)}
            placeholder="Example: 12"
          />
        </div>
      </div>

      <AuditProgress current={currentIndex + 1} total={AUDIT_QUESTIONS.length} />

      <QuestionCard question={currentQuestion} selected={selectedAnswer} onSelect={handleSelect} />

      {errorMessage ? <ErrorState message={errorMessage} onRetry={() => setErrorMessage("")} /> : null}

      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={handleBack} disabled={currentIndex === 0}>
          Back
        </Button>
        <Button onClick={handleNext} disabled={!canContinue}>
          {isLastQuestion ? "Get my clarity score" : "Next question"}
        </Button>
      </div>
    </div>
  );
}
