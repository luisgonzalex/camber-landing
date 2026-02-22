export type AuditQuestion = {
  id: string;
  prompt: string;
  description: string;
  options: string[];
};

export type AuditAnswer = {
  question_id: string;
  question: string;
  answer: string;
};

export type AuditInput = {
  company_name: string;
  team_size: string;
  answers: AuditAnswer[];
};

export type AuditRoadmapPhase = {
  phase: string;
  focus: string;
  actions: string[];
};

export type AuditResult = {
  clarity_score: number;
  top_bottlenecks: string[];
  quick_wins: string[];
  roadmap: AuditRoadmapPhase[];
  estimated_impact: {
    time_saved: string;
    conversion_improvement: string;
    operational_visibility: string;
  };
  recommended_next_step: string;
};

export type LeadPayload = {
  email: string;
  company_name: string;
  clarity_score: number;
  recommended_next_step: string;
};
