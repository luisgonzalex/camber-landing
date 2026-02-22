import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AuditQuestion } from "@/types/audit";

type QuestionCardProps = {
  question: AuditQuestion;
  selected?: string;
  onSelect: (value: string) => void;
};

export function QuestionCard({ question, selected, onSelect }: QuestionCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-sans text-2xl leading-snug">{question.prompt}</CardTitle>
        <p className="text-sm text-muted-foreground">{question.description}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selected === option;
          return (
            <label
              key={option}
              className={`flex cursor-pointer gap-3 rounded-md border p-3 transition-colors ${
                isSelected ? "border-primary bg-primary/10" : "hover:bg-muted/70"
              }`}
            >
              <input
                type="radio"
                name={question.id}
                checked={isSelected}
                onChange={() => onSelect(option)}
                className="mt-1 h-4 w-4 accent-[hsl(var(--primary))]"
              />
              <span className="text-sm leading-relaxed">{option}</span>
            </label>
          );
        })}
      </CardContent>
    </Card>
  );
}
