import { Button } from "@/components/ui/button";

type ErrorStateProps = {
  message: string;
  onRetry: () => void;
};

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-5">
      <p className="font-medium text-red-800">We could not complete your audit.</p>
      <p className="mt-2 text-sm text-red-700">{message}</p>
      <Button className="mt-4" variant="outline" onClick={onRetry}>
        Try again
      </Button>
    </div>
  );
}
