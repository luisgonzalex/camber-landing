import { z } from "zod";

export const auditInputSchema = z.object({
  company_name: z.string().min(1),
  team_size: z.string().min(1),
  answers: z
    .array(
      z.object({
        question_id: z.string().min(1),
        question: z.string().min(1),
        answer: z.string().min(1),
      }),
    )
    .length(8),
});

export const auditOutputSchema = z.object({
  clarity_score: z.number().min(0).max(100),
  top_bottlenecks: z.array(z.string()).length(3),
  quick_wins: z.array(z.string()).min(3).max(5),
  roadmap: z
    .array(
      z.object({
        phase: z.string().min(1),
        focus: z.string().min(1),
        actions: z.array(z.string()).min(2).max(5),
      }),
    )
    .length(3),
  estimated_impact: z.object({
    time_saved: z.string().min(1),
    conversion_improvement: z.string().min(1),
    operational_visibility: z.string().min(1),
  }),
  recommended_next_step: z.string().min(1),
});

export type AuditInput = z.infer<typeof auditInputSchema>;
export type AuditOutput = z.infer<typeof auditOutputSchema>;

export const auditJsonSchema = {
  name: "operational_clarity_audit",
  strict: true,
  schema: {
    type: "object",
    additionalProperties: false,
    required: [
      "clarity_score",
      "top_bottlenecks",
      "quick_wins",
      "roadmap",
      "estimated_impact",
      "recommended_next_step",
    ],
    properties: {
      clarity_score: { type: "number", minimum: 0, maximum: 100 },
      top_bottlenecks: {
        type: "array",
        minItems: 3,
        maxItems: 3,
        items: { type: "string" },
      },
      quick_wins: {
        type: "array",
        minItems: 3,
        maxItems: 5,
        items: { type: "string" },
      },
      roadmap: {
        type: "array",
        minItems: 3,
        maxItems: 3,
        items: {
          type: "object",
          additionalProperties: false,
          required: ["phase", "focus", "actions"],
          properties: {
            phase: { type: "string" },
            focus: { type: "string" },
            actions: {
              type: "array",
              minItems: 2,
              maxItems: 5,
              items: { type: "string" },
            },
          },
        },
      },
      estimated_impact: {
        type: "object",
        additionalProperties: false,
        required: ["time_saved", "conversion_improvement", "operational_visibility"],
        properties: {
          time_saved: { type: "string" },
          conversion_improvement: { type: "string" },
          operational_visibility: { type: "string" },
        },
      },
      recommended_next_step: { type: "string" },
    },
  },
} as const;
