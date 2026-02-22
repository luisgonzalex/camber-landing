import { Reveal } from "@/components/landing/reveal";

const faqs = [
  {
    question: "Is Camber a consulting firm or a software product?",
    answer: "Camber is a consulting firm. The audit is a free tool we built to diagnose fit and surface opportunities.",
  },
  {
    question: "Who is this best for?",
    answer: "RGV founder-led teams (1-25 employees) that are growing but feeling operational friction.",
  },
  {
    question: "What problems do you usually fix?",
    answer: "Lead tracking gaps, manual follow-up, disconnected tools, low visibility, and founder overload.",
  },
  {
    question: "How do engagements work?",
    answer: "We start with diagnosis, then implement practical systems and automation in focused phases.",
  },
];

export function Faq() {
  return (
    <section className="section-shell pb-12 sm:pb-16">
      <Reveal className="space-y-5">
        <div className="space-y-2">
          <p className="eyebrow">FAQ</p>
          <h2 className="font-serif text-3xl sm:text-4xl">Questions before we work together</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-lg border border-border/80 bg-card/95 p-4 open:border-primary/40">
              <summary className="cursor-pointer list-none pr-8 text-sm font-semibold sm:text-base">{faq.question}</summary>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
