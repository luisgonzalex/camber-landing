export function LoadingState() {
  return (
    <div className="rounded-lg border border-border bg-card p-6 text-center">
      <div className="mx-auto mb-3 h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      <p className="font-medium">Analyzing your operations...</p>
      <p className="mt-2 text-sm text-muted-foreground">This usually takes 10-20 seconds.</p>
    </div>
  );
}
