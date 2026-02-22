import OpenAI from "openai";
import { AUDIT_SYSTEM_PROMPT } from "@/lib/ai/prompt";
import { AuditInput, auditJsonSchema, auditOutputSchema, AuditOutput } from "@/lib/ai/schema";

const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

function getClient() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY");
  }
  return new OpenAI({ apiKey });
}

function normalizeError(error: unknown) {
  if (error instanceof Error) {
    return { message: error.message, name: error.name };
  }
  return { message: "Unknown error", name: "UnknownError" };
}

export async function analyzeAuditWithRetry(input: AuditInput, maxAttempts = 3): Promise<AuditOutput> {
  const client = getClient();
  let lastError: unknown;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const startedAt = Date.now();

    try {
      const completion = await client.chat.completions.create({
        model,
        temperature: 0.3,
        messages: [
          { role: "system", content: AUDIT_SYSTEM_PROMPT },
          {
            role: "user",
            content: JSON.stringify({
              company_name: input.company_name,
              team_size: input.team_size,
              answers: input.answers,
            }),
          },
        ],
        response_format: {
          type: "json_schema",
          json_schema: auditJsonSchema,
        },
      });

      const content = completion.choices[0]?.message?.content;
      if (!content) {
        throw new Error("Model returned empty content");
      }

      const parsed = JSON.parse(content);
      const validated = auditOutputSchema.parse(parsed);

      console.info("audit_usage", {
        attempt,
        latency_ms: Date.now() - startedAt,
        model,
        prompt_tokens: completion.usage?.prompt_tokens ?? null,
        completion_tokens: completion.usage?.completion_tokens ?? null,
        total_tokens: completion.usage?.total_tokens ?? null,
      });

      return validated;
    } catch (error) {
      lastError = error;
      console.warn("audit_attempt_failed", {
        attempt,
        latency_ms: Date.now() - startedAt,
        ...normalizeError(error),
      });
    }
  }

  throw lastError;
}
