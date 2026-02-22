import { Reveal } from "@/components/landing/reveal";

const faqs = [
  {
    question: "How long does the audit take?",
    answer: "Most teams finish in under 3 minutes.",
  },
  {
    question: "Who is this built for?",
    answer: "Founder-led businesses with 1-25 employees that need more operating structure.",
  },
  {
    question: "Is this an AI agency service?",
    answer: "No. AI supports the diagnosis, but systems and execution are the product.",
  },
  {
    question: "What do we get at the end?",
    answer: "A clarity score, top bottlenecks, quick wins, a 3-phase 90-day roadmap, and recommended next step.",
  },
];

export function Faq() {
  return (
    <section className="section-shell pb-12 sm:pb-16">
      <Reveal className="space-y-5">
        <div className="space-y-2">
          <p className="eyebrow">FAQ</p>
          <h2 className="font-serif text-3xl sm:text-4xl">Questions before you start</h2>
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
