import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { analyzeAuditWithRetry } from "@/lib/ai/analyze";
import { auditInputSchema } from "@/lib/ai/schema";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const input = auditInputSchema.parse(body);

    const result = await analyzeAuditWithRetry(input, 3);
    return NextResponse.json({ ok: true, result });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { ok: false, error: "invalid_input", details: error.flatten() },
        { status: 400 },
      );
    }

    console.error("audit_failed", error);
    return NextResponse.json(
      {
        ok: false,
        error: "analysis_unavailable",
        message: "We couldn't generate your audit right now. Please try again.",
      },
      { status: 502 },
    );
  }
}
