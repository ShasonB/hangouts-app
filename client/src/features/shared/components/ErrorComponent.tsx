import { useRouter } from "@tanstack/react-router";
import Card from "./ui/Card";
import { Button } from "./ui/Button";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export function ErrorComponent() {
  const router = useRouter();

  return (
    <Card className="flex flex-col items-center justify-center gap-2">
      <AlertTriangle className="h-8 w-8" />
      <p>Something went wrong.</p>
      <Button variant="ghost" onClick={() => router.invalidate()}>
        <RefreshCcw className="h-4 w-4" />
        Try Again
      </Button>
    </Card>
  );
}
