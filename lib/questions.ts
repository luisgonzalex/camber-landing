import { AuditQuestion } from "@/types/audit";

export const AUDIT_QUESTIONS: AuditQuestion[] = [
  {
    id: "q1",
    prompt: "How clear are weekly priorities across your team?",
    description: "Choose the option that most closely matches your current operating rhythm.",
    options: [
      "Very clear: priorities are documented and stable",
      "Mostly clear: occasional confusion",
      "Inconsistent: priorities shift during the week",
      "Unclear: daily firefighting drives the agenda",
    ],
  },
  {
    id: "q2",
    prompt: "How are roles and ownership defined for key work?",
    description: "Think about handoffs, accountability, and decision rights.",
    options: [
      "Ownership is explicit for most recurring work",
      "Ownership exists but overlaps in some areas",
      "Ownership is often unclear",
      "Ownership depends on who is available",
    ],
  },
  {
    id: "q3",
    prompt: "How often do projects stall between teams or people?",
    description: "Focus on waits, blockers, and missed handoffs.",
    options: [
      "Rarely stall",
      "Sometimes stall but recover quickly",
      "Frequently stall for multiple days",
      "Stalls are constant and hard to diagnose",
    ],
  },
  {
    id: "q4",
    prompt: "How consistent is your weekly planning and review cadence?",
    description: "Use your last 6-8 weeks as reference.",
    options: [
      "Consistent cadence with clear follow-through",
      "Mostly consistent with occasional misses",
      "Irregular cadence",
      "No reliable planning and review rhythm",
    ],
  },
  {
    id: "q5",
    prompt: "How visible is work status to leadership and the team?",
    description: "Consider whether progress can be understood quickly without chasing updates.",
    options: [
      "High visibility: one trusted source",
      "Moderate visibility: mostly clear",
      "Low visibility: updates are fragmented",
      "Very low visibility: status is hard to confirm",
    ],
  },
  {
    id: "q6",
    prompt: "When priorities change, how smoothly does execution adapt?",
    description: "Assess change management and re-alignment speed.",
    options: [
      "Smoothly, with minimal disruption",
      "Some disruption, but manageable",
      "Disruption is common and slows delivery",
      "Changes create major confusion and rework",
    ],
  },
  {
    id: "q7",
    prompt: "How documented are your core operating processes?",
    description: "Think of onboarding, client delivery, and internal execution.",
    options: [
      "Well documented and actively used",
      "Partially documented",
      "Minimal documentation",
      "No reliable process documentation",
    ],
  },
  {
    id: "q8",
    prompt: "What best describes your current growth stage pressure?",
    description: "Select the biggest pressure pattern right now.",
    options: [
      "Scaling demand with stable internal operations",
      "Growing demand with occasional capacity strain",
      "Demand and operations frequently out of sync",
      "Operations are the main constraint on growth",
    ],
  },
];
