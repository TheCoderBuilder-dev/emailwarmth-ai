
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { WarmupForm } from "./WarmupForm";

export function WarmupConfigCard() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Email Warm-up Configuration</CardTitle>
        <CardDescription>
          Set up your email warm-up campaign to improve deliverability
        </CardDescription>
      </CardHeader>
      <CardContent>
        <WarmupForm />
      </CardContent>
    </Card>
  );
}
